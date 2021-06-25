import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Input, InputGroup } from "reactstrap";
import moment from "moment";
import * as IconsBi from "react-icons/bi";

export class TaskItem extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    information: PropTypes.string,
    points: PropTypes.number,
    accepted: PropTypes.bool,
    deadline: PropTypes.number,
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { id, title, information, points, accepted, deadline } = this.props;
    return (
      <div className="TaskItem col-5 p-2">
        <div className="title"> {title} </div>
        <div className="deadline">
          {accepted ? <IconsBi.BiCalendarAlt /> : <IconsBi.BiCalendarPlus />}
          <span>{moment(deadline).format("MM/DD").toString()}</span>
        </div>
        <div className=""> {points} pt </div>
        <div className="">
          {accepted ? (
            <></>
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
