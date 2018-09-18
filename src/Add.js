import React, { Component } from 'react';

class AddCommandForm extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    state = {
        command: "",
        clearance: "",
        reply: "",
    }
    
    errorChecker = false;

    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        const name = target.name;

        if(name === 'clearance'){
            value = 'on' ? value = 'mod' : value = 'all';
        }
        
        this.setState({
            [name]: value
        });
      }

    checkError = () => {
        const duplicate = this.props.OriginalList.find(commands => commands.command === this.state.command)
        
        if(this.state.command[0] !== '!') {
            this.errorChecker = true
            console.log('No ! at start')
        
        } else if(duplicate !== undefined) {
            this.errorChecker = true
            console.log('Theres a duplicate')

        } else if(this.state.reply === '') {
            this.errorChecker = true
            console.log('Reply cant be false')

        } else {
            this.errorChecker = false
        }
    }

    handleSubmit() {
        this.checkError();
        this.errorChecker === false ? this.props.addCommand(this.state) : '';
    }
    
    render() {
        return (
            <form width='40%' height='60%'>
            <label>
                <h4>Command:</h4> <input 
                            type='text' 
                            name='command'
                            onChange={this.handleInputChange}
                        />

                <h4>Clearance:</h4> <input 
                            type='checkbox' 
                            name='clearance' 
                            onChange={this.handleInputChange} 
                        />

                <h4>Reply:</h4> <input 
                            type='text' 
                            name='reply' 
                            onChange={this.handleInputChange}
                        />
                <button id='submit' type='button' onClick={this.handleSubmit.bind(this)}> Submit </button>
            </label>
        </form>
        )
    }
}

export default AddCommandForm