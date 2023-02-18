import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const skills = [
  {
    name: 'Production',
    description:
      '',
    subskills: [
      'Strong experience leading and coordinating teams from initial development through launch.',
      'Exceptional verbal, written, and interpersonal communication skills.',
      'Expertise in common Production methodologies (eg. Agile, Waterfall) as well as software (Monday, ShotGrid, Excel, Microsoft Project, Confluence, and in-house software).',
      'Proven experience in a production role where I have supported cross-functional teams in the creation and delivery of sophisticated projects.',
      'Excellent organizational & prioritization skills, attention to detail, process knowledge and ability to multi-task.'
    ],
  },
  {
    name: 'Design',
    description: '',      
    subskills: [
      'Able to take feedback, distilling messages into actionable items that move designs and content in the desired direction.',
      'Strong understanding of environmental design and how it integrates with gameplay moments.',
      'Maintaining alignment with other leads both within and outside the design department.',
      'Experience of being the champion for a product including giving presentations to press and at conferences & events.',
      'Understanding of psychological mechanisms that keep players engaged.',
      'Strong knowledge of all game design disciplines like system design, game economies etc.',
      'Intense creativity, a passion to innovate, and a drive to go beyond what is directly asked.',
      'Demonstrated success designing and creating compelling gameplay.',
      'Strong knowledge of prototyping & playtesting best practices.',
      'Academic knowledge, focusing on the study of game design & level design with attention to narrative impacts through design choices.'
    ]
  },
  // {
  //   name: 'Software',
  //   description: '', 
  //   softwareskills: [
  //     'sjdbas', 'asjdhba',
  //     'asjdhba', 'asjdhba',
  // ]
  // },
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
