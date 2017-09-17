import * as React from 'react';
import Wrapper from '../utils/Wrapper/Wrapper';
import Spacer from '../utils/Spacer/Spacer';
import IconList from '../IconList/IconList';
import Link from '../Link/Link';

const styles = require('./Footer.module.scss');

const Footer = () => (
  <footer className={styles.footer}>
    <Wrapper>
      <p>
        View the source for this CV at{' '}
        <Link href="https://github.com/reecelucas/CV" newTab>
          https://github.com/reecelucas/CV
        </Link>
      </p>
      <Spacer size="small">
        <IconList />
      </Spacer>
    </Wrapper>
  </footer>
);

export default Footer;
