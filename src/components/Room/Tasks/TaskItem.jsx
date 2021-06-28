import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, InputGroup, InputGroupAddon } from "reactstrap";
import moment from "moment";
import { Popover, PopoverBody } from "reactstrap";
import * as IconsBi from "react-icons/bi";
import { c_responseTask, c_doneTask, p_verifyTask } from "States/room-actions";

export class TaskItem extends Component {
  static propTypes = {
    taskId: PropTypes.string,
    isAccepted: PropTypes.number,
    type: PropTypes.string,
    taskName: PropTypes.string,
    deadline: PropTypes.string,
    points: PropTypes.number,
    userId: PropTypes.string,
    done: PropTypes.number,
    description: PropTypes.string,
    ts: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
    };
  }
  onMouseEnter = () => {
    this.setState({ showDescription: true });
  };
  onMouseLeave = () => {
    this.setState({ showDescription: false });
  };

  responseTask = (accept) => {
    return () =>
      this.props.c_responseTask(
        this.props.taskId,
        accept,
        this.props.room.roomId,
        this.props.session.userId
      );
  };

  p_verifyTask = (accept) => {
    return () => {
      this.props.p_verifyTask(
        this.props.taskId,
        this.props.room.roomId,
        accept,
        this.props.userId
      );
    };
  };

  render() {
    const { taskName, points, isAccepted, deadline, description, done } =
      this.props;
    return (
      <React.Fragment>
        <div
          id={`TaskItem${this.props.taskId}`}
          className="TaskItem p-2 d-flex"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <div>
            <div className="title"> {taskName} </div>
            <div className="deadline d-flex align-items-center">
              {isAccepted == 1 ? (
                <IconsBi.BiCalendarAlt />
              ) : (
                <IconsBi.BiCalendarPlus />
              )}
              <span>
                {moment.unix(deadline).format("YYYY-MM-DD").toString()}
              </span>
            </div>
            <div className=""> {points} pt </div>
          </div>
          <div className="ml-auto">
            {isAccepted == 0 && this.props.room.role === "children" && (
              <InputGroup size="sm">
                <InputGroupAddon addonType="prepend">
                  <Button
                    outline
                    color="success"
                    onClick={this.responseTask(true)}
                  >
                    O
                  </Button>
                </InputGroupAddon>
                <InputGroupAddon addonType="append">
                  <Button
                    outline
                    color="danger"
                    onClick={this.responseTask(false)}
                  >
                    X
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            )}
            {this.props.room.role === "children" &&
              isAccepted == 1 &&
              done == 0 && (
                <Button
                  color="info"
                  outline
                  onClick={() => {
                    this.props.c_doneTask(
                      this.props.taskId,
                      this.props.room.roomId,
                      this.props.session.userId
                    );
                  }}
                >
                  Done
                </Button>
              )}
            {this.props.room.role === "parent" && done == 1 && (
              <Button color="info" outline onClick={this.p_verifyTask(true)}>
                Verify
              </Button>
            )}
          </div>
        </div>
        <Popover
          placement="top"
          isOpen={this.state.showDescription}
          target={`TaskItem${this.props.taskId}`}
        >
          <PopoverBody>{description}</PopoverBody>
        </Popover>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  room: state.room,
  session: state.session,
});

const mapDispatchToProps = {
  c_responseTask,
  c_doneTask,
  p_verifyTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
