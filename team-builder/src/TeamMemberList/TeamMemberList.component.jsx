import React from "react";
import TeamMember from "../TeamMember/TeamMember.component";

const TeamMemberList = props => {
  const { members } = props;

  console.log(Array.isArray(members), members)


  return(
    <div className="card-list">
      {members.map((member) => {
        return <TeamMember key={member.name} member={member} />
      })}
    </div>
  );
}

export default TeamMemberList;