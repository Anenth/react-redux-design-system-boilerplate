// @flow
import * as React from 'react';
import { Overlay as OverlayLib } from 'react-overlays';

//  NOTE: Import styles wont work as its called from the store or some shit! it doesnt work;

const PopoverStyle = {
  position: 'absolute',
  padding: '0 5px',
  minWidth: '300px',
};

const PopoverInnerStyle = {
  padding: '16px',
  borderRadius: 4,
  backgroundColor: '#fff',
  boxShadow: '0 0 12px 2px #e9ebed',
};

const TooltipArrowStyle = {
  position: 'absolute',
  width: 0,
  height: 0,
  borderRightColor: 'transparent',
  borderLeftColor: 'transparent',
  borderTopColor: 'transparent',
  borderBottomColor: 'transparent',
  borderStyle: 'solid',
};

const PlacementStyles = {
  left: {
    tooltip: { marginLeft: -3, padding: '0 5px' },
    arrow: {
      right: 0,
      marginTop: -5,
      borderWidth: '5px 0 5px 5px',
      borderLeftColor: '#fff',
    },
  },
  right: {
    tooltip: { marginRight: 3, padding: '0 5px' },
    arrow: {
      left: 0,
      marginTop: -5,
      borderWidth: '5px 5px 5px 0',
      borderRightColor: '#fff',
    },
  },
  top: {
    tooltip: { marginTop: -3, padding: '5px 0' },
    arrow: {
      bottom: 0,
      marginLeft: -5,
      borderWidth: '5px 5px 0',
      borderTopColor: '#fff',
    },
  },
  bottom: {
    tooltip: { marginBottom: 3, padding: '5px 0' },
    arrow: {
      top: 0,
      marginLeft: -5,
      borderWidth: '0 5px 5px',
      borderBottomColor: '#fff',
    },
  },
};

type PopoverBoxProps = {
  children: React.Node,
  placement?: 'left' | 'right' | 'top' | 'bottom',
  style: {},
  arrowOffsetLeft: any,
  arrowOffsetTop: any,
};

const PopoverBox = (props: PopoverBoxProps) => {
  const placementStyle = PlacementStyles[props.placement];

  const {
    style,
    arrowOffsetLeft: left = placementStyle.arrow.left,
    arrowOffsetTop: top = placementStyle.arrow.top,
    children,
  } = props;

  return (
    <div style={{ ...PopoverStyle, ...placementStyle.tooltip, ...style }}>
      <div style={{ ...TooltipArrowStyle, ...placementStyle.arrow, left, top }} />
      <div style={PopoverInnerStyle}>{children}</div>
    </div>
  );
};

PopoverBox.defaultProps = {
  placement: 'top',
};

type Props = {
  children: React.Node,
  placement?: 'left' | 'right' | 'top' | 'bottom',
  target: any,
  show: boolean,
};

export default function Popover(props: Props) {
  const { show, placement, target, children } = props;
  return (
    <OverlayLib
      show={show}
      // onHide={() => this.setState({ show: false })}
      placement={placement}
      target={target}
    >
      <PopoverBox placement={placement}>{children}</PopoverBox>
    </OverlayLib>
  );
}

Popover.defaultProps = {
  placement: 'top',
};
