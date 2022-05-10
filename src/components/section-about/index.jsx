import React from 'react';

import Section from '../section';
import Video from '../video/video';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6">
        <p>{about}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;
