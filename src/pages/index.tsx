import * as React from 'react';

// import layout components
import Grid from '../components/utils/Grid/Grid';
import Wrapper from '../components/utils/Wrapper/Wrapper';
import Spacer from '../components/utils/Spacer/Spacer';

// import UI components
import Tab from '../components/Tab/Tab';
import Profile from '../components/Profile/Profile';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Description from '../components/Description/Description';

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

    <Spacer size="huge">
      <Profile>
        I'm Reece Lucas. Front End Developer at Deloitte Digital. Fluent in the
        modern web stack. A sucker for scalable CSS architecture, performance
        optimisation and accessibility.
      </Profile>
    </Spacer>

    <Spacer size="huge">
      <ContactInfo
        items={[
          {
            label: 'Tel',
            text: '07445575975',
            link: {
              href: 'tel:07445575975',
              title: 'Call me on 07445575975'
            }
          },
          {
            label: 'Email',
            text: 'reecelucas@sky.com',
            link: {
              href: 'mailto:reecelucas@sky.com',
              title: 'Email me at reecelucas@sky.com'
            }
          },
          {
            label: 'LinkedIn',
            text: 'reecelucas',
            link: {
              href: 'https://www.linkedin.com/in/reecelucas/',
              title: 'Visit my LinkedIn Profile',
              newTab: true
            }
          },
          {
            label: 'GitHub',
            text: 'reecelucas',
            link: {
              href: 'https://github.com/reecelucas',
              title: 'Visit my GitHub Profile',
              newTab: true
            }
          }
        ]}
      />
    </Spacer>

    <Spacer size="huge">
      <Grid columnCount={2} breakpoint="medium">
        <div>
          <Spacer size="large">
            <SectionTitle number={1}>Experience</SectionTitle>
          </Spacer>
          <Spacer size="large">
            <Description
              content={{
                title: 'Consultant Developer',
                date: '06/17 – Present',
                emphasisText: 'Deloitte Digital',
                text:
                  'Worked as part of a multi-disciplinary team on a large multi-national E-commerce platform. Oversaw a comprehensive code audit and performance review and presented regularly to stakeholders. Planned a detailed approach for re-factor with a view to addressing issues with scalability, maintainability, accessibility and test coverage.'
              }}
            />
          </Spacer>
          <Spacer size="large">
            <Description
              content={{
                title: 'Lead Front End Developer',
                date: '11/14 – 05/17',
                emphasisText: 'Collective London',
                text:
                  'Led a small front-end team responsible for the development of builds that ranged from responsive micro-sites to large legacy projects. Utilised modern work-flows including Grunt/Gulp/Wepback, BEM/ITCSS (in SASS and PostCSS), and version control via Git. Worked according to agile methodologies within teams internally and client side. Collaborated with art directors, project managers and designers to encourage the adoption of design practices and work-flows that prioritized performance and accessibility.'
              }}
            />
          </Spacer>
          <Spacer size="large">
            <Description
              content={{
                title: 'UX Research & Design',
                date: '11/13 - 08/14',
                emphasisText: 'Meta',
                text:
                  'Conducted user research and designed UI changes to address usability ‘pain points’. Created functional prototypes for small-scale A/B testing. Worked in a fast-paced environment in diverse, agile teams. Like all startups, time constraints were tight and responsibilities were varied, requiring a  flexible approach and readiness to learn skills outside of the typical remit of a Front End Developer.'
              }}
            />
          </Spacer>
        </div>
        <div>
          <Spacer size="large">
            <SectionTitle number={2}>Core Skills</SectionTitle>
          </Spacer>
          <Spacer size="large">
            <p>
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries.
            </p>
          </Spacer>

          <Spacer size="large">
            <SectionTitle number={3}>Education</SectionTitle>
          </Spacer>
          <Description
            content={{
              title: 'Physiological Science – BSc.',
              date: 'First Class Honors',
              emphasisText: 'University of Bristol'
            }}
          />
        </div>
      </Grid>
    </Spacer>
  </Wrapper>
);

export default IndexPage;
