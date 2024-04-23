"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Flowers() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Image
        alt="white flowers"
        src="/dan-lazar-flowers.jpg"
        width="300"
        height="600"
        objectFit="cover"
        className="rounded"
      />
    </motion.div>
  );
}
