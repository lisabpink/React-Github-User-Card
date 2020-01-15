import React from "react";
import axios from "axios";
import UserCard from "./UserCard";

class User extends React.Component {
  state = {
    name: []
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/lisabpink`)
      .then(res => {
        this.setState({
          name: res.data.name,
          img: res.data.avatar_url,
          location: res.data.location
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <UserCard
          user={this.state.name}
          img={this.state.img}
          location={this.state.location}
        />
      </div>
    );
  }
}

export default User;
