import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6 dark:bg-slate-800',
  name: 'font-semibold dark:text-white text-gray-900 pb-1',
  description: 'text-md dark:text-slate-400 text-gray-700 font-light',
};

const SummaryItem = ({ name, description, link = false, internal = false }) => {
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
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default SummaryItem;
