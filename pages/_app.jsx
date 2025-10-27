import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import OpenToWorkBanner from "../components/OpenToWorkBanner";
import { BannerProvider } from "../contexts/BannerContext";
import "../styles/globals.css";
import "../styles/poPoutEffect.css";
import "../styles/timeline.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import React, { useEffect } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import TagManager from "react-gtm-module/dist/TagManager";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-M2WN9NN" });
    window.dataLayer.push({
      event: "pageview",
      page: {
        url: "https://www.juandeveloper.ninja/",
        title: "Juan David Montoya",
      },
    });
  }, []);

  return (
    <>
      <Head>
        <title>Juan David Montoya</title>
        <meta name="description" content="Portfolio y CV de Juan David Montoya - Especialista en Analítica y Big Data" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </Head>
      <BannerProvider>
        <ThemeProvider attribute="class" enableSystem={false}>
          <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <OpenToWorkBanner />
            <Navigation />
            <main className="flex-grow">
              <Component {...pageProps} />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </BannerProvider>
    </>
  );
}

export default MyApp;
