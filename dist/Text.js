import { PropTypes } from 'prop-types';
import React from 'react';
export const Text = ({
  style,
  title,
  bold,
  italic,
  size,
  color,
  center,
  upCase,
  value
}) => /*#__PURE__*/React.createElement("div", {
  className: "textContainer",
  style: {
    fontWeight: bold ? 'bold' : 'normal',
    fontStyle: italic ? 'italic' : 'normal',
    fontSize: size || 15,
    fontFamily: title ? 'Lato, sans-serif' : "'Source Sans Pro', sans-serif",
    color: color || '#32324e',
    textAlign: center ? 'center' : 'start',
    ...style
  }
}, upCase ? value.toUpperCase() : value);
Text.propTypes = {
  style: PropTypes.object,
  children: PropTypes.object,
  title: PropTypes.bool,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  center: PropTypes.bool,
  upCase: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};