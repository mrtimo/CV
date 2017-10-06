import * as React from 'react';
import {
  LinkedInIcon,
  GitHubIcon,
  EmailIcon,
  DownloadIcon
} from '../utility/Icons/Icons';
import Anchor from '../utility/Anchor/Anchor';

const styles = require('./IconList.module.scss');

const IconList = () => (
  <ul>
    <li className={styles.listItem}>
      <Anchor
        customClass={styles.listLink}
        href={'https://www.linkedin.com/in/reecelucas/'}
        ariaLabel="Visit my LinkedIn profile"
        newTab
      >
        <LinkedInIcon />
      </Anchor>
    </li>
    <li className={styles.listItem}>
      <Anchor
        customClass={styles.listLink}
        href={'https://github.com/reecelucas'}
        ariaLabel="Visit my GitHub profile"
        newTab
      >
        <GitHubIcon />
      </Anchor>
    </li>
    <li className={styles.listItem}>
      <Anchor
        customClass={styles.listLink}
        href={'mailto:reecelucas@sky.com'}
        ariaLabel="Email me at reecelucas@sky.com"
      >
        <EmailIcon />
      </Anchor>
    </li>
    <li className={styles.listItem}>
      <Anchor
        customClass={styles.listLink}
        href={'/reece-lucas-cv.pdf'}
        ariaLabel="Download CV as PDF"
      >
        <DownloadIcon />
      </Anchor>
    </li>
  </ul>
);

export default IconList;
