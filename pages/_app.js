import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Particles from "react-tsparticles";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  
  return (
    <>
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
