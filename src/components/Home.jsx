import React, { useRef } from 'react';
import '../css/Home.css';
import projects from '../data/projects';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
const Home = () => {
const videoRefs = useRef({})
const navigate = useNavigate();

  const handleMouseOver = (projectid) => {
    console.log('hovered', projectid)
    const video = videoRefs.current[projectid]
    if (video) {
      video.play()
      
    }
  }

  const handleMouseLeave = (projectid) => {
    const video = videoRefs.current[projectid]
    if (video) {
      video.pause()
    }
  }

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
          <div 
          key={project.id} 
          className='project--container'
          onMouseEnter={() => handleMouseOver(project.id)}
          onMouseLeave={() => handleMouseLeave(project.id)}
          >
            <video 
            className='project--cover' 
            src={project.source} 
            type='video/mp4'
            loop
            muted
            ref={(videoRef) => (videoRefs.current[project.id] = videoRef)}
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