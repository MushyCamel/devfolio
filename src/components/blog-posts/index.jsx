import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const blogPosts = ({ posts }) => {
  return (
    <Section title="All Projects and Posts">
      {posts.map((post) => (
        <SummaryItem
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          link={post.node.fields.slug}
          internal 
        />
      ))}
    </Section>
  );
};

export default blogPosts;
