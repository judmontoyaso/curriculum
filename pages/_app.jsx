import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../styles/globals.css";
import "../styles/poPoutEffect.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import TagManager from "react-gtm-module/dist/TagManager";
config.autoAddCss = false;



function MyApp({ Component, pageProps}) {
  
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-M2WN9NN' });
    window.dataLayer.push({ 
      event: 'pageview',
  page: {
      url: 'https://www.juandeveloper.ninja/',
      title: 'Juan David Montoya',
    }}); 
    console.log(window.dataLayer)
}, []);


  return (
    <>;
      <Head>
        <title>Juan David Montoya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Navigation />

        
    <Component {...pageProps} />
        
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
