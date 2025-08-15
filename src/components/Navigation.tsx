import React, { useState } from 'react'

interface NavigationProps {
  onSectionChange: (sectionId: string) => void
}

const Navigation: React.FC<NavigationProps> = ({ onSectionChange }) => {
  const [activeSection, setActiveSection] = useState('personal-info')

  const navItems = [
    { id: 'personal-info', label: 'Personal Info' },
    { id: 'work-projects', label: 'Work & Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'resources', label: 'Resources' }
  ]

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    onSectionChange(sectionId)
  }

  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-content">
          <div className="nav-brand">
            <h2>Cera McEwan</h2>
          </div>
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <span className="nav-label">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
