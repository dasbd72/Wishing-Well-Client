import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { List } from "reactstrap";

import TaskItem from "Components/Tasks/TaskItem.jsx";

import "./Tasks.css";

export class TaskGroup extends Component {
  static propTypes = {
    tasks: PropTypes.array,
    label: PropTypes.string,
  };

  render() {
    var listItems = this.props.tasks.map((item) => (
      <li>
        <TaskItem {...item} />
      </li>
    ));
    return (
      <List type="unstyled" className="TaskGroup">
        <div className="ps-3 pt-2 fs-4">{this.props.label} : </div>
        {listItems}
      </List>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaskGroup);
