// @flow
import React from 'react';
import type { Node } from 'react';
import { useSpring, animated } from 'react-spring';

type SlideUpProps = {
  children: Node,
  disable?: boolean,
};

export default function SlideUp(props: SlideUpProps) {
  const { children, disable } = props;
  const style = useSpring({
    transform: 'translate3d(0,0,0)',
    opacity: 1,
    from: { transform: 'translate3d(0, 60px,0)', opacity: 0 },
  });

  if (disable) return children;
  return <animated.div style={style}>{children}</animated.div>;
}

SlideUp.defaultProps = {
  disable: false,
};

type FadeInProps = {
  children: Function,
  disable?: boolean,
};

export function FadeIn(props: FadeInProps) {
  const { children, disable } = props;
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  if (disable) return children;
  return <animated.div style={style}>{children}</animated.div>;
}
