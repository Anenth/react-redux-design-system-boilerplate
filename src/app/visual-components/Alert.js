// @flow
import * as React from 'react';
import classNames from 'classnames';
import { COLOR_SHADES } from './Color';
import { Col, Row } from './Grid';
import Icon, { ICON_SIZES } from './Icons';
import { LoadingUpload } from './Loading';
import Text from './Text';

import styles from './alert.css';

export const INFO_MESSAGE_STYLE = {
  INFO: 'info',
  DANGER: 'danger',
  WARNING: 'warning',
  SUCCESS: 'success'
};

const INFO_MESSAGE_ICON_COLOR = {
  [INFO_MESSAGE_STYLE.INFO]: COLOR_SHADES.BLUE,
  [INFO_MESSAGE_STYLE.DANGER]: COLOR_SHADES.DANGER,
  [INFO_MESSAGE_STYLE.WARNING]: COLOR_SHADES.WARNING,
  [INFO_MESSAGE_STYLE.SUCCESS]: COLOR_SHADES.SUCCESS
};

type InfoMessageProps = {
  children: React.Node,
  iconName: string,
  style: $Values<typeof INFO_MESSAGE_STYLE>
};

export default function InfoMessage(props: InfoMessageProps) {
  const { children, iconName, style } = props;
  const color = INFO_MESSAGE_ICON_COLOR[style];

  return (
    <div
      className={classNames(
        styles['info-message'],
        styles[`info-message--${style}`]
      )}
    >
      <Row>
        <Col size={null}>
          <div className={classNames(styles['info-message__icon'])}>
            <Text color={color}>
              <Icon name={iconName} size={ICON_SIZES.SM} />
            </Text>
          </div>
        </Col>
        <Col size={null}>
          <Text>{children}</Text>
        </Col>
      </Row>
    </div>
  );
}
