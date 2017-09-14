import * as React from 'react';

const styles = require('./SectionTitle.module.scss');

interface SectionTitleProps {
  children?: string;
  number?: number;
}

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
