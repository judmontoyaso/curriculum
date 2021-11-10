import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "./contact";
import styles from "../styles/Home.module.css";

export default function Home() {
  return <div className="max-w-4xl mx-auto mt-16 antialiased"><About/></div>;
}
