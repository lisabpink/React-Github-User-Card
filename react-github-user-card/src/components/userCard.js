import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserCard = ({ user, img, location }) => {
  return (
    
      <div class="row">
        <div class="col-sm">
          <div className="card">
            <div class="card-body">
              <h5 class="card-header">Main Slice</h5>

              <img src={img} alt="user" />
              <p className="name">Name: {user}</p>
              <p className="name">Location: {location}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
