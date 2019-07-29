// @flow

import * as React from 'react';
import ClassNames from 'classnames';
import styles from './buttons.css';
import { LoadingSpin } from './Loading';
import Tooltip from './Tooltip';

export const BUTTON_STYLES = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  PRIMARY_DARK: 'primary-dark',
  SECONDARY: 'secondary',
  LINK: 'link',
  LINK_SECONDARY: 'link-secondary',
  RESET: 'reset',
  DANGER: 'danger',
};

export const BUTTON_SIZE = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
};

type ButtonProps = {
  children: React.Node,
  style?: $Values<typeof BUTTON_STYLES>,
  size?: $Values<typeof BUTTON_SIZE>,
  block?: boolean,
  isLoading?: boolean,
  disabled?: boolean,
  active?: boolean,
  disabledMessage?: string,
  className?: string,
};

Button.defaultProps = {
  style: BUTTON_STYLES.SECONDARY,
  size: BUTTON_SIZE.MD,
  block: false,
  isLoading: false,
  disabled: false,
  active: true,
  disabledMessage: '',
  className: '',
};

export default function Button(props: ButtonProps) {
  const {
    children,
    style = BUTTON_STYLES.DEFAULT,
    size = BUTTON_SIZE.MD,
    block,
    isLoading,
    disabled,
    active,
    disabledMessage,
    className,
    ...elementProps
  } = props;
  const classes = ClassNames(
    styles.button,
    className,
    styles[`button--style-${style}`],
    styles[`button--style-${style}`],
    styles[`button--style-${style}--${size}`],
    styles[`button--size-${size}`],
    {
      [styles['button--block']]: block,
      [styles[`button--style-${style}--active`]]: active,
      [styles['button--loading']]: isLoading,
    },
  );

  return (
    <Tooltip message={disabled ? disabledMessage : ''}>
      <button
        disabled={isLoading || disabled}
        {...elementProps}
        className={classes}
      >
        {children}
        {isLoading && (
          <div className={styles.button__loading}>
            <LoadingSpin />
          </div>
        )}
      </button>
    </Tooltip>
  );
}

export const BUTTON_CIRCLE_STYLES = {
  WHITE: 'white',
  SECONDARY: 'secondary',
  DEFAULT: 'default',
  SUCCESS: 'success',
};

export const BUTTON_CIRCLE_SIZES = {
  N: 'n',
  MD: 'md',
  LG: 'lg',
};

type ButtonCircleProps = {
  children: React.Node,
  style?: $Values<typeof BUTTON_CIRCLE_STYLES>,
  layer?: 0 | 1,
  size?: $Values<typeof BUTTON_CIRCLE_SIZES>,
  active?: boolean,
};

ButtonCircle.defaultProps = {
  style: BUTTON_CIRCLE_STYLES.DEFAULT,
  layer: 0,
  size: BUTTON_CIRCLE_SIZES.N,
  active: false,
};

export function ButtonCircle(props: ButtonCircleProps) {
  const { children, style, layer, active, size, ...elementProps } = props;
  const classes = ClassNames(
    styles['button-circle'],
    styles[`button-circle--layer-${layer}`],
    styles[`button-circle--style-${style}`],
    styles[`button-circle--size-${size}`],
    { [styles[`button-circle--active`]]: active },
  );

  return (
    <button className={classes} {...elementProps}>
      {children}
    </button>
  );
}

export const BUTTON_ICON_STYLES = {
  DEFAULT: 'default',
  SECONDARY: 'secondary',
};

export const BUTTON_ICONS_SIZES = {
  N: 'n',
  MD: 'md',
};

type ButtonIconProps = {
  children: React.Node,
  style?: $Values<typeof BUTTON_ICON_STYLES>,
  size?: $Values<typeof BUTTON_ICONS_SIZES>,
  active?: boolean,
  disabled?: boolean,
  title: string | React.Node,
  disabledTitle?: string,
  className?: string,
  tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right',
};

ButtonIcon.defaultProps = {
  style: BUTTON_ICON_STYLES.DEFAULT,
  size: BUTTON_ICONS_SIZES.N,
  active: false,
  disabled: false,
  disabledTitle: 'disabled',
  className: '',
  tooltipPlacement: 'top',
};

export function ButtonIcon(props: ButtonIconProps) {
  const {
    children,
    style,
    active,
    size,
    title,
    disabledTitle = 'disabled',
    className,
    tooltipPlacement,
    ...elementProps
  } = props;
  const classes = ClassNames(
    className,
    styles['button-icon'],
    styles[`button-icon--style-${style}`],
    styles[`button-icon--size-${size}`],
    { [styles[`button-icon--active`]]: active },
  );

  if (title.length === 0) {
    return (
      <button className={classes} {...elementProps}>
        {children}
      </button>
    );
  }

  return (
    <Tooltip
      message={elementProps.disabled ? disabledTitle : title}
      placement={tooltipPlacement}
    >
      <button className={classes} {...elementProps}>
        {children}
      </button>
    </Tooltip>
  );
}

export const TEXT_BUTTON_STYLES = {
  DEFAULT: 'default',
};

type TextButtonProps = {
  children: React.Node,
  style?: $Values<typeof TEXT_BUTTON_STYLES>,
  size?: $Values<typeof BUTTON_SIZE>,
  isLoading?: boolean,
  disabled?: boolean,
  disabledMessage?: string,
};

TextButton.defaultProps = {
  style: BUTTON_STYLES.DEFAULT,
  size: BUTTON_SIZE.MD,
  isLoading: false,
  disabled: false,
  disabledMessage: '',
};

export function TextButton(props: TextButtonProps) {
  const {
    children,
    style = BUTTON_STYLES.DEFAULT,
    size = BUTTON_SIZE.MD,
    isLoading,
    disabled,
    disabledMessage,
    ...elementProps
  } = props;
  const classes = ClassNames(
    styles['text-button'],
    styles[`text-button--style-${style}`],
    styles[`text-button--style-${style}--${size}`],
    styles[`text-button--size-${size}`],
    {
      [styles['text-button--loading']]: isLoading,
    },
  );

  return (
    <Tooltip message={disabled ? disabledMessage : ''}>
      <button
        disabled={isLoading || disabled}
        {...elementProps}
        className={classes}
      >
        {children}
        {isLoading && (
          <div className={styles.button__loading}>
            <LoadingSpin />
          </div>
        )}
      </button>
    </Tooltip>
  );
}

