import * as React from 'react';

const styles = require('./SectionTitle.module.scss');

interface SectionTitleProps {
  children?: string;
  number?: number;
}

const SectionTitle = ({ children, number }: SectionTitleProps) => (
  <h3 className={styles.title}>
    {number && (
      <span className={styles.number} aria-hidden="true">
        {number < 10 ? `0${number}.` : `${number}.`}
      </span>
    )}
    <span className={styles.text}>{children}</span>
  </h3>
);

export default SectionTitle;
