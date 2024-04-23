"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Forest() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Image
        alt="forest"
        src="/dan-crile-forest.jpg"
        width="337"
        height="700"
        objectFit="cover"
        className="rounded"
      />
    </motion.div>
  );
}
