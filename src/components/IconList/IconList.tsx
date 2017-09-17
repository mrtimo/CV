import * as React from 'react';
import {
  LinkedInIcon,
  GitHubIcon,
  EmailIcon,
  DownloadIcon
} from '../utils/Icons/Icons';
import Link from '../Link/Link';

const styles = require('./IconList.module.scss');

const IconList = () => (
  <ul>
    <li className={styles.listItem}>
      <Link
        customClass={styles.listLink}
        href={'https://www.linkedin.com/in/reecelucas/'}
        ariaLabel="Visit my LinkedIn profile"
        newTab
      >
        <LinkedInIcon />
      </Link>
    </li>
    <li className={styles.listItem}>
      <Link
        customClass={styles.listLink}
        href={'https://github.com/reecelucas'}
        ariaLabel="Visit my GitHub profile"
        newTab
      >
        <GitHubIcon />
      </Link>
    </li>
    <li className={styles.listItem}>
      <Link
        customClass={styles.listLink}
        href={'mailto:reecelucas@sky.com'}
        ariaLabel="Email me at reecelucas@sky.com"
      >
        <EmailIcon />
      </Link>
    </li>
    <li className={styles.listItem}>
      <Link
        customClass={styles.listLink}
        href={'/reece-lucas-cv.pdf'}
        ariaLabel="Download CV as PDF"
      >
        <DownloadIcon />
      </Link>
    </li>
  </ul>
);

export default IconList;
