import styled from 'styled-components';

type Props = {
  disabled?: boolean;
  className?: string;
  btnWidth?: string;
  btnPadding?: string;
  children: React.ReactNode;
  onClick: () => void;
} & React.ComponentProps<'button'>;

const Button = styled.button<Props>`
  background: #444;
  border-radius: 3px;
  padding: 1rem;
  border: none;
  height: auto;
  width: ${(props) => (props?.btnWidth ? props?.btnWidth : '100%')};
  cursor: pointer;
  box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.4);
`;

export default Button;
