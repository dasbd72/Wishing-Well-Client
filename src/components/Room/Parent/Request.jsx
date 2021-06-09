import React from 'react'
import PropTypes from 'prop-types'

import TaskItem from "Components/room/TaskItem.jsx"

import "./Request.css"

export default class Request extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Request">
        <h1>New Request</h1>
        <div className="RequestForm">   
          <TaskItem/>   
          <TaskItem/>
        </div>
      </div>
    );
  }
}
