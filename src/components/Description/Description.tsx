import * as React from 'react';

const styles = require('./Description.module.scss');

interface DescriptionProps {
  content: {
    title: string;
    date: string;
    emphasisText: string;
    text?: string;
  };
}

const Description = ({ content }: DescriptionProps) => (
  <div>
    <div className={styles.header}>
      <h4 className={styles.title}>{content.title}</h4>
      <span className={styles.date}>{content.date}</span>
    </div>

    <p>
      <strong className={styles.emphasis}>{content.emphasisText}</strong>.{' '}
      {content.text}
    </p>
  </div>
);

export default Description;
