import React, { Component } from 'react';
import Table from './Table';

class CommandList extends Component {

  state = {
      commands: [
      {
        command:"!anna",
        clearance: "all",
        reply: "Anna is a girl from Prague"
      },
      {
          command: "!ariton",
          clearance: "all",
          reply: "Ariton is greek"
      },
      {
          command: "!believe",
          clearance: "mod",
          reply: "we believe"
      },
      {
          command: "!nobelieve",
          clearance: "mod",
          reply: "we don't believe"
      },
    ]};
  

  deleteCommand = index => {
    this.setState({
      commands: this.state.commands.filter((command, i) => {
          return i !== index;
      })
    })
  };

  render() {
    return (
      <div>
        <Table
          commands={this.state.commands}
          deleteCommand={this.deleteCommand}
        />
      </div>
    )
  }
};

export default CommandList
