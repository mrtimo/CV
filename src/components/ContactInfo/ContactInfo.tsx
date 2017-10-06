import * as React from 'react';
import Anchor from '../utility/Anchor/Anchor';
import { ContactInfoProps } from '../../types';

const styles = require('./ContactInfo.module.scss');

const ContactInfo = ({ items }: ContactInfoProps) => (
  <div>
    {items.map(({ label, text, link }, i) => (
      <dl key={i} className={styles.list}>
        <dt className={styles.label}>{label}:</dt>
        <dd>
          <Anchor
            href={link.href}
            title={link.title}
            newTab={link.newTab || false}
          >
            {text}
          </Anchor>
        </dd>
      </dl>
    ))}
  </div>
);

export default ContactInfo;
