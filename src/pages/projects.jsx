import { graphql } from 'gatsby';
import React from 'react';

//import BlogPosts from '../components/blog-posts';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from './404';

const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const projects = !posts || !posts.length;

  if (!posts || !posts.length) {
    return <NotFound />;
  }

  return (
    <Layout>
      <SEO title="Blog" />
      <Header metadata={data.site.siteMetadata} />
      {!projects && <BlogPosts posts={posts} />}
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
