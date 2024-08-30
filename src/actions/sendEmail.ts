'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';
import { actionClient } from '@/lib/safe-action';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  number: z.string().min(1, { message: 'Phone number is required' }),
  subject: z.string().min(1, { message: 'Subject is required' }),
  message: z.string().min(1, { message: 'Message is required' }),
});

export const sendEmail = actionClient
  .schema(formSchema)
  .action(async ({ parsedInput }) => {
    if (!parsedInput) {
      return {
        error: 'Please fill in all the fields',
      };
    }

    console.log(parsedInput);

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `New Contact Form Submission: ${parsedInput.subject}`,
        text: `
      Name: ${parsedInput.name}
      Email: ${parsedInput.email}
      Phone: ${parsedInput.number}
      Subject: ${parsedInput.subject}
      Message: ${parsedInput.message}
    `,
      };

      await transporter.sendMail(mailOptions);

      return {
        success: 'Email sent successfully!',
      };
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        error: 'Failed to send email',
      };
    }
  });
