export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, company, service_interest, message } = req.body;

  console.log('📩 Primljena poruka:');
  console.log('Ime:', name);
  console.log('Email:', email);
  console.log('Telefon:', phone);
  console.log('Firma:', company);
  console.log('Usluga:', service_interest);
  console.log('Poruka:', message);

  return res.status(200).json({ 
    success: true, 
    message: 'Forma je primljena (test mod)' 
  });
}