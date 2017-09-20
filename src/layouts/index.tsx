import * as React from 'react';
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
    {children()}
    <Footer />
  </div>
);

export default TemplateWrapper;
