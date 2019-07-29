// @flow

import * as React from 'react';
import ClassNames from 'classnames';
import styles from './grid.css';

type SpaceProps = {
  children?: React.Node | null,
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 35 | 60,
  vertical?: boolean,
};

Space.defaultProps = {
  size: 4,
  vertical: false,
  children: null,
};

export default function Space(props: SpaceProps) {
  const { size, vertical, children } = props;

  if (children) {
    const classes = ClassNames(styles[`space--around-${size}px`]);

    return <div className={classes}>{children}</div>;
  }

  const classes = ClassNames(styles.space, styles[`space--${size}px`], {
    [styles['space--vertical']]: vertical,
  });

  return <div className={classes} />;
}

type RowProps = {
  children: React.Node,
  vcenter?: boolean,
  center?: boolean,
  fullHeight?: boolean,
  inline?: boolean,
};

Row.defaultProps = {
  vcenter: false,
  center: false,
  fullHeight: false,
  inline: false,
};

export function Row(props: RowProps) {
  const {
    vcenter,
    center,
    children,
    fullHeight,
    inline,
    ...elementProps
  } = props;
  const classes = ClassNames(styles.row, {
    [styles['row--vcenter']]: vcenter,
    [styles['row--inline']]: inline,
    [styles['row--center']]: center,
    [styles['row--height-full']]: fullHeight,
  });

  return (
    <div className={classes} {...elementProps}>
      {children}
    </div>
  );
}

type ColProps = {
  children: React.Node,
  size?: null | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  rightAlighed?: boolean,
};

Col.defaultProps = {
  size: 6,
  rightAlighed: false,
};

export function Col(props: ColProps) {
  const { size, rightAlighed, children } = props;
  const classes = ClassNames(styles.col, {
    [styles['col--align-right']]: rightAlighed,
    [styles[`col--${size}`]]: size,
  });

  return <div className={classes}>{children}</div>;
}

type GridProps = {
  children: React.Node,
};

export function Grid(props: GridProps) {
  const { children } = props;
  const classes = ClassNames(styles.grid);

  return <div className={classes}>{children}</div>;
}

type PositionProps = {
  children: React.Node,
  align?: 'center' | 'top',
};

Position.defaultProps = {
  align: 'center',
};

export function Position(props: PositionProps) {
  const { children, align = 'center' } = props;
  const classes = ClassNames(styles.position, styles[`position--${align}`]);

  return <div className={classes}>{children}</div>;
}

type PreventMarginCollapseProps = {
  children: React.Node,
};

export function PreventMarginCollapse(props: PreventMarginCollapseProps) {
  return (
    <div className={styles['u-prevent-margin-collapse']}>{props.children}</div>
  );
}
