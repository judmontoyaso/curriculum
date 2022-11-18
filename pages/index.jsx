import About from "../components/About";
import { useRouter } from "next/router";


export default function Home() {
const ruta = new useRouter()
  console.log(ruta)
  return <div className="max-w-4xl mx-auto mt-16 antialiased"><About/></div>;
}
