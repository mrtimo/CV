import * as React from 'react';
import { DescriptionProps } from '../../types';

const styles = require('./Description.module.scss');

const Description = ({ content }: DescriptionProps) => (
  <div>
    <div className={styles.header}>
      <h4 className={styles.title}>{content.title}</h4>
      <span className={styles.subTitle}>{content.subTitle}</span>
    </div>

    <p>
      <strong className={styles.emphasis}>{content.emphasisText}</strong>.{' '}
      {content.text}
    </p>
  </div>
);

export default Description;
