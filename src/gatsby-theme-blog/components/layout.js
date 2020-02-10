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
          //   maxWidth: `container`,
          mx: `auto`,
          //   px: 3,
          //   py: 4,
          textAlign: `left`,
          borderStyle: `solid`,
          margin: 0,
        })}
      >
        {children}
      </div>
    </div>
  </Styled.root>
);
