import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';
import Video from '../video/video';

const SectionSkills = ({ skills }) => {
  return (
    <Section title="Skills">
      <video control>
        <source src='Showreal_2021.mp4' type='video/mp4'></source>
      </video>
      {skills.map((skill) => (
        <SummaryItem
          key={skill.name}
          name={skill.name}
          description={skill.description}
        />
      ))}
    </Section>
  );
};

export default SectionSkills;
