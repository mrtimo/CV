import * as React from 'react';

const styles = require('./Grid.module.scss');

interface GridProps {
  children?: any;
  columnCount?: number;
  breakpoint?: string;
}

interface breakpointClassMap {
  [key: string]: string;
}

const breakpointClassMap: breakpointClassMap = {
  small: 'grid--@small',
  medium: 'grid--@medium',
  large: 'grid--@large'
};

const GridItem = ({ children }: any) => (
  <div className={styles.gridItem}>{children}</div>
);

const Grid = ({ children, columnCount, breakpoint }: GridProps) => {
  const columnModifier =
    columnCount > 1 ? `${styles[`grid--${columnCount}`]}` : '';
  const breakpointModifier = styles[breakpointClassMap[breakpoint]] || '';
  const className = `${styles.grid} ${columnModifier} ${breakpointModifier}`;

  return (
    <div className={className}>
      {children.map((child: any, i: number) => (
        <GridItem key={i}>{child}</GridItem>
      ))}
    </div>
  );
};

export default Grid;
