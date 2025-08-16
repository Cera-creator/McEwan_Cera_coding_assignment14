import React from 'react';
import { Text } from './Text';

const BasicInfo: React.FC = () => {
  return (
    <section id="personal-info" className="basic-info">
      <div className="container">
        <h2>About Me</h2>
        <div className="info-content">
          <div className="info-text">
            <Text content="Hello! My name is Cera McEwan and I am a brand new graduate of the full stack web development course offered by RRC Polytech. I did not have any experience or knowledge of web development before starting this course, but I have learned a lot and am excited to continue learning and growing in the world of coding." />
            <Text content="I enjoy watching my ideas come to life and seeing how they can be used to help others. In my free time, I enjoy creating bots to be used in Discord servers to promote automation and help with moderation. I have a continuous goal to create applications that are both helpful and accessible to all users." />
          </div>
          <div className="info-details">
            <h3>Education</h3>
            <Text content="Full Stack Web Development Diploma" />
            <Text content="RRC Polytech" />

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
  );
};

export default BasicInfo;
