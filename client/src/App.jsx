import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [sections, setSections] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/sections')
      .then(response => response.json())
      .then(data => setSections(current => [...current, data]))
  }, [])

  return (
    <div className="App">
      {sections.map((section, index) => (
        <div key={index}>
          {section.title}
        </div>
      ))}
    </div>
  )
}

export default App
