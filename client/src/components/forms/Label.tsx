type Props = {
  htmlFor: string;
  label: string;
};

export const Label = ({ ...props }: Props): JSX.Element => {
  return <label htmlFor={props.htmlFor}>{props.label}</label>;
};
