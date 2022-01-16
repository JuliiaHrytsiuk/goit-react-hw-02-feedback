import React from "react";
import PropTypes from "prop-types";
import {
  StatisticField,
  StatisticItem,
  StatisticOptions,
  StatisticResult,
  StatisticName,
  StatisticTotal,
} from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticField>
      <StatisticOptions>
        <StatisticItem>
          <StatisticName>Good</StatisticName>
          <StatisticResult>{good}</StatisticResult>
        </StatisticItem>
        <StatisticItem>
          <StatisticName>Neutral</StatisticName>
          <StatisticResult>{neutral}</StatisticResult>
        </StatisticItem>
        <StatisticItem>
          <StatisticName>Bad</StatisticName>
          <StatisticResult>{bad}</StatisticResult>
        </StatisticItem>
      </StatisticOptions>

      <StatisticTotal>
        <StatisticItem>
          <StatisticName>Total</StatisticName>
          <StatisticResult>{total}</StatisticResult>
        </StatisticItem>
        <StatisticItem>
          <StatisticName>Positive feadback</StatisticName>
          <StatisticResult>{positivePercentage}%</StatisticResult>
        </StatisticItem>
      </StatisticTotal>
    </StatisticField>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
