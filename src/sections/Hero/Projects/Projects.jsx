import React from 'react'
import styles from './ProjectsStyles.module.css'
import viberr from '../../../assets/viberr.png'
import freshburger from '../../../assets/fresh-burger.png'
import hipsster from '../../../assets/fitlift.png'
import ProjectCard from '../../../common/ProjectCard'

function Projects() {
  return (
      <section id="projects" className={styles.container}>
<h1 className='sectionTitle'>Projects</h1>
<div className={styles.projectsContainer}>
  <ProjectCard  src={viberr}
  link='https://github.com/sathvik2408/Web-development-projects/tree/main/Movie%20site'
  h3='Movie flix' p='Movie site'
  />
  <ProjectCard  src={freshburger}
  link='https://github.com/sathvik2408/Web-development-projects/tree/main/Dojo%20Blog'
  h3='Dojo Blog' p='Blog Website'
  />
  <ProjectCard  src={hipsster}
  link='https://github.com/sathvik2408/Web-development-projects/tree/main/Router%20app'
  h3='Careers Blog' p='careers site'
  />
</div>
      </section>
  )
}

export default Projects
