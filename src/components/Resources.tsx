import React from 'react'

interface Resource {
  id: number
  title: string
  image: string
  summary: string
  link: string
}

const Resources: React.FC = () => {
  const resources: Resource[] = [
    {
      id: 1,
      title: "GitHub Profile",
      image: "/github-icon.png",
      summary: "View my open-source contributions, projects, and coding journey on GitHub.",
      link: "https://github.com/yourusername"
    },
    {
      id: 2,
      title: "LinkedIn Profile",
      image: "/linkedin-icon.png",
      summary: "Connect with me professionally and view my work experience and achievements.",
      link: "https://linkedin.com/in/yourusername"
    },
    {
      id: 3,
      title: "Resume",
      image: "/resume-icon.png",
      summary: "Download my current resume to learn more about my qualifications and experience.",
      link: "/resume.pdf"
    },
    {
      id: 4,
      title: "Email Contact",
      image: "/email-icon.png",
      summary: "Get in touch with me directly for collaboration opportunities or questions.",
      link: "mailto:your.email@example.com"
    }
  ]

  return (
    <section className="resources">
      <div className="container">
        <h2>Resources & Contact</h2>
        <div className="resources-grid">
          {resources.map((resource) => (
            <div key={resource.id} className="resource-card">
              <div className="resource-icon">
                <img src={resource.image} alt={resource.title} />
              </div>
              <div className="resource-content">
                <h3>{resource.title}</h3>
                <p>{resource.summary}</p>
                <a 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  {resource.title === "Email Contact" ? "Send Email" : "Visit"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resources
