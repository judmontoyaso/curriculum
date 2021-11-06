import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
