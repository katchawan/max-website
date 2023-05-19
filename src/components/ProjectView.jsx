import React from 'react';
import projects from '../data/projects';
import { useParams } from 'react-router-dom';
import '../css/ProjectView.css'
import { motion } from 'framer-motion';

const ProjectView = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <div>project not found</div>;
  }


  return (
    <motion.div
    initial={{opacity: 0, transition: { duration: 0.5 }}}
    animate={{opacity: 1, transition: { duration: 0.5, delay: 0.5 }}}
    exit={{opacity: 0, transition: { duration: 0.5 }}}
    className='project--view--container'
    >
      <video controls className='project--view--video' poster={project.poster}>
        <source src={project.source} type='video/mp4'/>
        Your browser does not support this video type.
      </video>
    </motion.div>
  );
};

export default ProjectView;