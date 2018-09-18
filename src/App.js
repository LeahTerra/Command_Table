import React, { Component } from 'react';
import Table from './Table';
import AddCommandForm from './Add';

class CommandList extends Component {
  
  constructor() {
    super();
    this.addCommand = this.addCommand.bind(this)
  }

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
      newCommandTrigger: false
  };
  
  addCommand(newCommand){
    console.log(newCommand)
    this.state.commands.push(newCommand);
    this.setState({
      newCommandTrigger: false
    })

  }

  deleteCommand = index => {
    this.setState({
      commands: this.state.commands.filter((command, i) => {
          return i !== index;
      })
    })
  };

  changeCommandTrigger() {
    this.state.bool 
      ? this.setState({newCommandTrigger: false})
      : this.setState({newCommandTrigger: true});
  }

  render() {
    return (
      <div>
        <Table
          commands={this.state.commands}
          deleteCommand={this.deleteCommand}
        />
        <button onClick={() => this.changeCommandTrigger()}> Add Command </button>
        {this.state.newCommandTrigger === true ? <AddCommandForm OriginalList={this.state.commands} addCommand={this.addCommand}/> : ''}
      </div>
    )
  }
};


export default CommandList
