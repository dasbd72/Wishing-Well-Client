import React, { Component } from 'react'
import PropTypes from 'prop-types'

import "./TodoTask.css"

export class TodoTask extends Component {
  static propTypes = {

  }

  render() {
    return (
      <>
          <h1>TodoTask</h1>
          <div className="TodoTaskForm">
          </div>
      </>
    )
  }
}

export default TodoTask
