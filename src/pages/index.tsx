import * as React from 'react';

// import layout components
import Wrapper from '../components/utils/Wrapper/Wrapper';
import Spacer from '../components/utils/Spacer/Spacer';

// import UI components
import Tab from '../components/Tab/Tab';
import Profile from '../components/Profile/Profile';
import SectionTitle from '../components/SectionTitle/SectionTitle';

/**
 * Import global styles:
 * Typescript treats imports differently, and importing CSS modules
 * like we do in JS results in a 'Cannot find module' error.
 */
require('../styles/global.scss');

const IndexPage = () => (
  <Wrapper>
    <Spacer size="large">
      <Tab />
    </Spacer>

    <Spacer size="huge">
      <Profile>
        Digital Product Designer. Fluent in HTML, CSS &amp; JS. Building Digital
        products for founders and startup teams.
      </Profile>
    </Spacer>

    <Spacer>
      <SectionTitle number={1}>Experience</SectionTitle>
    </Spacer>
  </Wrapper>
);

export default IndexPage;
