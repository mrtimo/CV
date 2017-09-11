import * as React from 'react';
import { SpacerProps, classMap } from './types';

const styles = require('./Spacer.module.scss');

const classMap: classMap = {
  tiny: 'spacerTiny',
  small: 'spacerSmall',
  large: 'spacerLarge',
  huge: 'spacerHuge'
};

const Spacer = ({ children, size = null }: SpacerProps) => (
  <div className={size ? styles[classMap[size]] : styles.spacer}>
    {children}
  </div>
);

export default Spacer;
