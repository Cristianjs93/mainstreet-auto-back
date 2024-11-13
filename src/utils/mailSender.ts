import { Resend } from 'resend';
import * as fs from 'fs';
import * as path from 'path';
import handlebars from 'handlebars';

export async function sendOtpEmail(email: string, code: string): Promise<void> {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const emailTemplate = fs.readFileSync(
      path.join(process.cwd(), 'templates/email/OtpTemplate.hbs'),
      'utf8'
    );
    const template = handlebars.compile(emailTemplate);
    const html = template({
      code,
    });
    const { error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'Main Street Auto Alerts and Notifications Service',
      html,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    throw error;
  }
}
