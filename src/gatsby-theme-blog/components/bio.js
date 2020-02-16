/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import { Styled, css, Flex } from 'theme-ui';
// import BioContent from './bio-content';

const Bio = () => {
  // eslint-disable-next-line no-use-before-define
  const data = useStaticQuery(bioQuery);
  const {
    site: {
      // eslint-disable-next-line no-unused-vars
      siteMetadata: { author },
    },
  } = data;
  return <h4> </h4>;
};

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        title
      }
    }
  }
`;

export default Bio;
