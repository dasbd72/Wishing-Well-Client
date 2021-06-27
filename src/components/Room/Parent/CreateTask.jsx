import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Input, Form, FormGroup, Label, Button, ButtonGroup } from "reactstrap";
import { createTask } from "Api/tasks";

import "./CreateTask.css";

export class CreateTask extends React.Component {
  static propTypes = {
    roomId: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      type: "",
      taskName: "",
      deadLine: "",
      targetPoints: 0,
      userId: "",
    };

    this.handleCreate = this.handleCreate.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="CreateTaskForm">
        <Form>
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <FormGroup className="TaskForm">
            <Label for="type">Type</Label>
            <Input
              id="type"
              name="type"
              value={this.state.type}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup className="TaskForm">
            <Label for="taskname">Task Name</Label>
            <Input
              id="taskname"
              name="taskName"
              value={this.state.taskName}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="taskdeadline">Dead Line</Label>
            <Input
              id="taskdeadline"
              name="deadLine"
              value={this.state.deadLine}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup className="TaskForm">
            <Label for="taskpoints">Points</Label>
            <Input
              id="taskpoints"
              name="targetPoints"
              value={this.state.targetPoints}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup className="TaskForm">
            <Label for="tasktarget">Target</Label>
            <Input
              id="tasktarget"
              name="userId"
              value={this.state.userId}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <div className="CreateButton">
            <Button onClick={this.handleCreate}>Create</Button>
          </div>
        </Form>
      </div>
    );
  }

  handleCreate() {
    console.log(this.state.type);
    console.log(this.state.taskName);
    console.log(this.state.deadLine);
    console.log(this.state.targetPoints);
    console.log(this.state.userId);
    createTask(roomId, type, taskName, deadLine, targetPoints, userId);
    this.setState({
      type: "",
      taskName: "",
      deadLine: "",
      targetPoints: 0,
      userId: "",
    });
    this.handleClick();
  }

  handleInputChange(event) {
    let changeName = event.target.name;
    this.setState({ [changeName]: event.target.value });
  }
}

export default connect((state) => ({
  ...state.room,
}))(CreateTask);
