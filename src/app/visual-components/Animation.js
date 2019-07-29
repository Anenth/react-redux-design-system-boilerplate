// @flow
import React from 'react';
import type { Node } from 'react';
import { Transition } from 'react-spring/renderprops';

type SlideUpProps = {
  children: Node,
  disable?: boolean,
};

export default function SlideUp(props: SlideUpProps) {
  const { children, disable } = props;
  if (disable) return children;

  return (
    <Transition
      items
      from={{
        transform: 'translate3d(0, 150px,0)',
        opacity: 0,
      }}
      enter={{
        transform: 'translate3d(0, 0px,0)',
        opacity: 1,
      }}
      leave={{
        transform: 'translate3d(0, -150px,0)',
        opacity: 0,
      }}
    >
      {item =>
        item &&
        (animationStyles => <div style={animationStyles}>{children}</div>)
      }
    </Transition>
  );
}

SlideUp.defaultProps = {
  disable: false,
};

type FadeInProps = {
  children: Function,
};

export function FadeIn(props: FadeInProps) {
  const { children } = props;
  return (
    <Transition
      items
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {item => item && (animationStyles => children(animationStyles))}
    </Transition>
  );
}
