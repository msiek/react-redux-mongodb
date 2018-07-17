// ./react-redux-client/src/components/TodoForm.js
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const TodoForm = (props) => {
  return (
    <form className="form form-horizontal" id="addTodoForm" onSubmit={props.addTodo}>
    <div className="row">
    <h3 className="centerAlign">Add Your Todo</h3>
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Todo: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter todo"
              name="todoText"
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
    <FormGroup>
          <ControlLabel>First Name: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter your First Name"
              name="firstName"
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Last Name: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter your Last Name"
              name="lastName"
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Address: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter your Address"
              name="address"
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Enter description"
                  name="todoDesc"
                   />
            </FormGroup>
            </div>
          </div>
          <FormGroup>
              <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
          </FormGroup>
    </form>
  );
}

export default TodoForm;
