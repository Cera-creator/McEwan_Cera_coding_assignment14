import React from 'react'

const BasicInfo: React.FC = () => {
  return (
    <section id="personal-info" className="basic-info">
      <div className="container">
        <h2>About Me</h2>
        <div className="info-content">
          <div className="info-text">
            <p>
            Hello! My name is Cera McEwan and I am a brand new graduate of the full stack web development course offered by RRC Polytech. I did not have any experience or knowledge of web development before starting this course, but I have learned a lot and am excited to continue learning and growing in the world of coding.
            </p>
            <p>
            I enjoy watching my ideas come to life and seeing how they can be used to help others. In my free time, I enjoy creating bots to be used in Discord servers to promote automation and help with moderation. I have a continuous goal to create applications that are both helpful and accessible to all users.
            </p>
          </div>
          <div className="info-details">
            <h3>Education</h3>
            <p>Full Stack Web Development Diploma</p>
            <p>RRC Polytech</p>

            <h3>In Progress/Upcoming Projects</h3>
            <ul>
              <li>Activity Tracker</li>
              <li>FAQ Auto Responder Bot</li>
              <li>Desktop Widgets</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BasicInfo
