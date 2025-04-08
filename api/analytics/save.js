export default function handler(req, res) {
  if (req.method === 'POST') {
    const body = JSON.parse(req.body);

    return res.status(200).json({ message: 'OK', event: body });
  }
  return res.status(405).json({ message: 'Method not allowed' });
}
