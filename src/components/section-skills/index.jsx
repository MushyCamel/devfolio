import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const skills = [
  {
    name: 'Production',
    description:
      '- Strong experience leading and coordinating teams from initial development through launch.\n- Exceptional verbal, written, and interpersonal communication skills.\n- Expertise in common Production methodologies (eg. Agile, Waterfall) as well as software (Monday, ShotGrid, Excel, Microsoft Project, Confluence, and in-house software).\n- Proven experience in a production role where I have supported cross-functional teams in the creation and delivery of sophisticated projects.\n- Excellent organizational & prioritization skills, attention to detail, process knowledge and ability to multi-task.',
    subskills: [
      'I am smart',
      'And funny'
    ]
  },
  {
    name: 'Design',
    description: 'Able to take feedback, distilling messages into actionable items that move designs and content in the desired direction.\n- Strong understanding of environmental design and how it integrates with gameplay moments\n- Maintaining alignment with other leads both within and outside the design department.\n- Experience of being the champion for a product including giving presentations to press and at conferences & events\n- Understanding of psychological mechanisms that keep players engaged\n- Strong knowledge of all game design disciplines like system design, game economies etc\n- Self-motivated and fast learning\n- Intense creativity, a passion to innovate, and a drive to go beyond what is directly asked\n- Demonstrated success designing and creating compelling gameplay\n- Strong knowledge of prototyping & playtesting best practices\n- Academic knowledge, focusing on the study of game design & level design with attention to narrative impacts through design choices.',      
    subskills: []
  },
  {
    name: 'Misc.',
    description:
      'Creating Custom Rules and "Homebrew" for TTRPGs such as Dungeons and Dragons, film studies, ',
  }
]

const SectionSkills = () => {
  return (
    <Section title="Skills">
      {skills.map((skill) => (
        <SummaryItem
          key={skill.name}
          name={skill.name}
          description={skill.description}
          subskills={skill.subskills}
        />
      ))}
    </Section>
  );
};

export default SectionSkills;
