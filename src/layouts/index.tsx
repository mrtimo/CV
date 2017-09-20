import * as React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';

/**
 * Import global styles:
 * Typescript treats imports differently, and importing CSS modules
 * like we do in JS results in a 'Cannot find module' error.
 */
require('../styles/global.scss');

interface TemplateWrapperProps {
  children: Function;
}

const TemplateWrapper = ({ children }: TemplateWrapperProps) => (
  <div>
    <Helmet
      title="Reece Lucas – CV"
      meta={[
        {
          name: 'description',
          content: 'Reece Lucas CV – Front End Developer based in London'
        },
        { name: 'apple-mobile-web-app-title', content: 'Reece Lucas CV' },
        { name: 'application-name', content: 'Reece Lucas CV' },
        {
          name: 'msapplication-config',
          content: '/favicons/browserconfig.xml'
        },
        { name: 'theme-color', content: '#426591' },
        { property: 'og:title', content: 'Reece Lucas CV' },
        {
          property: 'og:description',
          content: 'Reece Lucas CV – Front End Developer based in London'
        },
        { property: 'og:url', content: '[URL here]' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'og:site_name', content: 'Reece Lucas CV' }
      ]}
      link={[
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicons/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/favicon-32x32.png',
          sizes: '32x32'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/favicon-16x16.png',
          sizes: '16x16'
        },
        { rel: 'manifest', href: '/manifest.json' },
        {
          rel: 'mask-icon',
          href: '/favicons/safari-pinned-tab.svg',
          color: '#426591'
        },
        { rel: 'shortcut icon', href: '/favicons/favicon.ico' }
      ]}
    />
    {children()}
    <Footer />
  </div>
);

export default TemplateWrapper;
