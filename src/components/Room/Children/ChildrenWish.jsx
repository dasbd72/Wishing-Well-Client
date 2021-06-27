import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Alert,
} from "reactstrap";
import { createPrize } from "Api/prizes";

import './ChildrenWish.css'

export class ChildrenWish extends Component {
  static propTypes = {
    // prop: PropTypes,
  };

  constructor(props) {
    super(props);
    this.state = {
      sending: false,
      success: false,
      failed: false,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ sending: true });
    createPrize(
      this.props.room.roomId,
      this.props.session.userId,
      WishOfChild.value,
      PointsOfWish.value
    )
      .then((prize) => {
        this.setState({ sending: false, success: true });
        setTimeout(() => {
          this.setState({ success: false });
        }, 2000);
      })
      .catch((err) => {
        this.setState({ sending: false, failed: true });
        setTimeout(() => {
          this.setState({ failed: false });
        }, 2000);
      });
  };
  makeWish = () => {
    createPrizes();
  };
  render() {
    return (
// <<<<<<< HEAD
//       <Container className="ChildrenWish d-flex align-items-center justify-content-center ">
//         <div className="wishBlur-bg"></div>
//         <Form className="font-monospace">
//           <FormGroup>
//             <Label for="wish" style={{ fontSize: "2rem", color: "white" }}>
//               Make Your Wish
//             </Label>
//             <Input
//               type="text"
//               name="wish"
//               id="WishOfChild"
//               placeholder="IphoneX"
//               bsSize="lg"
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="points" style={{color: "white"}}>Goal Points</Label>
//             <InputGroup>
//               <Input type="number" name="points" id="PointsOfWish" min={0} />
//               <InputGroupAddon addonType="append">
//                 <InputGroupText>pt</InputGroupText>
//               </InputGroupAddon>
//             </InputGroup>
//           </FormGroup>
//           <FormGroup check className="my-2 p-0">
//             <Button>Submit</Button>
//           </FormGroup>
//         </Form>
//       </Container>
// =======
      <div className="ChildrenWish">
        <div className="d-flex align-items-center justify-content-center h-100">
          <Form className="font-monospace" onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="wish" style={{ fontSize: "2rem" }}>
                Your Wish
              </Label>
              <Input
                type="text"
                name="wish"
                id="WishOfChild"
                placeholder="IphoneX"
                bsSize="lg"
              />
            </FormGroup>
            <FormGroup>
              <Label for="points">Points</Label>
              <InputGroup>
                <Input type="number" name="points" id="PointsOfWish" min={0} />
                <InputGroupAddon addonType="append">
                  <InputGroupText>pt</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
            <FormGroup check className="my-2 p-0">
              <Button type="submit">Submit</Button>
            </FormGroup>
          </Form>
        </div>
        {this.state.sending && <Alert color="warning">Sending Wish...</Alert>}
        {this.state.success && (
          <Alert color="success">Wish Sent Successfully</Alert>
        )}
        {this.state.failed && <Alert color="danger">Failed To Send Wish</Alert>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
  room: state.room,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenWish);
