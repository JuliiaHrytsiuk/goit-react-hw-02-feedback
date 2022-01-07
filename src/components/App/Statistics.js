import React, { Component } from "react";
import PropTypes from "prop-types";
// import s from "./Statistics.module.css";

class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props;

    return (
      <div>
        <div>
          <p>Good</p>
          <p>{good}</p>
        </div>
        <div>
          <p>Neutral</p>
          <p>{neutral}</p>
        </div>
        <div>
          <p>Bad</p>
          <p>{bad}</p>
        </div>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  //   total: PropTypes.number.isRequired,
  //   positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
