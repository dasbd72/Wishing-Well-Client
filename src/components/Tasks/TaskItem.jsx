import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, InputGroup, InputGroupAddon } from "reactstrap";
import moment from "moment";
import * as IconsBi from "react-icons/bi";

export class TaskItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    information: PropTypes.string,
    points: PropTypes.number,
    accepted: PropTypes.bool,
    deadline: PropTypes.number,

    targetUser: PropTypes.string,
    text: PropTypes.string,
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { id, title, information, points, accepted, deadline } = this.props;
    return (
      <div className="col-md-6 col-12">
        <div className="TaskItem p-2 d-flex">
          <div>
            <div className="title"> {title} </div>
            <div className="deadline d-flex align-items-center">
              {accepted ? (
                <IconsBi.BiCalendarAlt />
              ) : (
                <IconsBi.BiCalendarPlus />
              )}
              <span>{moment(deadline).format("YYYY-MM-DD").toString()}</span>
            </div>
            <div className=""> {points} pt </div>
          </div>
          <div className="ml-auto">
            {!accepted && (
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
