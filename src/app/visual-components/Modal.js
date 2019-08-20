// @flow

import * as React from 'react';
import ClassNames from 'classnames';
import { HotKeys } from 'react-hotkeys';
import { Modal as ModalLib } from 'react-overlays';
import { COLOR_SHADES } from './Color';
import ErrorBoundary from './Error';
import Space from './Grid';

import styles from './modal.css';
import Text, { TEXT_BOLDNESS, TEXT_SIZE } from './Text';

export const MODAL_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
};

type ModalProps = {
  children: React.Node,
  show: boolean,
  close: ?Function,
  size?: $Values<typeof MODAL_SIZES>,
};

const modalStyle = {
  position: 'fixed',
  zIndex: 40,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
};

export default function Modal(props: ModalProps) {
  const { show, close, children, size } = props;

  return (
    <ModalLib
      renderBackdrop={backdropProps => <div {...backdropProps} className={styles.backdrop} />}
      containerClassName={styles['modal--open']}
      show={show}
      style={modalStyle}
      onHide={close}
    >
      <ErrorBoundary>
        <div className={ClassNames(styles.modal__content, styles[`modal__content--size-${size}`])}>{children}</div>
      </ErrorBoundary>
    </ModalLib>
  );
}

Modal.defaultProps = {
  size: MODAL_SIZES.MD,
};

type ModalTitleProps = {
  children: React.Node,
};

export function ModalTitle(props: ModalTitleProps) {
  return (
    <div>
      <Text size={TEXT_SIZE.SIZE_2} boldness={TEXT_BOLDNESS.BOLD} color={COLOR_SHADES.DARKER} block>
        {props.children}
      </Text>
      <Space vertical />
    </div>
  );
}

type MediaModalProps = {
  children: React.Node,
  show: boolean,
  close: Function,
};

export function MediaModal(props: MediaModalProps) {
  const { children, show, close } = props;

  const keyMap = {
    close: 'esc',
  };

  const handlers = {
    close: () => close(),
  };

  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <div
        tabIndex="0"
        role="button"
        ref={n =>
          n &&
          show &&
          setTimeout(() => {
            n.focus();
          }, 0)
        }
        className={ClassNames(styles['media-modal'], {
          [styles['media-modal--show']]: show,
        })}
      >
        {show && children}
      </div>
    </HotKeys>
  );
}

type MediaModalContentProps = {
  children: React.Node,
};

export function MediaModalContent(props: MediaModalContentProps) {
  const { children } = props;
  const classes = ClassNames(styles['media-modal__content']);

  return <div className={classes}>{children}</div>;
}

type MediaModalHeaderProps = {
  children: React.Node,
};

export function MediaModalHeader(props: MediaModalHeaderProps) {
  const { children } = props;
  const classes = ClassNames(styles['media-modal__header']);

  return <div className={classes}>{children}</div>;
}

type MediaModalHeaderActionsProps = {
  children: React.Node,
};

export function MediaModalHeaderActions(props: MediaModalHeaderActionsProps) {
  const { children } = props;
  const classes = ClassNames(styles['media-modal__header__actions']);

  return <div className={classes}>{children}</div>;
}

type MediaModalNavigatorProps = {
  children: React.Node,
  isRight?: boolean,
};

MediaModalNavigator.defaultProps = {
  isRight: false,
};

export function MediaModalNavigator(props: MediaModalNavigatorProps) {
  const classes = ClassNames(styles['media-modal__naviator'], {
    [styles['media-modal__naviator--right']]: props.isRight,
  });

  return <div className={classes}>{props.children}</div>;
}
