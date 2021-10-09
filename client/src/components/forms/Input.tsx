import React from 'react';
import styled from 'styled-components';

type Props = {
  id?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: any) => void;
};

export const Input = ({ ...props }: Props): JSX.Element => {
  return <StyledInput {...props} />;
};

const StyledInput = styled('input')({
  width: '100%',
  marginBottom: '1em',
  padding: '.5em',
  border: '1px solid #CCC',
  fontSize: 16,
  outline: 'none',
  ':focus': {
    borderColor: '1px solid #4444',
  },
});
