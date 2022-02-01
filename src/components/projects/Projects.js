import React, { useState, useEffect } from 'react'
import './Projects.css'
import { Fade } from 'react-reveal'
import ApolloClient, { gql } from 'apollo-boost'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { featured_projects } from '../../data/featured_projects.json'
import Project from '../project/Project'
import Section from '../section/Section'
import FeaturedProject from '../featuredProject/FeaturedProject'

const Projects = () => {

  return (
    <Section title="Projects">
        <div className="projects-content">
          <ul className="projects-list">
            {featured_projects.map((project) => {
              return (
                <li key={project.name}>
                  <Fade bottom duration={1000} distance="20px">
                    <Project project={project}/>
                  </Fade>
                </li>
              )
            })}
          </ul>
        </div>
      </Section>
  )
}

export default Projects
