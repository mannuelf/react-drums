import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 0.5em;
  padding: 1rem;
  height: 64px;
  width: 64px;
  cursor: pointer;
  box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.5);
  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

const Pad = props => {
  return <Button>F</Button>;
};

export default Pad;
