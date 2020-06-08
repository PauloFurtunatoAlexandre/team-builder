import React from "react";
import TeamMember from "../TeamMember/TeamMember.component";

const TeamMemberList = props => {
  const { members } = props;

  return(
    <div className="card-list">
      {members.map((member) => {
        return <TeamMember key={member.id} member={member} />
      })}
    </div>
  );
}

export default TeamMemberList;