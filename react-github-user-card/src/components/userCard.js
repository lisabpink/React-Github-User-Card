import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserCard = ({ user, img, location }) => {
  return (
    <div className="card">
      <h5 class="card-header">Main Slice</h5>
      <img src={img} alt="user" />
      <p className="name">Name: {user}</p>
      <p className="name">Location: {location}</p>
    </div>
  );
};

export default UserCard;
