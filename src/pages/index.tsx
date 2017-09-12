import * as React from 'react';

// import layout components
import Grid from '../components/utils/Grid/Grid';
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
    <Spacer size="huge">
      <Tab />
    </Spacer>

    <Spacer size="large">
      <Profile>
        Digital Product Designer. Fluent in HTML, CSS &amp; JS. Building Digital
        products for founders and startup teams.
      </Profile>
    </Spacer>

    <Spacer size="huge">
      <Grid columnCount={2} breakpoint="medium">
        <div>
          Ei per eius integre, mei putent facilis noluisse et. Soleat cotidieque
          no his. Mei sumo voluptua definiebas id, no iudico pertinacia vim. Ei
          per eius integre, mei putent facilis noluisse et. Soleat cotidieque no
          his. Mei sumo voluptua definiebas id, no iudico pertinacia vim.
        </div>
        <div>
          Ei per eius integre, mei putent facilis noluisse et. Soleat cotidieque
          no his. Mei sumo voluptua definiebas id, no iudico pertinacia vim. Ei
          per eius integre, mei putent facilis noluisse et. Soleat cotidieque no
          his. Mei sumo voluptua definiebas id, no iudico pertinacia vim.
        </div>
      </Grid>
    </Spacer>

    <Spacer>
      <SectionTitle number={1}>Experience</SectionTitle>
    </Spacer>
  </Wrapper>
);

export default IndexPage;
