'use client'
import { motion } from 'framer-motion';
import React from 'react';
const CrossfadeContainer = (props) => {
    return (
        <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.5 }}
        exit={{opacity: 0}}
        className={`content-layout ${props.className}`}
    >
        {props.children}
    </motion.div>
    )
}

export default CrossfadeContainer;