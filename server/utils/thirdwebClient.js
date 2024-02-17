import { createThirdwebClient } from "thirdweb";
const client = createThirdwebClient({
  secretKey: process.env.THIRDWEB_SECRET_KEY,
});
export default client;
