// src/components/UserProfile.js
import React from "react";
import PointsSystem from "../gamification/PointsSystem";
import Badges from "../gamification/Badges";

const UserProfile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <PointsSystem />
      <Badges />
    </div>
  );
};

export default UserProfile;
