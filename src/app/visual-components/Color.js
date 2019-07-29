// @flow

import * as React from 'react';
import ClassNames from 'classnames';
import styles from './color.css';

export const COLOR_SHADES = {
  DARK: 'dark',
  LIGHT: 'light',
  DARKER: 'darker',

  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  BLUE: 'blue',
  BLUE_LIGHT: 'blue-light',
  WARNING: 'warning',
  WHITE: 'white',
  DANGER: 'danger',
  SUCCESS: 'success',
};

type ColorProps = {
  children: React.Node,
  shade?: $Values<typeof COLOR_SHADES>,
  className?: string,
  inline?: boolean,
  disabled?: boolean,
  fillSolidIcon?: boolean,
};

export default function Color(props: ColorProps) {
  const { children, shade, inline, className, disabled, fillSolidIcon } = props;
  const classes = ClassNames(className, styles[`color--shade-${shade}`], {
    [styles['color--inline']]: inline,
    [styles['color--disabled']]: disabled,
    [styles[`color--fill-solid-icon--shade-${shade}`]]: fillSolidIcon,
  });

  return <span className={classes}>{children}</span>;
}

Color.defaultProps = {
  shade: COLOR_SHADES.DARK,
  className: '',
  inline: false,
  disabled: false,
  fillSolidIcon: false,
};
