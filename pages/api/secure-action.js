// pages/api/secure-action.js
import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Proceed with blockchain interactions using Thirdweb SDK
};
