import './App.css'
import Header from './components/Header'
import BasicInfo from './components/BasicInfo'
import Work from './components/Work'
import Skills from './components/Skills'
import Resources from './components/Resources'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BasicInfo />
        <Work />
        <Skills />
        <Resources />
      </main>
    </div>
  )
}

export default App
