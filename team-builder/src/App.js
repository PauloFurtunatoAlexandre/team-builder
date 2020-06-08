import React, { useState } from 'react';
import TeamMemberList from "./TeamMember/TeamMember.component";
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([
  {
    "id": 1,
    "name": "Paulo Alexandre",
    "role": "Full Stack Developer",
    "technologies": ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    "id": 1,
    "name": "Shomari Roberts",
    "role": "Full Stack Developer",
    "technologies": ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    "id": 1,
    "name": "Jason Fadelli",
    "role": "Full Stack Developer",
    "technologies": ["HTML", "CSS", "JavaScript", "React"]
  },

]);

  return (
    <div className="App">
      <h1>This is a test</h1>
    </div>
  );
}

export default App;
