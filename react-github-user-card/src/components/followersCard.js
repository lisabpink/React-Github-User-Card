import React from "react";

const FollowersCard = ({ followers, img, location }) => {
  return (
    <div class="container">
    <div class="row">
      <div class="col-sm">
    <div className="card">
      <h5 class="card-header">Follower</h5>
      <img src={img} alt="user" />
      <p className="name">Name: {followers}</p>
      <p className="name">Location {location}</p>
    </div>
    </div>
      </div>
    </div>
  );
};

export default FollowersCard;
