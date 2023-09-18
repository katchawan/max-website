import React, { useState }  from 'react'
import { motion } from 'framer-motion';
import '../css/Labs.css'
import labs from '../data/labs'
const Labs = () => {
  console.log(labs)
  return (
    <motion.div 
      className='labs--page--container'
      initial={{opacity: 0, transition: { duration: 0.5}}}
      animate={{opacity: 1, transition: { duration: 0.5, delay: 0.5}}}
      exit={{opacity: 0, transition: { duration: 0.5 }}}
    >
      <div className='labs--container'>
      {
        labs.map((lab, idx) => (
          <div className='lab--container'>
          <video controls className='video--source' poster={lab.poster} key={idx}>
            <source src={lab.source} type="video/mp4" />
          </video>
          <div className='lab--images--container'>
          {
            lab.imgs.map((img, idx) => (
              <img src={img} key={idx} alt="labimg" className='lab--image'/>
            ))
          }
          </div>
          </div>
        ))
      }
      </div>
   </motion.div> 
  )
}

export default Labs