import crypto from 'crypto';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    const id = crypto.randomUUID();
    const country = req.headers['x-vercel-ip-country'] || 'unknown';

    return res.status(200).json({ message: 'OK', event: body, id, country });
  }
  return res.status(405).json({ message: 'Method not allowed' });
}
