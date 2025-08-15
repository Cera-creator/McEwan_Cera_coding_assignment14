import React from 'react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  link: string
  techList: string[]
}

const Work: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Component Library",
      description: "A comprehensive React component library built with TypeScript and Vite. Features reusable UI components with Storybook documentation and comprehensive testing.",
      image: "/project1-image.jpg",
      link: "https://github.com/yourusername/component-library",
      techList: ["React", "TypeScript", "Vite", "Storybook", "Styled Components"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my projects and skills. Built with React and modern CSS techniques.",
      image: "/project2-image.jpg",
      link: "https://github.com/yourusername/portfolio",
      techList: ["React", "TypeScript", "CSS3", "Vite"]
    }
  ]

  return (
    <section className="work">
      <div className="container">
        <h2>My Work</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                  <h4>Technologies Used:</h4>
                  <ul>
                    {project.techList.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
