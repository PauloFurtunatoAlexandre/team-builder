import React, { useState } from 'react';
import TeamMemberList from "./TeamMemberList/TeamMemberList.component";
import './App.css';
import data from "./data";

function App() {
  const [teamMembers, setTeamMembers] = useState(data);

  return (
    <div className="App">
      <h1>Team Members</h1>
      <TeamMemberList 
        members={teamMembers} 
      />
    </div>
  );
}

export default App;
