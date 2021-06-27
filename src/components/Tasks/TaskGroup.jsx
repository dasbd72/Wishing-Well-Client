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
        listItems.push(
          <div className="col-md-6 col-12 p-1" key={i}>
            <TaskItem {...this.props.tasks[i]} />
          </div>
        );
      }
      return (
        <div type="unstyled" className="TaskGroup container">
          <div
            className="pt-2 label p-2 mt-3 mb-3"
            style={{
              color: "white",
              border: "solid white 0.5rem",
              borderRadius: "1rem",
            }}
          >
            {this.props.label} :
          </div>
          <div className="row">{listItems}</div>
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
