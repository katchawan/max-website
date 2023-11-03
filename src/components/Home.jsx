import React from 'react';
import '../css/Home.css';
import projects from '../data/projects';


const Home = () => {

  return (
    <div className='home--container'>
      <div className='all--projects--container'>
        {projects.map((project) => (
        <div key={project.id} className='project--container'>
          <video controls className='video--cover' poster={project.poster}>
            <source src={project.source} type="video/mp4" />
          </video>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Home