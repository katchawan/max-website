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
      <div className='project--gallery'>
        <img src={project.imgs.img1} alt='projectimage' className='smaller--image'/>
        <img src={project.imgs.img2} alt='projectimage' className='smaller--image'/>
        <img src={project.imgs.img3} alt='projectimage' className='smaller--image'/>
        <img src={project.imgs.img4} alt='projectimage' className='smaller--image'/>
        <img src={project.imgs.img5} alt='projectimage' className='smaller--image'/>
        <img src={project.imgs.img6} alt='projectimage' className='smaller--image'/>
        <div className='bigger--gallery--photos'>
        <img src={project.imgs.img7} alt='projectimage' className='bigger--image'/>
        <img src={project.imgs.img8} alt='projectimage' className='bigger--image'/>
        </div>
        <img src={project.imgs.img9} alt='projectimage' className='huge--image'/>
      </div>
    </motion.div>
  );
};

export default ProjectView;