// @flow
import React from 'react';
import type { Node } from 'react';
import Text, { TEXT_BOLDNESS, TEXT_SIZE } from './Text';

type SBTitleProps = {
  children: Node,
};

export function SBTitle(props: SBTitleProps) {
  return (
    <div style={{ marginTop: '24px' }}>
      <Text size={TEXT_SIZE.SIZE_3} boldness={TEXT_BOLDNESS.BOLD} block>
        {props.children}
      </Text>
    </div>
  );
}

export function SBSubTitle(props: SBTitleProps) {
  return (
    <div style={{ marginTop: '12px' }}>
      <Text size={TEXT_SIZE.SIZE_4} boldness={TEXT_BOLDNESS.BOLD} block>
        {props.children}
      </Text>
    </div>
  );
}

type SBSectionProps = {
  title: string,
  children: Node,
};

export function SBSection(props: SBSectionProps) {
  return (
    <div style={{ paddingBottom: '20px' }}>
      <SBTitle>{props.title}</SBTitle>
      {props.children}
    </div>
  );
}
