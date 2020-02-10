import React from 'react';
import { Styled } from 'theme-ui';

/**
 * Shadow me to add your own bio content
 */

// eslint-disable-next-line react/prop-types
export default ({ author }) => (
  <>
    Words by <Styled.a href="http://example.com/">NICK</Styled.a>.
    <br />
    <p>by: {author}</p>
    NEW BIO CONTENT
  </>
);
