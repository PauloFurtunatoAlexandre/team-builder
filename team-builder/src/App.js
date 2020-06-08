import React, { useState } from 'react';
import TeamMemberList from "./TeamMemberList/TeamMemberList.component";
import Form from "./Form/Form.component";
import './App.css';
import data from "./data";

function App() {
  const [teamMembers, setTeamMembers] = useState(data);
  console.log(data, Array.isArray(data))

  const addNewMember = member => {
    setTeamMembers([
      ...teamMembers,
      {
        id: Date.now(),
        name: member.name,
        email: member.email,
        role: member.role
      }
    ])
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form 
        members={teamMembers}
        addNewMember={addNewMember}
      />
      <TeamMemberList 
        members={teamMembers} 
      />
    </div>
  );
}

export default App;
