import React, { useState, useEffect } from 'react';
import projects from '../data/projects';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/ProjectView.css'
import { motion } from 'framer-motion';

const ProjectView = (props) => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);
  const navigate = useNavigate();
  const smallImages = project.imgs;
  const { isNavbarClick, setIsNavbarClick } = props


  if (!project) {
    return <div>Project not found</div>;
  }

  const handleNextProject = () => {
    const currentIndex = projects.findIndex((project) => project.id === id)
    const nextIndex = currentIndex + 1;

    if (nextIndex >= 0 && nextIndex < projects.length) {
      const nextProjectId = projects[nextIndex].id
      navigate(`/projectView/${nextProjectId}`)
    } else if (nextIndex === projects.length) {
      const firstProjectId = projects[0].id;
      navigate(`/projectView/${firstProjectId}`);
    }
  }

  const slideVariants = {
    initial: {
      x: '100%',
      transition: { duration: 0.5 },
    },
    animate: {
      x: '0%',
      transition: { duration: 0.5, delay: 0.5},
    },
    exit: {
      x: '-100%',
      transition: { duration: 0.5 },
    },
  };

  if (!project.password || props.authenticated) {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideVariants}
        className='project--view--container'
      >
        <div className='project--view--text--container'>
          <div className='title'>{project.title}</div>
          <div className='description'>{project.description}</div>
          <div className='tools'>Tools - {project.tools}</div>
        </div>
        <video controls className='project--view--video' poster={project.poster}>
          <source src={project.source} type='video/mp4' />
          Your browser does not support this video type.
        </video>
        <div className='project--gallery'>
          {smallImages.map((img, idx) => {
            if (img.length === 0) {
              return null;
            }
            return (
              <React.Fragment key={idx}>
                <img
                  src={img}
                  alt='projectphoto'
                  className={`project--photo ${idx === 6 ? 'big--image' : ''}`}
                />
                { idx === 3 && project.more.length > 0 ? 
                <div className='more'>{project.more}</div> 
                : null }
              </React.Fragment>
            );
          })}
        </div>
        <div className='next-project-arrow' onClick={handleNextProject}>
          <span className='arrow'>&rarr;</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideVariants}
        className='project--view--container'
      >
      <h1>
        This project is locked. Send an email for access
        <a 
          onClick={() => (window.location = 'mailto:maxdawsonvfx@gmail.com')} 
          className='mail--icon--project' 
          href='email'>
          &#9993;
        </a>
      </h1>
      <div onClick={handleNextProject}>
          <span className='locked--arrow'>&rarr;</span>
      </div>
      <button className='locked--button' onClick={() => navigate('/')}>
        Back to Projects
      </button>
      </motion.div>
  );
};

export default ProjectView;