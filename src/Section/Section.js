import React, { Component } from "react";
import PropTypes from "prop-types";
import { SectionTitle, SectionContainer } from "./Section.styled";

class Section extends Component {
  render() {
    return (
      <SectionContainer>
        <SectionTitle>{this.props.title}</SectionTitle>
        {this.props.children}
      </SectionContainer>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
