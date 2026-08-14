import "server-only";
import nodemailer from "nodemailer";

/**
 * Server-only email service for ARGO Engineering Industries website enquiries.
 *
 * Uses Nodemailer's built-in Gmail service configuration — no manual host/port/
 * TLS. Credentials come from environment variables only (GMAIL_USER / GMAIL_PASS)
 * and are never exposed to the client (`server-only` guards this module).
 */

export const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@argo-india.com";

/** True only when the Gmail credentials are present (lets callers fail cleanly). */
export function isEmailConfigured(): boolean {
  return Boolean(process.env.GMAIL_USER && process.env.GMAIL_PASS);
}

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export type SendEnquiryArgs = {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

/**
 * Send an enquiry email to the ARGO team. Sender is always the ARGO mailbox;
 * the visitor's address is set as Reply-To so the team can reply directly.
 */
export async function sendEnquiryEmail({ subject, html, text, replyTo }: SendEnquiryArgs) {
  await transporter.sendMail({
    from: `ARGO Engineering Industries <${process.env.GMAIL_USER}>`,
    to: CONTACT_EMAIL,
    subject,
    html,
    text,
    ...(replyTo ? { replyTo } : {}),
  });
}
