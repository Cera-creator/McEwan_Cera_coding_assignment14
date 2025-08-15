import React from 'react'

interface SkillCategory {
  name: string
  skills: string[]
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: ["HTML", "CSS", "Java", "PHP", "JavaScript", "MySQL", "Ruby", "Python"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Vite", "Storybook"]
    },
    {
      name: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Docker", "npm", "XAMPP", "VirtualBox", "SQL Manager"]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-content">
          <div className="skills-description">
            <p>
              Throughout my academic journey, I have created and maintained various different types of websites, ranging from CMS, Blogs, E-Commerce Sites, and React apps. I am eager to continue learning and have enrolled myself in various online courses to further my knowledge. 
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
