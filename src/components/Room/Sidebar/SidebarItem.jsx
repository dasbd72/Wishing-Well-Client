import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavItem, NavLink, Col } from "reactstrap";
import { Link } from "react-router-dom";

export default class SidebarItem extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string,
    icon: PropTypes.object,
    clickFunc: PropTypes.func,
    destination: PropTypes.string,
    bottom: PropTypes.bool,
  };

  constructor(props) {
    super(props);
  }

  render() {
    var newDiv = (
      <div className="d-flex flex-row align-items-center justify-content-between">
        <Col>{this.props.icon}</Col>
        <Col hidden={!this.props.isOpen}>{this.props.label}</Col>
      </div>
    );
    return (
      <NavItem className="SidebarItem">
        {this.props.clickFunc ? (
          <NavLink onClick={this.props.clickFunc} tag={Link} to={this.props.destination}>{newDiv}</NavLink>
        ) : (
          <NavLink tag={Link} to={this.props.destination}>
            {newDiv}
          </NavLink>
        )}
      </NavItem>
    );
  }
}
