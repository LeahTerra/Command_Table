import React, { Component } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';


var data = [
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
  }
];

class CommandList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items:[]};

    let { commands } = this.props;
    for(var i = 0; i < data.length; i++){
      this.state.items.push(<CommandListItem commands={data[i]} />);
    }
  };
  render() {
      return (
        <div>
          <table>
            <tbody>
              <tr>
                <th>command</th>
                <th>clearance</th>
                <th>reply</th>
              </tr>
              {this.state.items}
            </tbody>  
          </table>
        </div>
      )
  }
};

function CommandListItem(commands) {
  return (
    <tr>
        <td>{commands.commands.command}</td>
        <td>{commands.commands.clearance}</td>
        <td>{commands.commands.reply}</td>
        {console.log(commands.commands)}
    </tr>
  )
}

export default CommandList
