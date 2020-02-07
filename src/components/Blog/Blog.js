import React from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade'

const Blog = () => {
  return (
    <section id="blog">
      <Container>
        <Title title="Blog" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <h3></h3>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Blog;
