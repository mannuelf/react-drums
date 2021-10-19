import React from 'react';
import t from 'prop-types';

const Button = ({ children, kind }: any): JSX.Element => {
  // We use the kind prop to determine the button's class
  return <button className={kind}>{children}</button>;
};

Button.propTypes = {
  /**
   * This is a pretty good description for this prop.
   */
  kind: t.oneOf(['primary', 'secondary', 'cancel', 'dark', 'gray']),
};
Button.defaultProps = {
  kind: 'primary',
};
export default Button;
