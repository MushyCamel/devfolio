import React from 'react';

import Section from '../section';
import Video from '../video/video';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6">
        <p>{about}</p>
      </div>
      <video controls>
          <source media='ReboundTrailer.mp4' type='video/mp4'></source>
      </video>
    </Section>
  );
};

export default SectionAbout;
