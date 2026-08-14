// Standalone email diagnostic — runs OUTSIDE Next.js so it shows the exact Gmail
// result. Uses the SAME simple `service: 'Gmail'` config as the app.
//
// Usage (from the project root):
//   node --env-file=.env.local scripts/verify-email.mjs

import nodemailer from "nodemailer";

const { GMAIL_USER, GMAIL_PASS, CONTACT_EMAIL = "info@argo-india.com" } = process.env;

if (!GMAIL_USER || !GMAIL_PASS) {
  console.error("❌ GMAIL_USER or GMAIL_PASS is missing in .env.local");
  process.exit(1);
}

console.log(`User: ${GMAIL_USER}`);
console.log(`Password length: ${GMAIL_PASS.length} chars`);

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: { user: GMAIL_USER, pass: GMAIL_PASS },
});

try {
  console.log("\n1) Verifying connection + login…");
  await transporter.verify();
  console.log("   ✅ Gmail connection + authentication OK");

  console.log("\n2) Sending one test email…");
  const info = await transporter.sendMail({
    from: `ARGO Engineering Industries <${GMAIL_USER}>`,
    to: CONTACT_EMAIL,
    replyTo: "tester@example.com",
    subject: "New Website Enquiry — ARGO Engineering Industries (test)",
    text: "Production email functionality test. Name: ARGO Website Test.",
    html: "<p><strong>Production email functionality test.</strong><br/>Name: ARGO Website Test</p>",
  });
  console.log(`   ✅ Sent. messageId=${info.messageId}`);
  console.log(`   accepted=${JSON.stringify(info.accepted)}  rejected=${JSON.stringify(info.rejected)}`);
  console.log(`\n✅ Check the inbox of ${CONTACT_EMAIL}`);
} catch (err) {
  console.error("\n❌ FAILED:");
  console.error("   code:", err?.code);
  console.error("   command:", err?.command);
  console.error("   response:", err?.response);
  console.error("   message:", err?.message);
  process.exit(1);
}
