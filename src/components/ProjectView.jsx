import React from 'react';
import projects from '../data/projects';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/ProjectView.css'
import { motion } from 'framer-motion';

const ProjectView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <div>Video not found</div>;
  }


  return (
    <motion.div
    initial={{opacity: 0, transition: { duration: 0.5 }}}
    animate={{opacity: 1, transition: { duration: 0.5, delay: 0.5 }}}
    exit={{opacity: 0, transition: { duration: 0.5 }}}
    className='project--container'
    >
      <button 
      className='back--btn' onClick={() => navigate("/")}
      >&#8592; Back to Projects</button>
      <div className="project-view">
        <video controls className="project-view-video" poster={projects.poster}>
          <source src={project.source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1>{project.title}</h1>
        <h2>{project.company}</h2>
        <p>{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectView;