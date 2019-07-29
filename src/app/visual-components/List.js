// @flow

import * as React from 'react';
import ClassNames from 'classnames';
import { Row } from './Grid';
import { NavLink } from './Link';
import styles from './list.css';
import Text, { SubTitle, TEXT_BOLDNESS } from './Text';

type ListProps = {
  children: React.Node,
};

export default function List(props: ListProps) {
  const classes = ClassNames(styles.list);

  return (
    <div className={classes} {...props}>
      {props.children}
    </div>
  );
}

type ListItemProps = {
  children: React.Node,
  to?: string | null,
};

ListItem.defaultProps = {
  to: null,
};

export function ListItem(props: ListItemProps) {
  const classes = ClassNames(styles['list-item']);
  if (!props.to)
    return (
      <div className={classes} {...props}>
        {props.children}
      </div>
    );

  return (
    <NavLink to={props.to} className={classes} activeClassName={styles['list-item--active']} {...props}>
      {props.children}
    </NavLink>
  );
}

type ListItemContentProps = {
  children: React.Node,
};

export function ListItemContent(props: ListItemContentProps) {
  return (
    <Text block boldness={TEXT_BOLDNESS.SEMI_BOLD}>
      {props.children}
    </Text>
  );
}

type ListItemIconProps = {
  children: React.Node,
};

export function ListItemIcon(props: ListItemIconProps) {
  const classes = ClassNames(styles['list-item__icon']);

  return <div className={classes}>{props.children}</div>;
}

type ListItemHeaderProps = {
  children: React.Node,
};

export function ListItemHeader(props: ListItemHeaderProps) {
  const classes = ClassNames(styles['list-item__header']);

  return (
    <div className={classes} {...props}>
      <SubTitle>{props.children}</SubTitle>
    </div>
  );
}

type ListItemFooterProps = {
  children: React.Node,
};

export function ListItemFooter(props: ListItemFooterProps) {
  const classes = ClassNames(styles['list-item__footer']);

  return (
    <div className={classes} {...props}>
      <Row vcenter>{props.children}</Row>
    </div>
  );
}
