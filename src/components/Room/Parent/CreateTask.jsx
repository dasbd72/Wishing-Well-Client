import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  Input,
  Form,
  FormGroup,
  Label,
  Button,
  ButtonGroup,
} from "reactstrap";

import "./CreateTask.css";

export class CreateTask extends React.Component {
  static propTypes = {
    roomId: PropTypes.string,
    type: PropTypes.string,
    taskName: PropTypes.string,
    deadLine: PropTypes.string,
    targetPoints: PropTypes.number,
    userId: PropTypes.string,
    dispatch: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleCreate = this.handleCreate.bind(this);    
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
            <Label for="taskname">Type</Label>
            <Input value={this.props.type}/>
          </FormGroup>
          <FormGroup className="TaskForm">
            <Label for="taskname">Task Name</Label>
            <Input value={this.props.taskName}/>
          </FormGroup>
          <FormGroup>
            <Label for="taskdeadline">Dead Line</Label>
            <Input value={this.props.deadLine}/>
          </FormGroup>
          <FormGroup className="TaskForm">
            <Label for="taskpoints">Points</Label>
            <Input value={this.props.targetPoints}/>
          </FormGroup>
          <FormGroup className="TaskForm">
            <Label for="tasktarget">Target</Label>
            <Input value={this.props.userId}/>
          </FormGroup>
          <div className="CreateButton">
            <Button onClick={this.handleCreate}>Create</Button>
          </div>
        </Form>
      </div>
    );
  }

  handleCreate() {
  //   this.props.dispatch(createTask(
  //     this.props.roomId,
  //     this.props.type,
  //     this.props.taskName,
  //     this.props.deadLine,
  //     this.props.targetPoints,
  //     this.props.userId));
  this.handleClick();

  }
}

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = {
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateTask));
