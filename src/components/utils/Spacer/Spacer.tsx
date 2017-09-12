import * as React from 'react';

const styles = require('./Spacer.module.scss');

interface SpacerProps {
  children?: any;
  size?: string;
}

interface classMap {
  [key: string]: string;
}

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
