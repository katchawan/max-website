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
    >
    </motion.div>
  );
};

export default ProjectView;