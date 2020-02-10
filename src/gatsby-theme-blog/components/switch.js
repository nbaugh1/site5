import React from 'react';
import ReactSwitch from 'react-switch';

export const ColorSwitch = props => <ReactSwitch {...props} />

ColorSwitch.defaultProps = {
  checkedIcon: false,
  uncheckedIcon: false,
  height: 24,
  width: 48,
  handleDiameter: 24,
  offColor: `#000`,
  onColor: `#000`,
  boxShadow: `inset 0 0 0 1px #000`,
}

// eslint-disable-next-line no-undef
export default ColorSwitch;
