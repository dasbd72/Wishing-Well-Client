import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TaskItem from "Components/room/TaskItem.jsx"

import "./TodoTask.css"

export class TodoTask extends Component {
  static propTypes = {

  }

  render() {
    return (
      <>
          <h1>TodoTask</h1>
          <div className="TodoTaskForm">
            <TaskItem/>
            <TaskItem/>
          </div>
      </>
    )
  }
}

export default TodoTask
