import React from 'react'
import PortfolioCard from './PortfolioCard'
import PortfolioButton from './PortfolioButton'

interface Project {
  id: number
  title: string
  description: string
  images: string[]
  link: string
  techList: string[]
}

const Work: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Game Review CMS",
      description: "This CMS was proposed as an additional platform for a Twitch streamer and their community. It allowed the streamer to gain insight on what games the viewers wanted to see, and allow viewers to leave comments on games.",
      images: ["/assy14/cms1.png", "/assy14/cms2.png"],
      link: "https://github.com/Cera-creator/FinalProject",
      techList: ["PHP", "CSS", "JavaScript", "Hosted locally using XAMPP"]
    },
    {
      id: 2,
      title: "D&D Data Collection ",
      description: "This project is a collection of data from different sources within the Dungeons and Dragons API. The different sources (class, race, backgrounds, feats) are combined together to create a character.",
      images: ["/assy14/d&d1.png", "/assy14/d&d2.png", "/assy14/d&d3.png"],
      link: "https://github.com/Cera-creator/IntroProject",
      techList: ["HTML", "Ruby", "JavaScript", "CSS", "Hosted via Rails Server"]
    }
  ]

  const handleProjectClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="work-projects" className="work">
      <div className="container">
        <h2>My Work</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-wrapper">
              <div className="project-image">
                <img src={project.images[0]} alt={project.title} />
              </div>
              <PortfolioCard
                title={project.title}
                content={
                  <div>
                    <p>{project.description}</p>
                    <div className="tech-list">
                      <h4>Technologies Used:</h4>
                      <ul>
                        {project.techList.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                }
                footer={
                  <PortfolioButton
                    label="View Project"
                    onClick={() => handleProjectClick(project.link)}
                    backgroundColor="#2563eb"
                  />
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
