// @flow
import * as React from 'react';
import { logError } from '../services/ErrorTracker';
import { COLOR_SHADES } from './Color';
import Text from './Text';

type Props = {
  children: React.Node
};
type State = { hasError: boolean };

export default class ErrorBoundary extends React.Component<Props, State> {
  state = {
    hasError: false
  };

  componentDidCatch(error: {}, info: {}) {
    this.setState({ hasError: true });
    logError(error, info);
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <Text color={COLOR_SHADES.DANGER}>Something went wrong.</Text>;
    }
    return this.props.children;
  }
}
