import { graphql } from 'gatsby';
import moment from 'moment';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Video from '../components/video/video';

const classes = {
  wrapper: 'mt-16 projects-content',
  title: 'mt-16 text-4xl text-slate-900 font-bold',
  date: 'text-slate-900 font-light',
};

const projectsPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Header metadata={data.site.siteMetadata} />
      <SEO title={post.frontmatter.title} />
      <h1 className={classes.title}>{post.frontmatter.title}</h1>
     
      <div
        className={classes.wrapper}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <Video
        videoSrcURL={post.frontmatter.videoSrcURL}
        videoTitle={post.frontmatter.videoTitle}
      />
    </Layout>
  );
};

export default projectsPost;

export const pageQuery = graphql`
  query projectsPostBySlug($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        videoSrcURL
        videoTitle
      }
    }
  }
`;
