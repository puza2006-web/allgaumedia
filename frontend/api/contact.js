import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Dozvoljavamo samo POST zahtjeve
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed!' });
  }

  // Podaci iz forme
  const { name, email, phone, company, service_interest, message } = req.body;

  // Provjera obaveznih polja
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Ime, email i poruka su obavezni!' });
  }

  try {
    // Slanje emaila na info@allgaumedia.de
    const { data, error } = await resend.emails.send({
      from: 'Kontakt forma <kontakt@allgaumedia.de>',
      to: ['info@allgaumedia.de'],
      replyTo: email,
      subject: `Nova poruka sa allgaumedia.de od ${name}`,
      html: `
        <h2>Nova kontakt poruka</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email pošiljaoca:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'nije uneseno'}</p>
        <p><strong>Firma:</strong> ${company || 'nije uneseno'}</p>
        <p><strong>Usluga:</strong> ${service_interest || 'nije odabrano'}</p>
        <p><strong>Poruka:</strong></p>
        <p>${message}</p>
        <hr />
        <p><small>Odgovorite direktno na: ${email}</small></p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Greška pri slanju poruke!' });
    }

    return res.status(200).json({ success: true, message: 'Poruka poslana!' });
  } catch (error) {
    console.error('Greška pri slanju emaila:', error);
    return res.status(500).json({ error: 'Greška pri slanju poruke!' });
  }
}