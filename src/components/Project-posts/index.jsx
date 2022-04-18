import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const ProjectPosts = ({ projectPosts }) => {
  return (
    <Section title="All Projects">
      {projectPosts.map((projectPosts) => (
        <SummaryItem
          key={projectPosts.node.fields.slug}
          name={projectPosts.node.frontmatter.title}
          description={projectPosts.node.frontmatter.description}
          link={projectPosts.node.fields.slug}
          internal
        />
      ))}
    </Section>
  );
};

export default ProjectPosts;
