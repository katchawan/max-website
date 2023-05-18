import React from 'react';
import '../css/Home.css';
import projects from '../data/projects';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
const Home = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectid) => {
    navigate(`projectView/${projectid}`);
  };

  return (
    <motion.div 
    className='home--container'
    initial={{opacity: 0, transition: { duration: 0.5}}}
    animate={{opacity: 1, transition: { duration: 0.5, delay: 0.5}}}
    exit={{opacity: 0, transition: { duration: 0.5 }}}
    >
      <div className='all--projects--container'>
        {projects.map((project) => (
          <div key={project.id} className='project--container'>
            <img 
            className='project--cover' 
            src={project.poster} 
            alt='dentek'
            onClick={() => handleProjectClick(project.id)}
            /> 
            <h1 className='text--overlay'>{project.title}</h1>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Home