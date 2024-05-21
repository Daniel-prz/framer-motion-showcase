import { motion } from "framer-motion";
import Eclipse from "./components/Eclipse";
import Flowers from "./components/Flowers";
import Forest from "./components/Forest";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col justify-content justify-center align-items align-center">
      <Header />
      <div className="flex flex-row justify-content justify-center align-items align-center mt-12 gap-8">
        <Eclipse />
        <Flowers />
        <Forest />
      </div>
    </div>
  );
}
