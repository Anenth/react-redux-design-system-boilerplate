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

const PlacementStyles = {
  left: {
    tooltip: { marginLeft: -3, padding: '0 5px' },
  },
  right: {
    tooltip: { marginRight: 3, padding: '0 5px' },
  },
  top: {
    tooltip: { marginTop: -3, padding: '5px 0' },
  },
  bottom: {
    tooltip: { marginBottom: 3, padding: '5px 0' },
  },
};

type ToolTipBoxProps = {
  children: React.Node,
  placement?: 'left' | 'right' | 'top' | 'bottom',
  style: {},
};

const ToolTipBox = (props: ToolTipBoxProps) => {
  const placementStyle = PlacementStyles[props.placement];

  const { style, children } = props;

  return (
    <div
      style={{
        ...TooltipStyle,
        ...placementStyle.tooltip,
        ...style,
      }}
    >
      <div style={TooltipInnerStyle}>{children}</div>
    </div>
  );
};

ToolTipBox.defaultProps = {
  placement: 'top',
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
          key={this.props.message}
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          placement={this.props.placement}
          target={this.node}
        >
          <ToolTipBox placement={this.props.placement}>{this.props.message}</ToolTipBox>
        </OverlayLib>
      </React.Fragment>
    );
  }
}

Tooltip.defaultProps = {
  placement: 'top',
};
