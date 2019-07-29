// @flow

import * as React from 'react';
import ClassNames from 'classnames';
import moment from 'moment';
import Color, { COLOR_SHADES } from './Color';
import Space from './Grid';
import styles from './text.css';
import Tooltip from './Tooltip';

export const TEXT_SIZE = {
  SIZE_1: '1', // 28 - 34
  SIZE_2: '2', // 18 - 34
  SIZE_3: '3', // 16 - 24
  SIZE_4: '4', // 14 - 20
  SIZE_5: '5', // 12 - 14
  SIZE_6: '6', // 10 - 14
};

export const TEXT_BOLDNESS = {
  BOLD: 'bold',
  SEMI_BOLD: 'semibold',
  NORMAL: 'normal',
};

type TextProps = {
  children: React.Node,
  primaryStyle?: boolean,
  size?: $Values<typeof TEXT_SIZE>,
  boldness?: $Values<typeof TEXT_BOLDNESS>,
  color?: $Values<typeof COLOR_SHADES>,
  className?: string,
  block?: boolean,
  muted?: boolean,
  ellipsis?: boolean,
  center?: boolean,
  strickOff?: boolean,
};

export default function Text(props: TextProps) {
  let { color } = props;
  const {
    children,
    size,
    boldness,
    muted,
    block,
    className,
    primaryStyle,
    center,
    ellipsis,
    strickOff,
    ...elementProps
  } = props;
  if (muted) color = COLOR_SHADES.LIGHT;

  const classes = ClassNames(
    className,
    styles.text,
    styles[`text--size-${size}`],
    styles[`text--boldness-${boldness}`],
    {
      [styles['text--display-block']]: block,
      [styles['text--primary-style']]: primaryStyle,
      [styles['text--ellipsis']]: ellipsis,
      [styles['text--align-center']]: center,
      [styles['text--strick-off']]: strickOff,
    },
  );

  return (
    <Color shade={color} className={classes} {...elementProps}>
      {children}
    </Color>
  );
}

Text.defaultProps = {
  size: TEXT_SIZE.SIZE_4,
  boldness: TEXT_BOLDNESS.NORMAL,
  color: COLOR_SHADES.DARK,
  className: '',
  block: false,
  muted: false,
  primaryStyle: false,
  ellipsis: false,
  center: false,
  strickOff: false,
};

type TitleProps = {
  children: React.Node,
  primary: boolean,
};

export function Title(props: TitleProps) {
  const { children, primary } = props;
  return (
    <Text
      size={TEXT_SIZE.SIZE_1}
      boldness={TEXT_BOLDNESS.BOLD}
      block
      color={primary ? COLOR_SHADES.PRIMARY : COLOR_SHADES.DARKER}
    >
      {children}
    </Text>
  );
}

type SubTitleProps = {
  children: React.Node,
};

export function SubTitle(props: SubTitleProps) {
  const { children } = props;

  const classes = ClassNames(styles['sub-title']);

  return (
    <Text
      block
      className={classes}
      size={TEXT_SIZE.SIZE_5}
      color={COLOR_SHADES.LIGHT}
      boldness={TEXT_BOLDNESS.BOLD}
    >
      {children}
    </Text>
  );
}

type FormLabelProps = {
  children: React.Node,
};

export function FormLabel(props: FormLabelProps) {
  const { children } = props;

  return (
    <div>
      <Text color={COLOR_SHADES.DARKER} boldness={TEXT_BOLDNESS.SEMI_BOLD}>
        {children}
      </Text>
      <Space vertical size={1} />
    </div>
  );
}

type TimeAgoProps = {
  date: Date | string,
};

export function TimeAgo(props: TimeAgoProps) {
  return (
    <Tooltip message={moment(props.date).format('DD MMM')}>
      {moment(props.date).fromNow()}
    </Tooltip>
  );
}
