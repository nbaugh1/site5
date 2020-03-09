/* eslint-disable no-console */
import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Styled, css } from 'theme-ui';

import Layout from './layout';
// import SEO from '../components/seo';
// import Footer from '../components/home-footer';

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <main>
      {posts.map(({ node }) => {
        const title = node.title || node.slug;
        const keywords = node.keywords || [];
        return (
          <Fragment key={node.slug}>
            {/* <SEO title="Home" keywords={keywords} /> */}
            <div className="container">
              <Styled.h2
                css={css({
                  textAlign: 'left',
                  mb: 1,
                })}
              >
                <Styled.a
                  as={Link}
                  css={css({
                    textDecoration: `none`,
                    textAlign: 'left',
                  })}
                  to={node.slug}
                >
                  {title}
                </Styled.a>
              </Styled.h2>
              <small>{node.date}</small>
              <Styled.p>{node.excerpt}</Styled.p>
            </div>
          </Fragment>
        );
      })}
    </main>
    {/* <Footer socialLinks={socialLinks} /> */}
  </Layout>
);

export default Posts;
