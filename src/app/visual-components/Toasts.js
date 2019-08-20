// @flow
import React, { Component } from 'react';
import { Portal } from 'react-overlays';
import ClassNames from 'classnames';

import styles from './alert.css';
import Icon from './Icons';

const TOAST_ICONS = {
  success: 'check_circle',
  info: 'info',
  error: 'slash',
  warning: 'clock',
};

type Props = {
  store: any,
};

type State = {
  toasts: [],
};

export default class ToastContainer extends Component<Props, State> {
  state = {
    toasts: [],
  };

  componentDidMount() {
    this.storeSubscription = this.props.store.watch(data => {
      const toast = { ...data, id: Math.random() };

      this.setState({ toasts: [toast].concat(this.state.toasts) });

      setTimeout(() => {
        this.removeToastMessage(toast.id);
      }, data.timer || 3000);
    });
  }

  componentWillUnmount() {
    this.props.store.unwatch(this.storeSubscription);
  }

  removeToastMessage = (toastId: any) => {
    this.setState({
      toasts: this.state.toasts.filter(t => t.id !== toastId),
    });
  };

  storeSubscription = null;

  render() {
    return (
      <Portal>
        <div className={styles.toasts}>
          {this.state.toasts.map(toast => (
            <div
              key={toast.id}
              className={ClassNames(styles.toast, styles[`toast--${toast.status}`])}
              role="button"
              tabIndex={0}
              onKeyPress={() => this.removeToastMessage(toast.id)}
              onClick={() => this.removeToastMessage(toast.id)}
            >
              <div className={ClassNames(styles.toast__icon, styles[`toast__icon--${toast.status}`])}>
                <Icon name={TOAST_ICONS[toast.status]} />
              </div>
              <div className={styles.toast__content}>{toast.message}</div>
            </div>
          ))}
        </div>
      </Portal>
    );
  }
}
