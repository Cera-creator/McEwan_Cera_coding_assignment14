import React from 'react';
import PortfolioButton from './PortfolioButton';

interface Resource {
  id: number;
  title: string;
  summary: string;
  link: string;
  image?: string;
}

const Resources: React.FC = () => {
  const resources: Resource[] = [
    {
      id: 1,
      title: 'Ruby on Rails Guides',
      summary:
        'These are the new guides for Rails 8.0 based on v8.0.2.1. These guides are designed to make you immediately productive with Rails, and to help you understand how all of the pieces fit together.',
      link: 'https://guides.rubyonrails.org/index.html',
      image: 'images/ruby.jpg',
    },
    {
      id: 2,
      title: 'W3 Schools',
      summary:
        "W3Schools is a popular, free online platform that provides tutorials and references for web development and programming languages like HTML, CSS, and JavaScript. It's a widely used resource for beginners and experienced developers alike to learn and practice web development concepts.",
      link: 'https://www.w3schools.com/',
      image: 'images/w3.png',
    },
    {
      id: 3,
      title: 'GitHub',
      summary:
        "GitHub is a web-based platform that uses Git for version control and collaboration on software development projects. It's essentially a social networking site for programmers, allowing them to store, manage, and share their code, as well as collaborate with others on projects, track changes, and more. ",
      link: 'https://github.com/dashboard',
      image: 'images/github.png',
    },
  ];

  const handleResourceClick = (link: string, title: string) => {
    if (title === 'Email Contact') {
      window.location.href = link;
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="resources" className="resources">
      <div className="container">
        <h2>Resources</h2>
        <div className="resources-grid">
          {resources.map((resource) => (
            <div key={resource.id} className="resource-card">
              {resource.image && (
                <div className="resource-image">
                  <img src={resource.image} alt={resource.title} />
                </div>
              )}
              <div className="resource-content">
                <h3>{resource.title}</h3>
                <p>{resource.summary}</p>
                <PortfolioButton
                  label={
                    resource.title === 'Email Contact' ? 'Send Email' : 'Visit'
                  }
                  onClick={() =>
                    handleResourceClick(resource.link, resource.title)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
