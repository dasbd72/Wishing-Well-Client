import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Input, InputGroup } from "reactstrap";
import moment from "moment";

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
    const { id, text, points, accepted, deadline } = this.props;
    return (
      <div className="TaskItem d-flex flex-row justify-content-center">
        <div className="flex-grow-1 p-2"> {text} </div>
        <div className="p-2"> {points} pt </div>
        <div className="p-2">
          {accepted ? (
            moment(deadline).format("MM/DD").toString()
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
