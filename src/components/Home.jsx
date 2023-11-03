import React, { useState } from "react";
import "../css/Home.css";
import projects from "../data/projects";

const Home = () => {
  const [passwords, setPasswords] = useState({});
  const [correctPasswords, setCorrectPasswords] = useState({});
  const [isWrongPasswords, setIsWrongPasswords] = useState({});
  const handlePasswordChange = (projectId, value) => {
    setPasswords({ ...passwords, [projectId]: value });
    setIsWrongPasswords({ ...isWrongPasswords, [projectId]: false }); 
  };

  const unlockVideo = (project) => {
    const enteredPassword = passwords[project.id];
    if (project.password === enteredPassword) {
      setCorrectPasswords({ ...correctPasswords, [project.id]: true });
    } else {
      setIsWrongPasswords({ ...isWrongPasswords, [project.id]: true }); 
    }
  };

  return (
    <div className="home--container">
      <div className="all--projects--container">
        {projects.map((project) => {
          const isCorrectPassword = correctPasswords[project.id];
          const isWrongPassword = isWrongPasswords[project.id];
          const inputClassName = isWrongPassword ? "wrong-password" : "";

          if (project.hasPassword && !isCorrectPassword) {
            return (
              <div key={project.id} className="project--container--locked">
                <img src={project.poster} alt="poster" className="cover" />
                <div className="password-input-container">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    value={passwords[project.id] || ""}
                    onChange={(e) =>
                      handlePasswordChange(project.id, e.target.value)
                    }
                    className={inputClassName}
                  />
                  <button onClick={() => unlockVideo(project)}>Submit</button>
                </div>
              </div>
            );
          } else {
            return (
              <div key={project.id} className="project--container">
                <video
                  controls
                  className="video--cover"
                  poster={project.poster}
                >
                  <source src={project.source} type="video/mp4" />
                </video>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Home;
