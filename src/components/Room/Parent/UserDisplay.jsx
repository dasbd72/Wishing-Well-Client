import React from 'react'
import PropTypes from 'prop-types'

import "./UserDisplay.css"

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

export default class UserDisplay extends React.Component {
  static propTypes = {

  }

  render() {
    return (
      <div className="UserDisplayPage">
          <h1>UserDisplay</h1>
          <div className="ImageForm" >
            <img className="Image" src="" alt="Avatar"></img>
          </div>
          <div className="ChildDisplay">
          </div>
      </div>
    )
  }
}
