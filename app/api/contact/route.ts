import { NextResponse } from "next/server";
import { sendEnquiryEmail, isEmailConfigured } from "@/lib/email";
import { products } from "@/data/products";

// Nodemailer needs the Node.js runtime (not Edge). Route handlers are dynamic.
export const runtime = "nodejs";

const COMPANY = "ARGO Engineering Industries";

// Per-field maximum lengths to prevent abuse.
const LIMITS: Record<string, number> = {
  name: 100,
  email: 150,
  phone: 40,
  company: 150,
  product: 160,
  quantity: 40,
  subject: 160,
  queryType: 100,
  message: 5000,
};

// Human labels + display order for known fields.
const FIELD_ORDER: { key: string; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "company", label: "Company" },
  { key: "product", label: "Product" },
  { key: "model", label: "Model" },
  { key: "productUrl", label: "Product URL" },
  { key: "queryType", label: "Query Type" },
  { key: "subject", label: "Subject" },
  { key: "quantity", label: "Quantity" },
  { key: "message", label: "Message" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Best-effort in-memory duplicate guard (same source + payload within a short
// window). Serverless instances are ephemeral, so this only catches rapid
// double-clicks / retries on a warm instance — the honeypot is the real filter.
const recent = new Map<string, number>();
const DEDUPE_MS = 15_000;
function isDuplicate(key: string): boolean {
  const now = Date.now();
  for (const [k, t] of recent) if (now - t > DEDUPE_MS) recent.delete(k);
  if (recent.has(key)) return true;
  recent.set(key, now);
  return false;
}

export async function POST(req: Request) {
  try {
    return await handleContact(req);
  } catch (err) {
    // Last-resort guard: any unexpected error returns a clean JSON response
    // (never a raw 500 with a stack trace) and logs a safe diagnostic.
    console.error("[contact] unexpected error:", err instanceof Error ? err.message : "unknown error");
    return NextResponse.json(
      { ok: false, error: "Unable to send enquiry at this time." },
      { status: 500 }
    );
  }
}

async function handleContact(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a hidden field real users never fill. Pretend success for bots.
  if (typeof body.company_website === "string" && body.company_website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // Normalise + trim all string values.
  const data: Record<string, string> = {};
  for (const [k, v] of Object.entries(body)) {
    if (k === "company_website" || k === "formType") continue;
    if (typeof v === "string") {
      const val = v.trim();
      if (val) data[k] = val;
    } else if (typeof v === "number") {
      data[k] = String(v);
    }
  }

  // Server-side validation.
  const name = data.name ?? "";
  const email = data.email ?? "";
  const message = data.message ?? "";
  const product = data.product && data.product !== "other" ? data.product : "";

  if (!name) return NextResponse.json({ ok: false, error: "Name is required." }, { status: 400 });
  if (!email || !EMAIL_RE.test(email))
    return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
  // A contact/query needs a message; a product enquiry can stand on the product alone.
  if (!message && !product)
    return NextResponse.json({ ok: false, error: "A message is required." }, { status: 400 });

  for (const [k, limit] of Object.entries(LIMITS)) {
    if (data[k] && data[k].length > limit)
      return NextResponse.json({ ok: false, error: "Submitted content is too long." }, { status: 400 });
  }

  // Enrich product enquiries with the model number + URL from our own catalogue.
  if (product) {
    const match = products.find((p) => p.name === product);
    const model = match?.specs.find((s) => s.label === "Model")?.value;
    if (model && !data.model) data.model = model;
    if (match && !data.productUrl) data.productUrl = `https://www.argoengg.in/products/${match.slug}`;
  }

  // Duplicate guard.
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isDuplicate(`${ip}|${email}|${message.slice(0, 200)}`))
    return NextResponse.json({ ok: true });

  // Subject line.
  let subject = `New Website Enquiry — ${COMPANY}`;
  if (product) subject = `New Product Enquiry — ${product} — ${COMPANY}`;
  else if (data.queryType) subject = `New Website Enquiry — ${data.queryType} — ${COMPANY}`;

  // Build the field rows (known fields in order, then any extras).
  const shownKeys = new Set(FIELD_ORDER.map((f) => f.key));
  const knownRows = FIELD_ORDER.filter((f) => data[f.key]).map((f) => ({
    label: f.label,
    value: data[f.key],
  }));
  const extraRows = Object.keys(data)
    .filter((k) => !shownKeys.has(k))
    .map((k) => ({ label: k.charAt(0).toUpperCase() + k.slice(1), value: data[k] }));

  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  const rowHtml = (rows: { label: string; value: string }[]) =>
    rows
      .map(
        (r) => `
      <tr>
        <td style="padding:10px 16px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#111827;white-space:nowrap;vertical-align:top;">${escapeHtml(
          r.label
        )}</td>
        <td style="padding:10px 16px;border-bottom:1px solid #e5e7eb;color:#374151;white-space:pre-wrap;">${escapeHtml(
          r.value
        )}</td>
      </tr>`
      )
      .join("");

  const html = `<!doctype html><html><body style="margin:0;background:#f3f4f6;padding:24px;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
    <tr><td style="background:#0E7A35;padding:22px 24px;">
      <div style="color:#ffffff;font-size:13px;letter-spacing:1px;text-transform:uppercase;opacity:.85;">${escapeHtml(
        COMPANY
      )}</div>
      <div style="color:#ffffff;font-size:22px;font-weight:700;margin-top:4px;">New Website Enquiry</div>
    </td></tr>
    <tr><td style="padding:20px 24px 4px;color:#374151;font-size:14px;line-height:1.6;">
      A new enquiry has been submitted through the ${escapeHtml(COMPANY)} website.
    </td></tr>
    <tr><td style="padding:12px 24px 0;">
      <div style="font-size:13px;font-weight:700;color:#0E7A35;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;">Enquiry Details</div>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;font-size:14px;">${rowHtml(
        knownRows
      )}</table>
    </td></tr>
    ${
      extraRows.length
        ? `<tr><td style="padding:16px 24px 0;">
      <div style="font-size:13px;font-weight:700;color:#0E7A35;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;">Additional Information</div>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;font-size:14px;">${rowHtml(
        extraRows
      )}</table></td></tr>`
        : ""
    }
    <tr><td style="padding:18px 24px 24px;">
      <div style="font-size:13px;font-weight:700;color:#0E7A35;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;">Submission Information</div>
      <div style="font-size:13px;color:#6b7280;line-height:1.7;">
        <strong style="color:#374151;">Source:</strong> ${escapeHtml(COMPANY)} Website<br/>
        <strong style="color:#374151;">Submitted:</strong> ${escapeHtml(submittedAt)} IST
      </div>
    </td></tr>
  </table>
  </body></html>`;

  const textLines = [
    `${COMPANY} — New Website Enquiry`,
    `A new enquiry has been submitted through the ${COMPANY} website.`,
    "",
    ...[...knownRows, ...extraRows].map((r) => `${r.label}: ${r.value}`),
    "",
    `Source: ${COMPANY} Website`,
    `Submitted: ${submittedAt} IST`,
  ];

  if (!isEmailConfigured()) {
    console.error("[contact] SMTP not configured — email not sent");
    return NextResponse.json(
      { ok: false, error: "Email service is not configured." },
      { status: 503 }
    );
  }

  try {
    await sendEnquiryEmail({ subject, html, text: textLines.join("\n"), replyTo: email });
    return NextResponse.json({ ok: true });
  } catch (err) {
    // Log a safe diagnostic (never the credentials or full transport error object).
    const msg = err instanceof Error ? err.message : "unknown error";
    console.error("[contact] email send failed:", msg);
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to send enquiry at this time.",
        // Dev-only: surface the SMTP reason to speed up local debugging. Never in production.
        ...(process.env.NODE_ENV !== "production" ? { detail: msg } : {}),
      },
      { status: 502 }
    );
  }
}
