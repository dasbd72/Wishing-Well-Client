import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Carousel,
  CarouselIndicators,
  CarouselControl,
  CarouselItem,
  CarouselCaption,
  Container,
} from "reactstrap";
import shortid from "shortid";

import { p_listChild, p_spyTasks } from "States/room-actions";
import TaskGroup from "Components/Room/Tasks/TaskGroup";
import { getUserInfo } from "Api/users";

export class ParentSpy extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      acceptedTasks: [],
      rejectedTasks: [],
      unacceptedTasks: [],
      doneTasks: [],
      userNameList: [],
      activeIndex: 0,
      animating: false,
    };
  }
  componentDidMount() {
    this.props
      .p_listChild(this.props.room.roomId)
      .then(() => this.setActiveIndex(0));
  }
  componentDidUpdate(prevProps, prevStates) {
    if (prevProps.room.p_spy_tasks != this.props.room.p_spy_tasks) {
      this.setState({
        acceptedTasks: this.props.room.p_spy_tasks.filter(
          (el) => el.isAccepted == 1 && el.done == 0
        ),
        rejectedTasks: this.props.room.p_spy_tasks.filter(
          (el) => el.isAccepted == 2
        ),
        unacceptedTasks: this.props.room.p_spy_tasks.filter(
          (el) => el.isAccepted == 0
        ),
        doneTasks: this.props.room.p_spy_tasks.filter(
          (el) => el.isAccepted == 1 && el.done == 1
        ),
      });
    }
  }
  nextCarousel = () => {
    const nextIndex =
      this.state.activeIndex === 0 ? 0 : this.state.activeIndex + 1;
    this.setActiveIndex(nextIndex);
  };
  prevCarousel = () => {
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.room.p_childList.length - 1
        : this.state.activeIndex - 1;
    this.setActiveIndex(nextIndex);
  };
  setActiveIndex = (index) => {
    if (this.state.animating || this.props.room.p_childList.length == 0) return;
    this.setState({ activeIndex: index });
    this.props.p_spyTasks(
      this.props.room.roomId,
      this.props.room.p_childList[index].userId
    );
  };

  render() {
    const slides = this.props.room.p_childList.map((user) => {
      return (
        <CarouselItem
          onExiting={() => this.setState({ animating: true })}
          onExited={() => this.setState({ animating: false })}
          key={shortid.generate()}
        >
          <div className="slidePage h-100 d-flex justify-content-center align-items-center">
            <div className="w-75">
              <TaskGroup tasks={this.state.acceptedTasks} label={"Accepted"} />
              <TaskGroup
                tasks={this.state.unacceptedTasks}
                label={"Unaccepted"}
              />
              <TaskGroup tasks={this.state.rejectedTasks} label={"Rejected"} />
              <TaskGroup tasks={this.state.doneTasks} label={"Done"} />
            </div>
          </div>
          <CarouselCaption
            captionText={user.userName}
            captionHeader={user.userName}
          />
        </CarouselItem>
      );
    });
    return (
      <div className="ParentSpy d-flex align-items-center justify-content-center">
        {this.props.room.p_childList.length == 0 ? (
          <h1
            style={{
              color: "white",
              background: "black",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
            }}
          >
            No Children Yet
          </h1>
        ) : (
          <Carousel
            next={this.nextCarousel}
            previous={this.prevCarousel}
            activeIndex={this.state.activeIndex}
          >
            <CarouselIndicators
              items={this.props.room.p_childList}
              activeIndex={this.state.activeIndex}
              onClickHandler={this.setActiveIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={this.prevCarousel}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={this.nextCarousel}
            />
          </Carousel>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  room: state.room,
  session: state.session,
});

const mapDispatchToProps = {
  p_listChild,
  p_spyTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(ParentSpy);
