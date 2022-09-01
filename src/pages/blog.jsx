import { graphql } from 'gatsby';
import React from 'react';

import blogPosts from '../components/blog-posts';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from '../pages/404';

const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const noblog = !posts || !posts.length;

  if (!posts || !posts.length) {
    return <NotFound />;
  }

  return (
    <Layout>
      <SEO title="Projects" />
      <Header metadata={data.site.siteMetadata} />
      {!noblog && <blogPosts posts={posts} />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        artstation
        linkedin
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
