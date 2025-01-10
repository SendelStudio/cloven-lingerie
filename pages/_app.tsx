import '@/styles/globals.css';
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Partie Plasmic */}
      <PlasmicRootProvider Head={Head}>
        <Component {...pageProps} />
      </PlasmicRootProvider>

      {/* Partie Simple Analytics */}
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </>
  );
}
