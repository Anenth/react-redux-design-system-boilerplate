// @flow
import * as React from 'react';
import { Overlay as OverlayLib } from 'react-overlays';

const TooltipStyle = {
  position: 'absolute',
  padding: '0 5px',
  minWidth: '100px',
  maxWidth: '250px',
  height: 'auto',
  fontFamily: 'Source Sans Pro, sans-serif',
  zIndex: '120',
};

const TooltipInnerStyle = {
  padding: '4px 8px',
  color: '#fff',
  textAlign: 'center',
  borderRadius: 3,
  fontSize: '12px',
  lineHeight: '16px',
  backgroundColor: '#000',
};

type Props = {
  children: React.Node,
  placement?: 'left' | 'right' | 'top' | 'bottom',
  message: string | React.Node,
};

type StateType = {
  show: boolean,
};

export default class Tooltip extends React.Component<Props, StateType> {
  state = { show: false };

  node = null;

  render() {
    if (this.props.message.length === 0) return this.props.children;

    return (
      <React.Fragment>
        <span
          ref={n => {
            this.node = n;
          }}
          onMouseEnter={() => this.setState({ show: true })}
          onMouseLeave={() => this.setState({ show: false })}
        >
          {this.props.children}
        </span>
        <OverlayLib
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          placement={this.props.placement}
          container={this}
          target={() => this.node}
        >
          {({ props }) => (
            <div
              {...props}
              style={{
                ...TooltipStyle,
                ...props.style,
              }}
            >
              <div style={TooltipInnerStyle}>{this.props.message}</div>
            </div>
          )}
        </OverlayLib>
      </React.Fragment>
    );
  }
}

Tooltip.defaultProps = {
  placement: 'top',
};
