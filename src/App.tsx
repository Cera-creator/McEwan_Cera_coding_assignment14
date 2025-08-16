import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import BasicInfo from './components/BasicInfo';
import Work from './components/Work';
import Skills from './components/Skills';
import Resources from './components/Resources';

// comment for testing

function App() {
  const [currentSection, setCurrentSection] = useState('personal-info');

  const handleSectionChange = (sectionId: string) => {
    setCurrentSection(sectionId);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'personal-info':
        return <BasicInfo />;
      case 'work-projects':
        return <Work />;
      case 'skills':
        return <Skills />;
      case 'resources':
        return <Resources />;
      default:
        return <BasicInfo />;
    }
  };

  return (
    <div className="App">
      <Header />
      <Navigation onSectionChange={handleSectionChange} />
      <main>{renderSection()}</main>
    </div>
  );
}

export default App;
