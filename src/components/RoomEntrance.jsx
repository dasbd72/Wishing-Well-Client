import React from "react";
import PropTypes from "prop-types";
// import { BrowserRouter as Router, Route, Link, withRouter, Switch } from "react-router-dom";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   Input,
//   Button,
// } from "reactstrap";
import { connect } from "react-redux";
// <<<<<<< HEAD
// <<<<<<< HEAD
import { AvForm, AvField } from "availity-reactstrap-validation";

// =======
// =======
import { Route, Link, Switch, withRouter } from "react-router-dom";
// >>>>>>> 2ebc7934c5603ecc847500fb3db9086acc18cd94
import {
  Button,
  Col,
  Form,
  Input,
  FormGroup,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";

// <<<<<<< HEAD
import ParentPage from "Components/Room/Parent/ParentPage.jsx";
import ChildrenPage from "Components/Room/Children/ChildrenPage.jsx";
// >>>>>>> 2dcdee7a6a6e8dcc2a2e9edf941ae7f3438aef03
// =======
// import ChildrenPage from "Components/Room/Children/ChildrenPage";
// >>>>>>> 2ebc7934c5603ecc847500fb3db9086acc18cd94

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
// <<<<<<< HEAD

//   render() {
//     return (
//       <Router>
//         <div className="RoomEntrance">
//           <Navbar>
//             <Nav>
//               <NavLink tag={Link} to="/room/parent">
//                 Parent
//               </NavLink>
//             </Nav>
//           </Navbar>
//         </div>
//         <Route exact path="/room/parent" render={() => <MasterRoom/>} />
//       </Router>
// =======
  render() {
    const { match } = this.props;
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
                  <Button tag={Link} to={`${match.url}/parent`}>
                    Parent
                  </Button>
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
        <Route path={`${match.url}/parent`}>
          <ParentPage />
        </Route>
      </Switch>
// >>>>>>> 2dcdee7a6a6e8dcc2a2e9edf941ae7f3438aef03
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.session,
// <<<<<<< HEAD
// // <<<<<<< HEAD
// // }))(RoomEntrance);
// // =======
// }))(withRouter(RoomEntrance));
// // >>>>>>> 2dcdee7a6a6e8dcc2a2e9edf941ae7f3438aef03
// =======
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RoomEntrance));
// >>>>>>> 2ebc7934c5603ecc847500fb3db9086acc18cd94
