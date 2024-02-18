// pages/api/create-user.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { hashPassword } from './lib/auth';
import { queryDatabase } from './lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        // Handle non-POST requests
        return res.status(405).end(`Method Not Allowed`);
    }

    const { email, password, name } = req.body;

    try {
        const { rows } = await queryDatabase('SELECT * FROM users WHERE email = $1', [email]);
        if (rows.length > 0) {
            return res.status(422).json({ message: 'User already exists.' });
        }

        const hashedPassword = await hashPassword(password);

        const result = await queryDatabase('INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING id', [email, hashedPassword, name]);
        return res.status(201).json({ id: result.rows[0].id, email, name });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}
