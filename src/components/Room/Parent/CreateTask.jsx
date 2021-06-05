import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Form,
  FormGroup,
  Label,
  Button,
  ButtonGroup,
} from "reactstrap";

import "./CreateTask.css";

export default class CreateTask extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="CreateTask">
        <Form>
          <Label for="createtaskform">Create Task</Label>
          <FormGroup>
            <Label for="tasktype">Type</Label>
              <ButtonGroup>
                <Button>Normal</Button>
                <Button>Forced</Button>
              </ButtonGroup>
          </FormGroup>
          <FormGroup>
            <Label for="taskname">Task Name</Label>
            <Input/>
          </FormGroup>
          <FormGroup>
            <Label for="taskdeadline">Dead Line</Label>
            <Input/>
          </FormGroup>
          <FormGroup>
            <Label for="taskpoints">Points</Label>
            <Input/>
          </FormGroup>
          <FormGroup>
            <Label for="tasktarget">Target</Label>
            <Input/>
          </FormGroup>
          <Button>Create</Button>
        </Form>
      </div>
    );
  }
}