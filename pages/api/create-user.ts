// pages/api/create-user.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Handle the POST request
        const user = req.body; // Assuming the request body contains user data
        // Process the user creation logic here...
        res.status(200).json({ status: 'success', data: user });
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
