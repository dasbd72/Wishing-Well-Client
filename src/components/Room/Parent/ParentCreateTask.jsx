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
  Row,
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
      chosenType: "",
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
          {el.userId}
        </option>
      );
    });
    return (
      <div className="ParentCreateTask d-flex justify-content-center align-items-center">
        <div className="CreateTaskForm">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <ButtonGroup>
                <Button
                  type="button"
                  outline={this.state.chosenType !== "normal"}
                  onClick={() => {
                    this.setState({ chosenType: "normal" });
                  }}
                >
                  Normal
                </Button>
                <Button
                  type="button"
                  outline={this.state.chosenType !== "forced"}
                  onClick={() => {
                    this.setState({ chosenType: "forced" });
                  }}
                >
                  Forced
                </Button>
              </ButtonGroup>
            </FormGroup>
            <FormGroup row>
              <Label for="taskName" sm={3}>
                Task Name
              </Label>
              <Col sm={9}>
                <Input id="taskName" name="taskName" type="text" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="taskDescription" sm={3}>
                Description
              </Label>
              <Col sm={9}>
                <Input
                  id="taskDescription"
                  name="taskDescription"
                  type="textarea"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="deadLine" sm={3}>
                Dead Line
              </Label>
              <Col sm={9}>
                <Input id="deadLine" name="deadLine" type="datetime-local" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="targetPoints" sm={3}>
                Points
              </Label>
              <Col sm={9}>
                <Input
                  id="targetPoints"
                  name="targetPoints"
                  type="number"
                  min={0}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="userId" sm={3}>
                Target
              </Label>
              <Col sm={9}>
                <Input id="userId" name="userId" type="select">
                  {optionList}
                </Input>
              </Col>
            </FormGroup>
            <Button type="submit">Create</Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  room: state.room,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ParentCreateTask);
