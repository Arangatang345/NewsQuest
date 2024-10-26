// src/gamification/Leaderboard.js
import React from "react";

const Leaderboard = ({ users }) => {
  const sortedUsers = users.sort((a, b) => b.points - a.points);

  return (
    <div>
      <h3>Leaderboard</h3>
      <ul>
        {sortedUsers.map((user, index) => (
          <li key={index}>
            {index + 1}. {user.name} - {user.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
