import React from "react";
import axios from "axios";
import FollowersCard from "./FollowersCard";

class Followers extends React.Component {
  state = {
    followers: []
  };

  componentDidMount = () => {
    axios
      .get(`https://api.github.com/users/lisabpink/followers`)
      .then(res => {
        console.log("follower data", res.data);
        this.setState({
          followers: res.data
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    console.log(this.state.followers);
    return (
      <div>
        {this.state.followers.map(follower => (
          <FollowersCard
            key={follower.id}
            img={follower.avatar_url}
            followers={follower.login}
            location={follower.html_url}
          />
        ))}
      </div>
    );
  }
}
export default Followers;
