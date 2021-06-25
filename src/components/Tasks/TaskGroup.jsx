import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { List } from "reactstrap";

import TaskItem from "Components/Tasks/TaskItem";

import "./Tasks.css";

export class TaskGroup extends Component {
  static propTypes = {
    tasks: PropTypes.array,
    label: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    var listItems = this.props.tasks.map((item) => <TaskItem {...item} />);
    return (
      <div type="unstyled" className="TaskGroup container">
        <div className="pt-2 label">{this.props.label} : </div>
        <div className="row g-2">{listItems}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaskGroup);
