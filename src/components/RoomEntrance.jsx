import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import {
  Button,
  Row,
  Col,
  Form,
  FormText,
  Input,
  Label,
  FormGroup,
  InputGroup,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

import ChildrenPage from "Components/Room/Children/ChildrenPage.jsx";

import "./RoomEntrance.css";

class RoomEntrance extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { match, location, history } = this.props;
    console.log("location => ");
    console.log(location);
    console.log("match => ");
    console.log(match);
    console.log("history => ");
    console.log(history);
    return (
      <Switch>
        <Route exact path={`${match.url}/`}>
          <div className="RoomEntrance d-flex flex-row align-items-center justify-content-center">
            <div className="col-4 d-flex flex-row justify-content-evenly">
              <Card className="col-5">
                <CardImg top src="" width="100%" alt="Room img" />
                <CardBody>
                  <CardTitle>Room A</CardTitle>
                  <CardText>This is the room.</CardText>
                  <Button tag={Link} to={`${match.url}/children`}>
                    Children
                  </Button>
                </CardBody>
              </Card>
              <Card className="col-5">
                <CardImg top src="" width="100%" alt="Room img" />
                <CardBody>
                  <CardTitle>Room A</CardTitle>
                  <CardText>This is the room.</CardText>
                  <Button>Parent</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-8">
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
                </FormGroup>
              </Form>
            </div>
          </div>
        </Route>
        <Route path={`${match.url}/children`}>
          <ChildrenPage />
        </Route>
      </Switch>
    );
  }
}

export default connect((state) => ({
  ...state.session,
}))(withRouter(RoomEntrance));
