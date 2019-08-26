import React from 'react';

const Player = ({ firstName, lastName, team, position }) => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div>{firstName} </div>
        <div>{lastName}</div>
      </div>
      <div>{team && team.full_name}</div>
      <div>{position}</div>
    </div>
  );
};

export default Player;
