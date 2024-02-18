// pages/_app.js
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { SessionProvider } from "next-auth/react";

const desiredChainId = 1; // Mainnet. Change this to desired chain ID.

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThirdwebProvider desiredChainId={desiredChainId}>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </SessionProvider>
  );
}

export default MyApp;
