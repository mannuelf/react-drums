type Props = {
  htmlFor: string;
  label: string;
};

const Label = ({ ...props }: Props): JSX.Element => {
  return <label htmlFor={props.htmlFor}>{props.label}</label>;
};

export default Label;
