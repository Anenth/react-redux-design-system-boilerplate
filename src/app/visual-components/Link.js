// @flow

import * as React from 'react';
import ClassNames from 'classnames';
import { Link as RRLink, NavLink as RRNavLink } from 'react-router-dom';
import styles from './link.css';

type LinkProps = {
  children: any,
  to: string,
};

export default function Link(props: LinkProps) {
  const classes = ClassNames(styles.link);

  return <RRLink className={classes} {...props} />;
}

type NavLinkProps = {
  ...LinkProps,
  disabled?: boolean,
  className?: string,
};

NavLink.defaultProps = {
  className: '',
  disabled: false,
};

export function NavLink(props: NavLinkProps) {
  const { className = '', disabled, ...elementProps } = props;
  const classes = ClassNames(styles.link, className);

  if (disabled) {
    return <span className={classes} {...elementProps} />;
  }

  return (
    <RRNavLink
      className={classes}
      activeClassName={styles['link--active']}
      {...elementProps}
    />
  );
}

type SimpleLinkProps = {
  children: any,
};

export function SimpleLink(props: SimpleLinkProps) {
  const classes = ClassNames(styles['simple-link']);

  return (
    <a className={classes} {...props} rel="noopener noreferrer">
      {props.children}
    </a>
  );
}
