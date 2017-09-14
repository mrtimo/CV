import * as React from 'react';

const styles = require('./Link.module.scss');

interface LinkProps {
  href: string;
  title: string;
  children: any;
  newTab?: boolean;
}

const Link = ({ href, newTab, title, children }: LinkProps) => (
  <a
    className={styles.link}
    href={href}
    title={title}
    target={newTab ? '_blank' : null}
    // https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
    rel={newTab ? 'noopener noreferrer' : null}
  >
    {children}
  </a>
);

export default Link;
