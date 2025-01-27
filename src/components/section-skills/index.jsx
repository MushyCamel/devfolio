import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const skills = [
  {
    name: 'Production',
    description:
      '',
    subskills: [
      'Proven experience leading and coordinating teams from initial development through launch.',
      'Skilled in translating complex project requirements into actionable roadmaps, ensuring alignment across design, engineering, and QA teams.',
      'Expertise in common Production methodologies (eg. Agile, Waterfall, Scrum) as well as software (Monday, ShotGrid, Excel, Jira, Airtable, Confluence, and in-house software).',
      'Proven experience in supporting cross-functional teams in the creation and delivery of sophisticated projects.' ,
      'Reduced production bottlenecks by implementing new workflows, resulting in faster deliverables (e.g., reducing lead times from 1 day to 4 weeks).',
      'Strong communicator adept at facilitating cross-discipline collaboration and managing stakeholder expectations through clear, concise updates.', 
      'Expertise in managing multiple priorities simultaneously while maintaining attention to detail and fostering a positive, efficient work environment. ', 
    ],
  },
 /* {
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
  }, */
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
