import React, { Component } from "react";
import PropTypes from "prop-types";
import { Nav } from "reactstrap";
import classNames from "classnames";
import * as IconAi from "react-icons/ai";

import SidebarItem from "Components/Room/Sidebar/SidebarItem";

import "./Sidebar.css";

export default class SidebarContainer extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    var upItems = [];
    var bottomItems = [];
    React.Children.map(this.props.children, (child) => {
      if (React.isValidElement(child)) {
        var newChild = React.cloneElement(child, { isOpen: this.state.isOpen });
        if (child.props.bottom) bottomItems.push(newChild);
        else upItems.push(newChild);
      }
    });
    return (
      <div className="SidebarContainer">
        <div
          className={classNames(
            "sidebar bg-light text-light h-100 d-flex flex-column",
            {
              "is-open": this.state.isOpen,
            }
          )}
        >
          <Nav vertical className="list-unstyled flex-column mb-auto">
            <SidebarItem
              clickFunc={this.toggle}
              label="Sidebar"
              icon={<IconAi.AiOutlineBars />}
              isOpen={this.state.isOpen}
            />
            {upItems}
          </Nav>
          <Nav vertical className="list-unstyled flex-column">
            {bottomItems}
          </Nav>
        </div>
      </div>
    );
  }
}

// https://codesandbox.io/s/5ku6t?file=/src/components/sidebar/SideBar.js
