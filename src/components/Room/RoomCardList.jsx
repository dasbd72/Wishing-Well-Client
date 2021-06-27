import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Col,
  Row,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

import { FaChild } from "react-icons/fa";
import { GiOldKing } from "react-icons/gi";

import RoomCardItem from "./RoomCardItem";

export default class RoomCardList extends Component {
  static propTypes = {
    rooms: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  toggleModal = () => {
    this.setState((state) => ({
      isModalOpen: !state.isModalOpen,
    }));
  };

  render() {
    return (
      <Container className="pt-4">
        <Row sm="2" lg="3" xl="4" className="RoomCardList gy-4">
          <RoomCardItem add toggle={this.toggleModal} />
          <RoomCardItem roomId="children" icon={<FaChild />} title="Children" />
          <RoomCardItem roomId="parent" icon={<GiOldKing />} title="Parent" />
          <RoomCardItem roomId="parent" icon={<GiOldKing />} title="Parent" />
          <RoomCardItem roomId="parent" icon={<GiOldKing />} title="Parent" />
        </Row>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            Join Or Create Room
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup className="container gy-5" row>
                <Col xs="12">
                  <Input
                    type="text"
                    name="roomName"
                    id="roomName"
                    placeholder="Create Room Name"
                    className="py-3"
                  />
                </Col>
                <Col xs="12">
                  <Input
                    type="text"
                    name="roomCode"
                    id="roomCode"
                    placeholder="Enter Room Code To Join Room"
                    className="py-3"
                  />
                </Col>
                <Col xs="12">
                  <Button>Enter</Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}
