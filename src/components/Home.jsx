import React, { useState } from 'react';
import '../css/Home.css';
import Modal from 'react-modal'
import projects from '../data/projects';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = (props) => {

const [ isModalOpen, setIsModalOpen ] = useState(false)
const [ password, setPassword ] = useState('')
const [ selectedProject, setSelectedProject ] = useState(null)
const [ passwordError, setPasswordError ] = useState(false)

const navigate = useNavigate();

const handleProjectClick = (project) => {
  if (project.password) { 
    props.setAuthenticated(true)
    setSelectedProject(project)
    setIsModalOpen(true)
  } else {
    navigate(`projectView/${project.id}`);
  }
};

const handlePassword = () => {
  if (password === selectedProject.password) {
    navigate(`projectView/${selectedProject.id}`)
  } else {
    setPasswordError(true)
    setIsModalOpen(true)
    setPassword(password)
    return;
  }
  setIsModalOpen(false)
  setPassword('')
}

const handleInputFocus = () => {
  setPasswordError(false);
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
        >
          <img 
            className='project--cover' 
            src={project.poster}
            alt='posterimage'
            onClick={() => handleProjectClick(project)}
          /> 
          <h1 className='text--overlay'>
            {project.title}
          </h1>
        </div>
        ))}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel='Password Prompt'
          className='modal--content'
          overlayClassName='modal--overlay'
        >
          <div className='input--btn'>
            <input 
              type='password' 
              placeholder='PASSWORD'
              onChange={(e) => setPassword(e.target.value.toLowerCase())}
              onFocus={handleInputFocus}
              className={passwordError ? 'error' : ''}
            />
            <button 
              className='pass--btn' 
              onClick={handlePassword}>
              Submit
            </button>
          </div>
        </Modal>

    </div>
    </motion.div>
  );
}

export default Home