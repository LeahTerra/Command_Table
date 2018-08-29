import React, {Component} from 'react';

const modLogo =<img src='https://pbs.twimg.com/media/CTEHRvEUcAATDsl.png' alt='mod' width='20px' height='20px'/>;

class Table extends Component {
    render() {
        const { commands, deleteCommand } = this.props;
        return (
            <div>
                <table>
                    <CommandListHeader />
                    <CommandListItems
                        commands={commands}
                        deleteCommand={deleteCommand}
                        />
                </table>
            </div>
        );
    }
}

const CommandListHeader = () => {
    return (
        <thead>
            <tr>
                <th>command</th>
                <th>clearance</th>
                <th>reply</th>
            </tr>
        </thead>
    )
}

const CommandListItems = props => {
    console.log(props.commands)
    return <tbody>{ props.commands.map((row, index) =>{
        return (
            <tr key={index}>
                <td>{row.command}</td>
                <td>{row.clearance === 'mod' ? modLogo : ''} </td>
                <td>{row.reply}</td>
                <td><button onClick={() => props.deleteCommand(index)}>Delete</button></td>
            </tr>
        )
    }) }</tbody>;
}

export default Table