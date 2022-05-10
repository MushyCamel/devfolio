import React from 'react';

import Section from '../section';
import Video from '../video/video';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6">
        <p>{about}</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ipTYCTXMD1U?autoplay=1&mute=1" title="Mark Tempini Showreel 2021" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </Section>
  );
};

export default SectionAbout;
