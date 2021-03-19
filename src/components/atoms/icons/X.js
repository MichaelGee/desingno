import PropTypes from 'prop-types';
import React from 'react';

const X = (props) => {
  const { color, size, ...otherProps } = props
  return (<svg width={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <g id="Group">
  <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 7.17165L2.92901 0.100586L0.100586 2.92901L7.17165 10.0001L0.100586 17.0711L2.92901 19.8996L10.0001 12.8285L17.0711 19.8996L19.8996 17.0711L12.8285 10.0001L19.8996 2.92901L17.0711 0.100586L10.0001 7.17165Z" fill="#1D1C1E"/>
  </g>
  </svg>);
};

X.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

X.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default X;