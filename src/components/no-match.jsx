import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export default function NoMatch() {
    return (
      <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 0.5 }}
      exit={{opacity: 0}}
      className="content-layout">
      <h2>Oops.</h2>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </motion.div>
    );
  }