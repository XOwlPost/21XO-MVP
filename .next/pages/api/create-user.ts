import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Create user logic here
    res.status(201).json({ success: true, user: req.body });
  }
}
