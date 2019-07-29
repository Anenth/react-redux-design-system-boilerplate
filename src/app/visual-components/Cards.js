// @flow

import * as React from 'react';
import ClassNames from 'classnames';
import styles from './cards.css';

export const CARD_STYLES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary' // gray
};

type CardProps = {
  children: React.Node,
  center?: boolean,
  style?: $Values<typeof CARD_STYLES>
};

Card.defaultProps = {
  center: false,
  style: CARD_STYLES.PRIMARY
};

export default function Card(props: CardProps) {
  const { children, center, style = CARD_STYLES.PRIMARY } = props;
  const classes = ClassNames(styles.card, styles[`card--style-${style}`], {
    [styles['card--center']]: center
  });

  return <div className={classes}>{children}</div>;
}

