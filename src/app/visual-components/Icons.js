// @flow
import * as React from 'react';
import ClassNames from 'classnames';
import * as SVGIcons from './svg-icons';

import styles from './icon.css';

export const ICON_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XLG: 'xlg'
};

type IconProps = {
  name: $Keys<typeof SVGIcons>,
  size?: $Values<typeof ICON_SIZES>,
  align?: 'default' | 'top' | 'bottom' | 'left',
  alignSize?: 0 | 2 | 3,
  className?: string
};

Icon.defaultProps = {
  size: ICON_SIZES.MD,
  className: '',
  align: 'default',
  alignSize: 0
};

export default function Icon(props: IconProps) {
  const { name, size, className, align, alignSize, ...elementProps } = props;
  const classes = ClassNames(
    className,
    styles.icon,
    styles[`icon--size-${size}`],
    styles[`icon--align-${align}-${alignSize}`]
  );

  return (
    <span {...elementProps} className={classes}>
      {SVGIcons[name]}
    </span>
  );
}

export function Logo() {
  return (<div />);
}

export const HTML_ICON = {
};
