import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends2 from "./friends2.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends2
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Maryland Legislators on House Bill 1300</Title>
        {this.state.friends2.map(friend2 => (
          <FriendCard
            name={friend2.LastName}
            image={friend2.Portrait}
            district={friend2.District}
            vote2020={friend2.Vote2020}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
