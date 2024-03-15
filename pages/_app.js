// pages/_app.js
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { SessionProvider } from "next-auth/react";

const desiredChainId = 11155111; // Mainnet. Change this to desired chain ID.

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThirdwebProvider desiredChainId={desiredChainId}>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </SessionProvider>
  );

useEffect(() => {
  if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js').then((registration) => {
                console.log('Service Worker registered with scope:', registration.scope);
            }).catch((error) => {
                console.log('Service Worker registration failed:', error);
            });
        });
    }
}, []);
  
}

export default MyApp;
