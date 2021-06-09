import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Input, InputGroup } from "reactstrap";

import "./TaskItem.css";

export class TaskItem extends Component {
  static propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    points: PropTypes.number,
    accepted: PropTypes.bool,
    deadline: PropTypes.number,
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { id, text, points, accepted } = this.props;

    return (
      <div className="task-item container justify-content-center d-flex row">
        <div className="col-5"> {text} </div>
        <div className="col-3"> {points} </div>
        <div className="col-3">
          {accepted ? (
            deadline
          ) : (
            <InputGroup>
              <Input type="checkbox" />
              <Input type="checkbox" />
            </InputGroup>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
