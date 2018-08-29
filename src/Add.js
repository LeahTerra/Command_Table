import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    state = {
        command: "",
        clearance: "",
        reply: "",
    }
    
    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        const name = target.name;

        if(name === 'clearance' && value === 'on'){
            value = 'mod';
        }
        else if(name === 'clearance' && value != 'on') {
            value = 'all'
        }
        
        this.setState({
          [name]: value
        });
      }

    handleSubmit = () => {
        
        this.props.addCommand(this.state)
        
    }
    
    render() {
        return (
            <CreatePop 
                addCommand={this.props.addCommand}
                handleSubmit={this.handleSubmit}
                handleInputChange={this.handleInputChange}
            />
        )
    }
}

const CreatePop = props => {
    return (
        <form width='40%' height='60%'>
            <label>

                <h4>Command:</h4> <input 
                            type='text' 
                            name='command' 
                            onChange={props.handleInputChange}
                        />

                <h4>Clearance:</h4> <input 
                            type='checkbox' 
                            name='clearance' 
                            onChange={props.handleInputChange} 
                        />

                <h4>Reply:</h4> <input 
                            type='text' 
                            name='reply' 
                            onChange={props.handleInputChange}
                        />
                <button id='submit' type='button' onClick={props.handleSubmit}> Submit </button>
            </label>
        </form>
    )
}
export default Add