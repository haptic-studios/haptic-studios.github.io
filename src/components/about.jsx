import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export default function About() {
    return (
      <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 0.5 }}
      exit={{opacity: 0}}
      className="content-layout">
      <h2>About</h2>
      </motion.div>
    );
  }