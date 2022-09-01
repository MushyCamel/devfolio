import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import profileImg from '../../images/Me.jpg';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-150',
  image: 'rounded-full transform transition-all duration-150 hover:scale-110',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20 ',
  name: 'text-5xl text-darkblue font-bold leading-tight hover:underline hover:text-midblue transition duration-150 ease-in-out',
  description: 'text-darkblue',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none p-1 mx-1 rounded-md bg-transparent',
  link:
    'inline-block p-2 font-semibold text-xs rounded text-darkblue hover:bg-midblue hover:text-palewhite hover:underline transition duration-150 ease-in-out',
};



const Header = ({ metadata = {}, noBlog = false }) => {
  const twitter = get(metadata, 'author', false);
  const artstation = get(metadata, 'artstation', false);
  const linkedin = get(metadata, 'linkedin', false);


  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <Link to="/">
          <img className={classes.image} src={profileImg} alt={metadata.name} />
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <p className={classes.description}>{metadata.description}</p>
        <ul className={classes.list}>
        {!noBlog && (
            <li className={classes.item}>
              <Link className={classes.link} to="/blog">
                Projects
              </Link>
            </li>
          )}
          {artstation && (
            <li className={classes.item}>
              <a className={classes.link} href={artstation}>
                ArtStation
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                LinkedIn
              </a>
            </li>
          )}
          {twitter && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={`https://twitter.com/${twitter}`}
              >
                Twitter
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
