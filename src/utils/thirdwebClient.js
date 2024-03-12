import { createThirdwebClient } from "thirdweb";
const client = createThirdwebClient({
  clientId: process.env.THIRDWEB_CLIENT_ID,
});
export default client;
