import React from "react";

const TeamMember = props => {
  const { member } = props;

  return(
    <div className="card">
      <h2>{member.name}</h2>
      <h4>{member.role}</h4>
      <p>Technologies: </p>
      {member.technologies.map((item) => {
        return <span>{item} </span>
      })}
    </div>
  );

}

export default TeamMember;