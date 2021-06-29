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
import { getChosenPrize, getUserInfo } from "Api/users";
import PrizeItem from "../Prizes/PrizeItem";

export class ParentSpy extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      acceptedTasks: [],
      rejectedTasks: [],
      unacceptedTasks: [],
      doneTasks: [],
      activeIndex: -1,
      animating: false,
      currentUserPrize: {},
    };
  }
  componentDidMount() {
    this.props.p_listChild(this.props.room.roomId).then(() => {
      this.setActiveIndex(0);
    });
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

    if (prevStates.activeIndex != this.state.activeIndex) {
      this.props.p_spyTasks(
        this.props.room.roomId,
        this.props.room.p_childList[this.state.activeIndex].userId
      );
      getChosenPrize(
        this.props.room.roomId,
        this.props.room.p_childList[this.state.activeIndex].userId
      ).then((prize) => {
        this.setState({ currentUserPrize: prize });
      });
    }
  }
  nextCarousel = () => {
    const nextIndex =
      this.state.activeIndex === this.props.room.p_childList.length - 1
        ? 0
        : this.state.activeIndex + 1;
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
  };

  render() {
    const slides = this.props.room.p_childList.map(this.generateSlide);
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
            No Children Yet.
          </h1>
        ) : (
          <Carousel
            next={this.nextCarousel}
            previous={this.prevCarousel}
            activeIndex={this.state.activeIndex}
            interval={false}
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

  generateSlide = (user) => {
    return (
      <CarouselItem
        onExiting={() => this.setState({ animating: true })}
        onExited={() => this.setState({ animating: false })}
        key={shortid.generate()}
      >
        <div className="slidePage h-100 d-flex justify-content-center">
          <div className="slidePageContent w-75 ">
            <TaskGroup
              tasks={this.state.acceptedTasks}
              label={"Accepted"}
              min={2}
            />
            <TaskGroup
              tasks={this.state.unacceptedTasks}
              label={"Unaccepted"}
              min={2}
            />
            <TaskGroup
              tasks={this.state.rejectedTasks}
              label={"Rejected"}
              min={2}
            />
            <TaskGroup tasks={this.state.doneTasks} label={"Done"} min={2} />
            {this.state.currentUserPrize && (
              <div className="p-3 d-flex w-100 flex-column align-items-center">
                <div>
                  <h2 style={{ color: "white" }}>Chosen Prize</h2>
                </div>
                <div className="">
                  <PrizeItem {...this.state.currentUserPrize}></PrizeItem>
                </div>
              </div>
            )}
          </div>
        </div>
        <CarouselCaption captionHeader={user.userName} captionText={""} />
      </CarouselItem>
    );
  };
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
