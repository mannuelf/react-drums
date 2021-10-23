import React from 'react';
import styled from 'styled-components';

interface InputProps {
  id?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  onChange?: (e: any) => void;
}

const Input = ({ ...props }: InputProps): JSX.Element => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input<InputProps>`
  width: '100%';
  margin-bottom: '1em';
  padding: '.5em';
  border: '1px solid #FFF';
  font-size: '1rem';
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '1.5rem'};
  outline: 'none';
`;

export default Input;
