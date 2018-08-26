import React, { Component } from 'react';
import ReactDOM from "react-dom";

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
  
  render() {
      let { command } = this.props;
      return (
        <div>
          <table>
            <tbody>
              <tr>
                <th>command</th>
                <th>clearance</th>
                <th>reply</th>
              </tr>
              {data.map((command) => {
                return <CommandListItem command={command} />
              })}
            </tbody>  
          </table>
        </div>
      )
  }
};

function CommandListItem({command}) {
  console.log(command);
  
  return (
    <tr>
        <td>{command.command}</td>
        <td>{command.clearance} </td>
        <td>{command.reply}</td>
    </tr>
  )
}

export default CommandList
