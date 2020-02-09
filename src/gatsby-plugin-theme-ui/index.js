import baseTheme from 'gatsby-theme-blog/src/gatsby-plugin-theme-ui';

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: '#333',
    background: '#fff',
    primary: 'tomato',
  },
  fonts: {
    body: 'Work Sans, sans-serif;',
    heading: 'Work Sans, sans-serif;',
    a: 'Work Sans, sans-serif;',
  },
};
