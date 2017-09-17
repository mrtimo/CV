import * as React from 'react';
import Link from '../Link/Link';

const styles = require('./ContactInfo.module.scss');

interface ContactInfoProps {
  items: [
    {
      label: string;
      text: string;
      link: {
        href: string;
        title: string;
        newTab?: boolean;
      };
    }
  ];
}

const ContactInfo = ({ items }: ContactInfoProps) => (
  <div>
    {items.map(({ label, text, link }, i) => (
      <dl key={i} className={styles.list}>
        <dt className={styles.label}>{label}:</dt>
        <dd>
          <Link
            href={link.href}
            title={link.title}
            newTab={link.newTab || false}
          >
            {text}
          </Link>
        </dd>
      </dl>
    ))}
  </div>
);

export default ContactInfo;
