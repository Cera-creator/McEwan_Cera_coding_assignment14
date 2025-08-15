import React from 'react'

interface SkillCategory {
  name: string
  skills: string[]
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express", "Vite", "Storybook"]
    },
    {
      name: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Docker", "npm"]
    },
    {
      name: "Development Practices",
      skills: ["Responsive Design", "Component-Based Architecture", "Testing", "Version Control", "Agile Development"]
    }
  ]

  return (
    <section className="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-content">
          <div className="skills-description">
            <p>
              Throughout my academic journey, I've developed a diverse set of technical 
              skills and competencies. I focus on writing clean, maintainable code and 
              following industry best practices. My experience spans both front-end and 
              back-end development, with a particular emphasis on modern web technologies.
            </p>
          </div>
          <div className="skills-grid">
            {skillCategories.map((category) => (
              <div key={category.name} className="skill-category">
                <h3>{category.name}</h3>
                <ul>
                  {category.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
