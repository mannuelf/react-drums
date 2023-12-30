import React from 'react';

type Props = {
  htmlFor: string;
  label: string;
};

const Label: React.FC<Props> = ({ label, htmlFor }) => {
  return (
    <label className={label} htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export default Label;
