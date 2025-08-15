import React from 'react'
import PortfolioButton from './PortfolioButton'

interface Resource {
  id: number
  title: string
  summary: string
  link: string
}

const Resources: React.FC = () => {
  const resources: Resource[] = [
    {
      id: 1,
      title: "",
      summary: "",
      link: ""
    },
    {
      id: 2,
      title: "",
      summary: "",
      link: ""
    },
    {
      id: 3,
      title: "",
      summary: "",
      link: ""
    }
  ]

  const handleResourceClick = (link: string, title: string) => {
    if (title === "Email Contact") {
      window.location.href = link
    } else {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="resources" className="resources">
      <div className="container">
        <h2>Resources & Contact</h2>
        <div className="resources-grid">
          {resources.map((resource) => (
            <div key={resource.id} className="resource-card">
              <div className="resource-content">
                <h3>{resource.title}</h3>
                <p>{resource.summary}</p>
                <PortfolioButton
                  label={resource.title === "Email Contact" ? "Send Email" : "Visit"}
                  onClick={() => handleResourceClick(resource.link, resource.title)}
                  backgroundColor="#2563eb"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resources
