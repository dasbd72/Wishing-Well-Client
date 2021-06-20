import React, { Component } from "react";
import PropTypes from "prop-types";
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
import { GiMushroomHouse } from "react-icons/gi";
import { Link, withRouter } from "react-router-dom";

export default withRouter(
  class RoomCardItem extends Component {
    static propTypes = {
      id: PropTypes.string,
      icon: PropTypes.object,
      title: PropTypes.string,
      text: PropTypes.string,
    };

    render() {
      const { match } = this.props;
      var icon = React.cloneElement(
        this.props.icon ? this.props.icon : <GiMushroomHouse />,
        {
          size: 200,
          className: "mx-auto",
        }
      );
      return (
        <Col>
          <Card style={{ height: 320, width: 230 }} body>
            {icon}
            <CardBody>
              <CardTitle hidden={!this.props.title}>
                {this.props.title}
              </CardTitle>
              <CardText hidden={!this.props.text}>{!this.props.text}</CardText>
              <Button tag={Link} to={`${match.url}/${this.props.id}`}>
                Enter
              </Button>
            </CardBody>
          </Card>
        </Col>
      );
    }
  }
);
