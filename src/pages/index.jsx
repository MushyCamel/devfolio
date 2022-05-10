import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionBlog from '../components/section-blog';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import SEO from '../components/seo';
import Video from '../components/video/video';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const posts = data.allMarkdownRemark.edges;
  const noBlog = !posts || !posts.length;
  const video = get(data, 'site.siteMetadata.video', false);

  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      <video controls>
          <source media='Showreal_2021.mp4' type='video/mp4'></source>
      </video>
      {about && <SectionAbout about={about} />}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {skills && skills.length && <SectionSkills skills={skills} />}

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
        projects {
          name
          description
          link
        }
        experience {
          name
          description
          link
        }
        skills {
          name
          description
        }       
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
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
