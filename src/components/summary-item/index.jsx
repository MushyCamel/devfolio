import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6 background-color:#7f1d1d',
  name: 'font-semibold text-slate-900 pb-1',
  description: 'text-md text-gray-800 font-light',
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
          link ? 'hover:underline-offset-1 hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default SummaryItem;
