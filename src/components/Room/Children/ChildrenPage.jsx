import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { AiOutlineMenu } from "react-icons/ai";

import TaskItem from "Components/Room/TaskItem.jsx";

import "react-pro-sidebar/dist/css/styles.css";
import "./ChildrenPage.css";

class ChildrenPage extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="ChildrenPage">
        <ProSidebar>
          <SidebarHeader>ChildrenPage</SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<AiOutlineMenu />}></MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
        <div className="h-100 d-flex flex-row align-items-center justify-content-center">
          <div className="col-4">Hello</div>
          <div className="col-8 container d-flex flex-column">
            <ListGroup className="m-2 h-25">
              <ListGroupItem>
                <TaskItem
                  id="1"
                  text="IphoneX"
                  points="100"
                  accepted={false}
                  deadline={19080326}
                />
                <TaskItem
                  id="1"
                  text="IphoneX"
                  points="100"
                  accepted={false}
                  deadline={19080326}
                />
              </ListGroupItem>
            </ListGroup>
            <ListGroup className="m-2 h-50">
              <ListGroupItem>
                <TaskItem
                  id="1"
                  text="IphoneX"
                  points="100"
                  accepted={false}
                  deadline={19080326}
                />
                <TaskItem
                  id="1"
                  text="IphoneX"
                  points="100"
                  accepted={false}
                  deadline={19080326}
                />
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sidebarOpen: true,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSidebar: () =>
      dispatch({ type: "toggle", sidebarOpen: !ownProps.sidebarOpen }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenPage);
