import React, { Component } from 'react';
import Table from './Table';
import Add from './Add';

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
    ],
      bool: false
  };
  
  addCommand = (newCommand) => {

    this.state.commands.push(newCommand),
    this.setState({
      bool: false
    })

  }

  deleteCommand = index => {
    this.setState({
      commands: this.state.commands.filter((command, i) => {
          return i !== index;
      })
    })
  };

  changeBool() {
    this.state.bool 
      ? this.setState({bool: false})
      : this.setState({bool: true});
  }

  render() {
    console.log(this.state.commands)
    return (
      <div>
        <Table
          commands={this.state.commands}
          deleteCommand={this.deleteCommand}
        />
        <button onClick={() => this.changeBool()}> Add Command </button>
        {this.state.bool === true ? <Add command={this.state} addCommand={this.addCommand}/> : ''}
      </div>
    )
  }
};


export default CommandList
