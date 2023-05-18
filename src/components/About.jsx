import React from 'react'
import '../css/About.css'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
    initial={{opacity: 0, transition: { duration: 0.5}}}
    animate={{opacity: 1, transition: { duration: 0.5, delay: 0.5}}}
    exit={{opacity: 0, transition: { duration: 0.5 }}}
    >
      About
    </motion.div>
  )
}

export default About