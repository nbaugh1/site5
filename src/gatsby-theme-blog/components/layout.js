/* eslint-disable react/prop-types */
import React from 'react';
import { css, Styled } from 'theme-ui';
import Header from './header';

export default ({ children, ...props }) => (
  <Styled.root>
    <Header {...props} />
    <div>
      <div
        css={css({
          minWidth: `container`,
          mx: `auto`,
          px: 2,
          py: 3,
          textAlign: `left`,
          margin: 10,
        })}
      >
        {children}
      </div>
    </div>
  </Styled.root>
);
