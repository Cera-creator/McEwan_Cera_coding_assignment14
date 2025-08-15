import React from 'react'

const BasicInfo: React.FC = () => {
  return (
    <section className="basic-info">
      <div className="container">
        <h2>About Me</h2>
        <div className="info-content">
          <div className="info-text">
            <p>
              I am a passionate software development student with a strong foundation in 
              modern web technologies and programming principles. Throughout my college 
              coursework, I've developed several projects that demonstrate my skills in 
              front-end development, component design, and software architecture.
            </p>
            <p>
              I enjoy creating user-friendly applications and solving complex problems 
              through clean, maintainable code. My goal is to continue learning and 
              growing as a developer while contributing to meaningful projects.
            </p>
          </div>
          <div className="info-details">
            <h3>Education</h3>
            <p>Software Development Program</p>
            <p>Current Student</p>
            
            <h3>Interests</h3>
            <ul>
              <li>Web Development</li>
              <li>Component Libraries</li>
              <li>User Experience Design</li>
              <li>Software Architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BasicInfo
