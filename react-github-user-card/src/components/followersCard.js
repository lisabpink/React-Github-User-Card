import React from "react";

const FollowersCard = ({followers, img, bio}) => {
    return (
        <div className="card">

            <img src={img} alt="user"/>
            <p className="name">{followers}</p>
            <p className="name2">{bio}</p>

        </div>
    )
}

export default FollowersCard;