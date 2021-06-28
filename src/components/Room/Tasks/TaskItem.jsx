import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, InputGroup, InputGroupAddon } from "reactstrap";
import moment from "moment";
import { Popover, PopoverBody } from "reactstrap";
import * as IconsBi from "react-icons/bi";
import { responseTask } from "States/room-actions";

export class TaskItem extends Component {
  static propTypes = {
    taskId: PropTypes.number,
    isAccepted: PropTypes.number,
    type: PropTypes.string,
    taskName: PropTypes.string,
    deadline: PropTypes.string,
    points: PropTypes.number,
    targetUser: PropTypes.string,
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
    return this.props.responseTask(
      this.props.taskId,
      accept,
      this.props.room.roomId,
      this.props.session.userId
    );
  };

  render() {
    // return null;
    const { taskName, points, isAccepted, deadline, description } = this.props;
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
              {isAccepted == 2 ? (
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
            {isAccepted == 0 && (
              <InputGroup size="sm">
                <InputGroupAddon addonType="prepend">
                  <Button outline color="success">
                    O
                  </Button>
                </InputGroupAddon>
                <InputGroupAddon addonType="append">
                  <Button outline color="danger">
                    X
                  </Button>
                </InputGroupAddon>
              </InputGroup>
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
  responseTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
