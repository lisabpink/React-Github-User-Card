import React from "react";

const FollowersCard = ({ followers, img, location }) => {
  return (
    
    <div className="card"> 
        <h5 class="card-header">Follower</h5>
        <img src={img} alt="user" />
        <p className="name">Name: {followers}</p>
        <p className="name">{location}</p>
    </div>
   
    
   
  );
};

export default FollowersCard;
