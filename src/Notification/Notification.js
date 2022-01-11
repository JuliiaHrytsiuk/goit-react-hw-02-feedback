import React, { Component } from "react";
import PropTypes from "prop-types";
import { NotificationMessage } from "./Notification.styled";

class Notification extends Component {
  render() {
    return <NotificationMessage>{this.props.message}</NotificationMessage>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
