import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { VscFoldDown, VscFoldUp } from "react-icons/vsc";

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
    if (this.props.tasks) {
      var listItems = [];
      var len =
        this.props.tasks.length < 6 || this.state.isOpen
          ? this.props.tasks.length
          : 6;
      for (let i = 0; i < len; i++) {
        listItems.push(<TaskItem {...this.props.tasks[i]} key={i} />);
      }
      return (
        <div type="unstyled" className="TaskGroup container">
          <div className="pt-2 label">{this.props.label} : </div>
          <div className="row g-2 list">{listItems}</div>
          <div className="fold" onClick={this.toggle}>
            {this.state.isOpen ? (
              <div>
                <VscFoldUp /> Show less.
              </div>
            ) : (
              len < this.props.tasks.length && (
                <div>
                  <VscFoldDown /> Show more.
                </div>
              )
            )}
          </div>
        </div>
      );
    }
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaskGroup);
