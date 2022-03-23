import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      exit="exit"
      animate="show"
    >
      <h1>ContactUs</h1>
    </motion.div>
  );
};

export default ContactUs;
