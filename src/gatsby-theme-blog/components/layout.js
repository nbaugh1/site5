/* eslint-disable react/prop-types */
import React from 'react';
import Header from './header';
import '../../style/main.scss';

export default ({ children, ...props }) => (
  <div>
    <Header {...props} />
    <div>
      <div>{children}</div>
    </div>
  </div>
);
