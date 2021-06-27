import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Col,
  Row,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import shortid from "shortid";

import { FaChild } from "react-icons/fa";
import { GiOldKing } from "react-icons/gi";

import LobbyRoomItem from "./LobbyRoomItem";
import { userCreateRoom, userJoinRoom } from "States/lobby-actions";

export class LobbyRoomList extends Component {
  static propTypes = {
    rooms: PropTypes.array,
  };
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      chosenRole: "",
    };
    this.inputRoomName = null;
    this.inputRoomId = null;
  }
  toggleModal = () => {
    this.setState((state) => ({
      isModalOpen: !state.isModalOpen,
    }));
  };
  setChosenRole = (role) => {
    return () => {
      this.setState({
        chosenRole: role,
      });
    };
  };
  createRoom = () => {
    this.props.userCreateRoom(
      this.inputRoomName.value.toString(),
      this.props.session.userId,
      this.state.chosenRole
    );
  };
  joinRoom = () => {
    this.props.userJoinRoom(
      this.inputRoomId.value.toString(),
      this.props.session.userId,
      this.state.chosenRole
    );
  };

  render() {
    let content = [];
    content = this.props.rooms.map((el) => {
      return (
        <LobbyRoomItem
          roomId={el.roomId}
          title={String(el.roomname)}
          key={shortid.generate()}
        />
      );
    });
    return (
      <Container className="pt-4">
        <Row sm="2" lg="3" xl="4" className="LobbyRoomList g-4">
          <LobbyRoomItem add toggle={this.toggleModal} />
          {content}
        </Row>
        <Modal isOpen={this.state.isModalOpen}>
          <ModalHeader toggle={this.toggleModal}>
            Join Or Create Room
          </ModalHeader>
          <ModalBody>
            <Container>
              <Row className="mb-2">
                <Col>
                  <InputGroup className="justify-content-center">
                    <InputGroupAddon addonType="prepend">
                      <Button
                        color="danger"
                        outline={this.state.chosenRole !== "parent"}
                        onClick={this.setChosenRole("parent")}
                      >
                        Parent
                      </Button>
                    </InputGroupAddon>
                    <InputGroupAddon addonType="append">
                      <Button
                        color="success"
                        outline={this.state.chosenRole !== "children"}
                        onClick={this.setChosenRole("children")}
                      >
                        Children
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <InputGroup>
                    <Input
                      type="text"
                      name="roomName"
                      id="roomName"
                      placeholder="Create Room Name"
                      innerRef={(e) => (this.inputRoomName = e)}
                    />
                    <InputGroupAddon addonType="append">
                      <Button onClick={this.createRoom}>Enter</Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup>
                    <Input
                      type="text"
                      name="roomCode"
                      id="roomCode"
                      placeholder="Enter Room Code To Join Room"
                      innerRef={(e) => (this.inputRoomId = e)}
                    />
                    <InputGroupAddon addonType="append">
                      <Button onClick={this.joinRoom}>Enter</Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Row>
            </Container>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
});

const mapDispatchToProps = {
  userCreateRoom,
  userJoinRoom,
};

export default connect(mapStateToProps, mapDispatchToProps)(LobbyRoomList);
