import styled from 'styled-components';

type Props = {
  btnAlign?: string;
  btnBgColor?: string;
  btnPadding?: string;
  btnRadius?: string;
  btnWidth?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
} & React.ComponentProps<'button'>;

const Button = styled.button<Props>`
  background: ${(props) => (props.btnBgColor ? props.btnBgColor : '#FFF')};
  border-radius: ${(props) => (props.btnRadius ? props.btnRadius : '1rem')};
  border: none;
  box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.4);
  color: #fff;
  cursor: pointer;
  float: ${(props) => (props.btnAlign ? props.btnAlign : 'none')};
  height: auto;
  margin-right: 0.5em;
  padding: ${(props) => (props.btnPadding ? props.btnPadding : '0.5rem')};
  width: ${(props) => (props?.btnWidth ? props?.btnWidth : '100%')};
`;

export default Button;
