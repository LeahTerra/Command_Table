Command Table:

Created by Leah Sheptycki with assistance from Pascal Schilp at https://github.com/thepassle

This is a simple command table originally designed to be a web representation of bot commands
with the power to edit, add, and delete using React.

In this program, there are 3 main JS files:
  Add.js: Our main handler, with the core component "CommandList". Here we keep the main list
          of commands, as well as methods to configure said commands.
  
  Table.js: Here is our table component which draws it out using the state of Add.js passed down
            as a prop to fill the table and return it to our core component.
            
  Add.js: This is where the functionality for the add button lies. When called, it triggers a
          popup where the user can add a command. In this component when the submit button is
          clicked and there are no errors we call a method from our core component to add
          the new command to the state and then close the popup.
          
