import React, { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import PortfolioButton from './PortfolioButton';

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  link: string;
  techList: string[];
}

const Work: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Game Review CMS',
      description:
        'This CMS was proposed as an additional platform for a Twitch streamer and their community. It allowed the streamer to gain insight on what games the viewers wanted to see, and allow viewers to leave comments on games.',
      images: ['/images/cms1.png', '/images/cms2.png'],
      link: 'https://github.com/Cera-creator/FinalProject',
      techList: ['PHP', 'CSS', 'JavaScript', 'Hosted locally using XAMPP'],
    },
    {
      id: 2,
      title: 'D&D Data Collection ',
      description:
        'This project is a collection of data from different sources within the Dungeons and Dragons API. The different sources (class, race, backgrounds, feats) are combined together to create a character.',
      images: ['/images/d&d1.png', '/images/d&d2.png', '/images/d&d3.png'],
      link: 'https://github.com/Cera-creator/IntroProject',
      techList: [
        'HTML',
        'Ruby',
        'JavaScript',
        'CSS',
        'Hosted via Rails Server',
      ],
    },
  ];

  const handleProjectClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleImageClick = (project: Project, imageIndex: number) => {
    setSelectedImage(project.images[imageIndex]);
    setCurrentProject(project);
    setCurrentImageIndex(imageIndex);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentProject) {
      const nextIndex = (currentImageIndex + 1) % currentProject.images.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(currentProject.images[nextIndex]);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentProject) {
      const prevIndex =
        currentImageIndex === 0
          ? currentProject.images.length - 1
          : currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(currentProject.images[prevIndex]);
    }
  };

  return (
    <section id="work-projects" className="work">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-wrapper">
              <div
                className="project-image"
                onClick={() => handleImageClick(project, 0)}
              >
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
                  />
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            {currentProject && currentProject.images.length > 1 && (
              <>
                <button className="modal-nav modal-prev" onClick={prevImage}>
                  ‹
                </button>
                <button className="modal-nav modal-next" onClick={nextImage}>
                  ›
                </button>
              </>
            )}
            <img
              src={selectedImage}
              alt="Project preview"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
