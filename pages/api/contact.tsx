// /pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Brevo from 'sib-api-v3-sdk';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(405).end();

  const { firstName, lastName, email, message } = req.body;

  const defaultClient = Brevo.ApiClient.instance;
  const apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = process.env.BREVO_API_KEY;

  const apiInstance = new Brevo.TransactionalEmailsApi();

  const emailContent = {
    to: [{ email: 'lorin.jones@gmail.com', name: 'Lorin' }], // where the form email goes
    sender: { name: 'Waumaus Contact Form', email: 'lorin.jones@gmail.com' }, // must be verified in Brevo
    subject: 'New Contact Form Submission',
    replyTo: { email, name: `${firstName} ${lastName}` },
    htmlContent: `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await apiInstance.sendTransacEmail(emailContent);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
