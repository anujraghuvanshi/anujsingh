import React from 'react'
import './Project.css'

const Project = ({ project, type }) => {

  const renderProjectIcon = () => {

    if (project.type === 'mobile') {
      return <img className='mobile-platform' src={require('../../images/smartphone.png')} alt="Tech" />
    }

    if (project.type === 'web') {
      return <img className='web-platform' src={require('../../images/www.png')} alt="Tech" />
    }
    return <img className='full-stack-platform' src={require('../../images/stack.svg')} alt="Tech" />
  }

  return (
    <a
      className="project-link"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-card-wrapper">
        <div className="project-card">
          <div className="project-name">
            {renderProjectIcon()}
            <h2 className="project-title">{project.name}</h2>
          </div>
          <p className="project-description">{project.description}</p>
          {/* <div>
            <div>
              <p>Will add arrow icon here</p>
            </div>
          </div> */}
          <div className="project-info">
            <div className="project-info-left">
              {project.languages.map((language) => (
                <div
                  key={`${project.name}-${language.name}`}
                  className="language"
                >
                  <div
                    className="language-colour"
                    style={{ backgroundColor: `${language.color}` }}
                  ></div>
                  <p className="language-name">{language.name}</p>
                </div>
              ))}
            </div>
            {
              project.link &&
              <div className="project-info-right">
                <a href={project.link} target="_">
                  <img src={require('../../images/next.png')} alt="next" />
                </a>
              </div>
            }
          </div>
        </div>
      </div>
    </a>
  )
}

export default Project
