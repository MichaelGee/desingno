import PropTypes from 'prop-types';
import React from 'react';

const Hambuger = (props) => {
  const { color, size, ...otherProps } = props
  return (<svg width={size} viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <rect width="24" height="4" fill="#1D1C1E"/>
  <rect y="8" width="24" height="4" fill="#1D1C1E"/>
  <rect y="16" width="24" height="4" fill="#1D1C1E"/>
  </svg>);
};

Hambuger.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Hambuger.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Hambuger;