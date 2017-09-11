import * as React from 'react';
import { WrapperProps } from './types';

const styles = require('./Wrapper.module.scss');

const Wrapper = ({ children }: WrapperProps) => (
  <div className={styles.wrapper}>{children}</div>
);

export default Wrapper;
