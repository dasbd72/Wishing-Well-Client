import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavItem, NavLink, Col } from "reactstrap";
import { Link } from "react-router-dom";

export default class SidebarItem extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
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
    var newProps = {};
    if (this.props.clickFunc) newProps["onClick"] = this.props.clickFunc;
    if (this.props.destination)
      (newProps["tag"] = Link), (newProps["to"] = this.props.destination);
    var newDiv = React.cloneElement(
      <NavLink>
        <div className="d-flex flex-row align-items-center justify-content-between">
          <div>{this.props.icon}</div>
          <div hidden={!this.props.isOpen} className="mr-auto pl-2">
            {this.props.label}
          </div>
        </div>
      </NavLink>,
      newProps
    );
    return <NavItem className="SidebarItem">{newDiv}</NavItem>;
  }
}
