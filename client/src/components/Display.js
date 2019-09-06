import React, { Component } from 'react';
import axios from 'axios';

class Display extends Component {
  constructor() {
    super();
    this.state = {
      data:[]
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(res => this.setState({data:res.data}))
  }

  render() {
    if (!this.state.data) {
      return (
        <h2>Loading...</h2>
      );
    }
    return(
      <div>
        {this.state.data.map(player => 
          <div>
            <p>Rank {player.id + 1}</p>
            <p>Name: {player.name}</p>
            <p>Country: {player.country}</p>
            <p>Searches: {player.searches}</p>
            <button onClick={() => this.props.handleSave(player)}>Save Player</button>
          </div>
        )}
      </div>
    );
  }
}

export default Display;