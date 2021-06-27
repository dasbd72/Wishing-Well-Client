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
  Col,
} from "reactstrap";

import './ChildrenWish.css'

export class ChildrenWish extends Component {
  static propTypes = {
    // prop: PropTypes,
  };

  render() {
    return (
      <Container className="ChildrenWish d-flex align-items-center justify-content-center ">
        <div className="wishBlur-bg"></div>
        <Form className="font-monospace">
          <FormGroup>
            <Label for="wish" style={{ fontSize: "2rem", color: "white" }}>
              Make Your Wish
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
            <Label for="points" style={{color: "white"}}>Goal Points</Label>
            <InputGroup>
              <Input type="number" name="points" id="PointsOfWish" min={0} />
              <InputGroupAddon addonType="append">
                <InputGroupText>pt</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
          <FormGroup check className="my-2 p-0">
            <Button>Submit</Button>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenWish);
