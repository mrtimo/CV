import * as React from 'react';
import Wrapper from '../components/layout/Wrapper/Wrapper';
import Spacer from '../components/layout/Spacer/Spacer';

/**
 * Import global styles:
 * Typescript treats imports differently, and importing CSS modules
 * like we do in JS results in a 'Cannot find module' error.
 */
require('../styles/global.scss');

const IndexPage = () => (
  <Wrapper>
    <Spacer size="huge">
      <h1>Test index page</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Spacer>
  </Wrapper>
);

export default IndexPage;
