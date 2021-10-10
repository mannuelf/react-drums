import styled from 'styled-components';

type Props = {
  htmlFor: string;
  label: string;
};

const Label = ({ ...props }: Props): JSX.Element => {
  return <StyledLabel htmlFor={props.htmlFor}>{props.label}</StyledLabel>;
};

const StyledLabel = styled('label')({
  width: '100%',
  marginBottom: '1rem',
  fontSize: '1.2em',
  color: '#ccc',
});

export default Label;
