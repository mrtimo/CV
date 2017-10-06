import * as React from 'react';
import Wrapper from '../utility/Wrapper/Wrapper';
import Spacer from '../utility/Spacer/Spacer';
import IconList from '../IconList/IconList';
import Anchor from '../utility/Anchor/Anchor';

const styles = require('./Footer.module.scss');

const Footer = () => (
  <footer className={styles.footer}>
    <Wrapper>
      <p>
        View the source for this CV at{' '}
        <Anchor href="https://github.com/reecelucas/CV" newTab>
          https://github.com/reecelucas/CV
        </Anchor>
      </p>
      <Spacer size="small">
        <IconList />
      </Spacer>
    </Wrapper>
  </footer>
);

export default Footer;
