import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { IoMdAddCircle } from "react-icons/io";
import { FaChild } from "react-icons/fa";
import { GiOldKing } from "react-icons/gi";

import ParentPage from "Components/Room/Parent/ParentPage";
import ChildrenPage from "Components/Room/Children/ChildrenPage";
import MainNavbar from "Components/MainNavbar";
import Room from "Components/Room/Room";
import RoomCardItem from "Components/Room/Cards/RoomCardItem";

import "./RoomEntrance.css";

class RoomEntrance extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
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
    const { match } = this.props;
    return (
      <Switch>
        <Route exact path={`${match.path}/`}>
          <div className="RoomEntrance-bg"></div>
          <div className="RoomEntrance">
            <MainNavbar fixedTop={false} />
            <Container>
              <Row sm="2" lg="3" xl="4" className="mx-auto pt-3 gy-5">
                <Col>
                  <Card
                    style={{ height: 320, width: 230 }}
                    body
                    onClick={this.toggleModal}
                    className="create-room"
                  >
                    <IoMdAddCircle
                      size={50}
                      className="mx-auto"
                      style={{ margin: 75 }}
                    />
                    <CardBody>
                      <CardTitle>Create or Join</CardTitle>
                    </CardBody>
                  </Card>
                </Col>
                <RoomCardItem
                  id="children"
                  icon={<FaChild />}
                  title="Children"
                />
                <RoomCardItem id="parent" icon={<GiOldKing />} title="Parent" />
                <RoomCardItem id="parent" icon={<GiOldKing />} title="Parent" />
                <RoomCardItem id="parent" icon={<GiOldKing />} title="Parent" />
              </Row>

              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
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
          </div>
        </Route>
        <Route path={`${match.path}/children`}>
          <ChildrenPage />
        </Route>
        <Route path={`${match.path}/parent`}>
          <ParentPage />
        </Route>
        <Route path={`${match.path}/:id`}>
          <Room />
        </Route>
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.session,
  navHeight: state.main.navHeight,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RoomEntrance));
