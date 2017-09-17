import * as React from 'react';

const styles = require('./List.module.scss');

interface ListProps {
  items: string[];
}

const List = ({ items }: ListProps) => (
  <ul>
    {items.map((item, i) => (
      <li key={i} className={styles.listItem}>
        {item}
      </li>
    ))}
  </ul>
);

export default List;
