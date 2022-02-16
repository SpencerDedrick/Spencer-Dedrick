import React from "react";
import { motion } from "framer-motion/dist/es/index";

function FMTest() {
  return (
    <div>
      <h1>HELLO THIS IS A TEST</h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="h-5 w-5 bg-red-500"
      />
    </div>
  );
}

export default FMTest;
