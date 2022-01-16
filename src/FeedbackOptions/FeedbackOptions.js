import React, { Component } from "react";
import PropTypes from "prop-types";
import { ButtonList, Button } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map((option) => (
        <Button
          key={option}
          type="button"
          value={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(["good", "neutral", "bad"])),
};

export default FeedbackOptions;
