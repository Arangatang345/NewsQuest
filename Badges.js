// src/gamification/Badges.js
import React, { useState } from "react";

const Badges = () => {
  const [badges, setBadges] = useState(["New Reader"]);

  const earnBadge = (badge) => {
    if (!badges.includes(badge)) {
      setBadges([...badges, badge]);
    }
  };

  return (
    <div>
      <h3>Your Badges</h3>
      <ul>
        {badges.map((badge, index) => (
          <li key={index}>{badge}</li>
        ))}
      </ul>
      <button onClick={() => earnBadge("Quiz Master")}>Earn Quiz Master Badge</button>
    </div>
  );
};

export default Badges;
