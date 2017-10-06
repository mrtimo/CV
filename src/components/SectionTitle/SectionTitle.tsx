import * as React from 'react';
import { SectionTitleProps } from '../../types';

const styles = require('./SectionTitle.module.scss');

const SectionTitle = ({ children, number }: SectionTitleProps) => (
  <h4 className={styles.title}>
    {number && (
      <span className={styles.number} aria-hidden="true">
        {number < 10 ? `0${number}.` : `${number}.`}
      </span>
    )}
    <span className={styles.text}>{children}</span>
  </h4>
);

export default SectionTitle;
