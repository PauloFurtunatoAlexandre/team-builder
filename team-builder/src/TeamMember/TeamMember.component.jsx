import React from "react";

const TeamMember = props => {
  const { member } = props;

  return(
    <div className="card">
      <h2>{member.name}</h2>
      <h4>{member.email}</h4>
      <p>{member.role}</p>
    </div>
  );

}

export default TeamMember;