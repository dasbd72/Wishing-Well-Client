import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Input,
  Form,
  FormGroup,
  Label,
  Button,
  ButtonGroup,
  Col,
  Alert,
} from "reactstrap";
import moment from "moment";
import { createTask } from "Api/tasks";
import { listUsers } from "Api/rooms";
import shortid from "shortid";

export class ParentCreateTask extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      sending: false,
      success: false,
      failed: false,
      chosenType: "normal",
      childrenList: [],
    };
  }

  componentDidMount() {
    listUsers(this.props.room.roomId, "children").then((users) => {
      this.setState({ childrenList: users });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ sending: true });
    createTask(
      this.props.room.roomId,
      this.state.chosenType,
      taskName.value,
      moment.utc(deadLine.value).unix(),
      targetPoints.value,
      userId.value,
      taskDescription.value
    )
      .then((task) => {
        this.setState({ sending: false, success: true });
        setTimeout(() => {
          this.setState({ success: false });
        }, 2000);
      })
      .catch((err) => {
        this.setState({ sending: false, failed: true });
        setTimeout(() => {
          this.setState({ failed: false });
        }, 2000);
      });
  };

  render() {
    let optionList = this.state.childrenList.map((el) => {
      return (
        <option value={el.userId} key={shortid.generate()}>
          {el.userName}
        </option>
      );
    });
    return (
      <div className="ParentCreateTask d-flex flex-column justify-content-center align-items-center">
        <h1>Create a New Task.</h1>
        <div className="CreateTaskForm">
          <Form className="font-monospace" onSubmit={this.handleSubmit}>
            <FormGroup>
              <ButtonGroup>
                <Button
                  type="button"
                  color="secondary"
                  outline={this.state.chosenType !== "normal"}
                  onClick={() => {
                    this.setState({ chosenType: "normal" });
                  }}
                >
                  Normal
                </Button>
                <Button
                  type="button"
                  color="secondary"
                  outline={this.state.chosenType !== "forced"}
                  onClick={() => {
                    this.setState({ chosenType: "forced" });
                  }}
                >
                  Forced
                </Button>
              </ButtonGroup>
            </FormGroup>
            <FormGroup>
              <Label for="taskName" sm={3}>
                Task Name
              </Label>
              <Input id="taskName" name="taskName" type="text" />
            </FormGroup>
            <FormGroup>
              <Label for="taskDescription" sm={3}>
                Description
              </Label>
              <Input
                id="taskDescription"
                name="taskDescription"
                type="textarea"
              />
            </FormGroup>
            <FormGroup>
              <Label for="deadLine" sm={3}>
                Dead Line
              </Label>
              <Input id="deadLine" name="deadLine" type="datetime-local" />
            </FormGroup>
            <FormGroup>
              <Label for="targetPoints" sm={3}>
                Points
              </Label>
              <Input
                id="targetPoints"
                name="targetPoints"
                type="number"
                min={0}
              />
            </FormGroup>
            <FormGroup>
              <Label for="userId" sm={3}>
                Target
              </Label>
              <Input id="userId" name="userId" type="select">
                {optionList}
              </Input>
            </FormGroup>
            <Button type="submit" color="info">
              Create
            </Button>
          </Form>
        </div>
        <Alert className="loading" color="warning" hidden={!this.state.sending}>
          Sending...
        </Alert>
        <Alert className="loading" color="success" hidden={!this.state.success}>
          Success!
        </Alert>
        <Alert className="loading" color="danger" hidden={!this.state.failed}>
          Not Enough Input!
        </Alert>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  room: state.room,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ParentCreateTask);
