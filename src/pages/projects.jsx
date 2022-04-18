import { graphql } from 'gatsby';
import React from 'react';

import ProjectPosts from '../components/blog-posts';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from './404';

const Index = ({ data }) => {
  const projectPosts = data.allMarkdownRemark.edges;
  const projects = !projectPosts || !projectPosts.length;

  if (!projectPosts || !projectPosts.length) {
    return <NotFound />;
  }

  return (
    <Layout>
      <SEO title="Projects" />
      <Header metadata={data.site.siteMetadata} />
      {!projects && <ProjectPosts projectPosts={projectPosts} />}
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
        github
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
