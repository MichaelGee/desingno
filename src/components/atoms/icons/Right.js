import PropTypes from 'prop-types';
import React from 'react';

const Right = (props) => {
  const { color, size, ...otherProps } = props
  return (<svg width={size} viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1.13477L5 5.13477L1 9.13477" stroke="#E7816B" stroke-width="2"/>
  </svg>);
};

Right.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Right.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Right;