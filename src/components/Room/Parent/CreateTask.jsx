import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
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
    // this.state = {
    //   taskName: "",
    //   deadLine: "",
    //   points: 0,
    // }
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
          <FormGroup>
            <Label for="tasktype">Type</Label>
            <ButtonGroup className="col-3" size="sm">
              <Button>Normal</Button>
              <Button>Forced</Button>
            </ButtonGroup>
          </FormGroup>
          <FormGroup className="TaskForm">
            <Label for="taskname">Task Name</Label>
            <Input />
          </FormGroup>
          <FormGroup>
            <Label for="taskdeadline">Dead Line</Label>
            <Input />
          </FormGroup>
          <FormGroup className="TaskForm">
            <Label for="taskpoints">Points</Label>
            <Input />
          </FormGroup>
          <FormGroup className="TaskForm">
            <Label for="tasktarget">Target</Label>
            <Input />
          </FormGroup>
          <div className="CreateButton">
            <Button>Create</Button>
          </div>
        </Form>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   // taskForm: state.taskForm
// });

// export default connect(mapStateToProps)(CreateTask);
