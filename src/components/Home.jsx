import React, { useState } from 'react';
import '../css/Home.css';
import projects from '../data/projects';
import { motion } from 'framer-motion';

const Home = () => {

  return (
    <motion.div 
      className='home--container'
      initial={{opacity: 0, transition: { duration: 0.5}}}
      animate={{opacity: 1, transition: { duration: 0.5, delay: 0.5}}}
      exit={{opacity: 0, transition: { duration: 0.5 }}}
    >
    <div className='all--projects--container'>
      {projects.map((project) => (
        <div 
          key={project.id} 
          className='project--container'
        >
          <video controls className='video--cover' poster={project.poster}>
            <source src={project.source} type="video/mp4" />
          </video>

        </div>
        ))}
    </div>
    </motion.div>
  );
}

export default Home