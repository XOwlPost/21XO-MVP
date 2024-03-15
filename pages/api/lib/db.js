// pages/api/lib/db.js
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false},
});

export async function connectToDatabase() {
    const client = await pool.connect();
    return { client };
}

export async function queryDatabase(queryText, params) {
    const { client } = await connectToDatabase();
    try {
        const result = await client.query(queryText, params);
        return result;
    } finally {
        client.release();
    }
}
