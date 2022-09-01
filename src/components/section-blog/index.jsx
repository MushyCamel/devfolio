
import { Link } from 'gatsby';
import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const Sectionblog = ({ posts }) => {
  return (
    <Section title="Latest Posts">
      {posts.map((post) => (
        <SummaryItem
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          link={post.node.fields.slug}
          internal
        />
      ))}
      {posts.length >= 5 && (
        <Link className="text-gray-500 text-sm hover:text-black" to="/project">
          View all posts &rarr;
        </Link>
      )}
    </Section>
  );
};

export default Sectionblog;

