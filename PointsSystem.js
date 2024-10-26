// src/gamification/PointsSystem.js
import React, { useState } from "react";

const PointsSystem = () => {
  const [points, setPoints] = useState(0);

  const addPoints = (pointsToAdd) => {
    setPoints(points + pointsToAdd);
  };

  return (
    <div>
      <h2>Your Points: {points}</h2>
      <button onClick={() => addPoints(10)}>Read Article (10 pts)</button>
      <button onClick={() => addPoints(20)}>Complete Quiz (20 pts)</button>
    </div>
  );
};

export default PointsSystem;
