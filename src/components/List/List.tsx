import * as React from 'react';
import { ListProps } from '../../types';

const styles = require('./List.module.scss');

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
