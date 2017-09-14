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

const Spacer = ({ children, size }: SpacerProps) => (
  <div className={styles[classMap[size]] || styles.spacer}>{children}</div>
);

export default Spacer;
