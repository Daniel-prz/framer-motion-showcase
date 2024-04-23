"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Eclipse() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Image
        alt="solar eclipse"
        src="/geronimo-eclipse.jpg"
        width="300"
        height="600"
        objectFit="cover"
        className="rounded"
      />
    </motion.div>
  );
}
