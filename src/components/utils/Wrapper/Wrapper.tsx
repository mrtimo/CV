import * as React from 'react';

const styles = require('./Wrapper.module.scss');

interface WrapperProps {
  children?: any;
}

const Wrapper = ({ children }: WrapperProps) => (
  <div className={styles.wrapper}>{children}</div>
);

export default Wrapper;
