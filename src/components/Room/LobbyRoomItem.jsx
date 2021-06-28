import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";
import { IoMdAddCircle } from "react-icons/io";
import { GiMushroomHouse } from "react-icons/gi";
import { Link, withRouter } from "react-router-dom";

export default withRouter(
  class LobbyRoomItem extends Component {
    static propTypes = {
      add: PropTypes.bool,
      roomId: PropTypes.number,
      icon: PropTypes.object,
      title: PropTypes.string,
      text: PropTypes.string,
      toggle: PropTypes.func,
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
      if (this.props.add) {
        return (
          <Col>
            <Card
              style={{ height: 320, width: 230, border: "solid black 0.2rem" }}
              body
              onClick={this.props.toggle}
              className="create-room"
            >
              <IoMdAddCircle
                size={50}
                className="mx-auto"
                style={{ margin: 75 }}
              />
              <CardBody>
                <CardTitle>
                  Create or Join <br />a room
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
        );
      } else {
        return (
          <Col>
            <Card
              style={{ height: 320, width: 230, border: "solid black 0.2rem" }}
              body
            >
              {icon}
              <CardBody>
                <CardTitle hidden={!this.props.title}>
                  {this.props.title}
                </CardTitle>
                <CardText hidden={!this.props.text}>
                  {!this.props.text}
                </CardText>
                <Button tag={Link} to={`${match.url}/${this.props.roomId}`}>
                  Enter
                </Button>
              </CardBody>
            </Card>
          </Col>
        );
      }
    }
  }
);