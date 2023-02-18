import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-darkblue pb-1',
  description: 'text-md text-darkblue font-normal',
};

const SummaryItem = ({ name, description, link = false, internal = false, subskills = [], softwareskills = [] }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'underline hover:text-midblue transition duration-150 ease-in-out' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description}>
        {description}
      </p>

      <ul className="ml-4 list-disc text-md text-darkblue font-normal">
        {subskills.map(subskill => <li>{subskill}</li>)}
      </ul>

      <ul className="ml-4 list-disc columns: 2 text-md text-darkblue font-normal">
        {softwareskills.map(softwareskills => <li>{softwareskills}</li>)}
      </ul>
    </div>
  );
};

export default SummaryItem;
