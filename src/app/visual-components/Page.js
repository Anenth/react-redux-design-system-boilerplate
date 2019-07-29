// @flow

import * as React from 'react';
import ClassNames from 'classnames';
import Color, { COLOR_SHADES } from './Color';
import ErrorBoundary from './Error';
import Space, { Row } from './Grid';
import Icon from './Icons';
import styles from './page.css';
import Text, { TEXT_SIZE } from './Text';

type PageProps = {
  children: React.Node,
};

export default function Page(props: PageProps) {
  const classes = ClassNames(styles.page);

  return <div className={classes}>{props.children}</div>;
}

type HeaderProps = {
  children: React.Node,
};

export function Header(props: HeaderProps) {
  const classes = ClassNames(styles.header);

  return <div className={classes}>{props.children}</div>;
}

type HeaderActionsProps = {
  children: React.Node,
};

export function HeaderActions(props: HeaderActionsProps) {
  const classes = ClassNames(styles['header-actions'], 'hidden-print');

  return <div className={classes}>{props.children}</div>;
}

type SidebarProps = {
  children?: React.Node,
  isRight?: boolean,
  hasPadding?: boolean,
  simpleStyle?: boolean,
};

Sidebar.defaultProps = {
  isRight: false,
  hasPadding: true,
  children: null,
  simpleStyle: false,
};

export function Sidebar(props: SidebarProps) {
  const classes = ClassNames(styles.sidebar, 'hidden-print', {
    [styles['sidebar--padding']]: props.hasPadding,
    [styles['sidebar--left']]: !props.isRight,
    [styles['sidebar--right']]: props.isRight,
    [styles['sidebar--style-simple']]: props.simpleStyle,
  });

  return (
    <div className={classes}>
      <ErrorBoundary>{props.children}</ErrorBoundary>
    </div>
  );
}

type ContentProps = {
  children: React.Node,
  hasSidebarOnRight?: boolean,
  hasMaxWidth?: boolean,
  isScrollable?: boolean,
};

Content.defaultProps = {
  hasSidebarOnRight: true,
  hasMaxWidth: false,
  isScrollable: false,
};

export function Content(props: ContentProps) {
  const classes = ClassNames(styles.content, {
    [styles['content--sidebar-on-right']]: props.hasSidebarOnRight,
    [styles['content--max-width']]: props.hasMaxWidth,
    [styles['content--scrollable']]: props.isScrollable,
  });

  return (
    <div className={classes}>
      <ErrorBoundary>{props.children}</ErrorBoundary>
    </div>
  );
}

type FooterProps = {
  children: React.Node,
};

export function Footer(props: FooterProps) {
  const classes = ClassNames(styles.footer);

  return <div className={classes}>{props.children}</div>;
}

type ScrollableContainerProps = {
  children: React.Node,
};

export function ScrollableContainer(props: ScrollableContainerProps) {
  const classes = ClassNames(
    styles['scrollable-container'],
    styles['scrollable-container--sidebar-list'],
  );

  return <div className={classes}>{props.children}</div>;
}

type DividerProps = {
  vertical?: boolean,
};

Divider.defaultProps = {
  vertical: false,
};

export function Divider(props: DividerProps) {
  const classes = ClassNames(styles.divider, {
    [styles['divider--vertical']]: props.vertical,
  });

  return <div className={classes} />;
}

export const SECTION_STYLES = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
};

type SectionProps = {
  children: React.Node,
  style?: $Values<typeof SECTION_STYLES>,
};

export function Section(props: SectionProps) {
  const { children, style } = props;
  const classes = ClassNames(styles.section, styles[`section--style-${style}`]);

  return <div className={classes}>{children}</div>;
}

Section.defaultProps = {
  style: SECTION_STYLES.DEFAULT,
};

type PageHeaderProps = {
  children: string | React.Node,
  iconName: string,
};

export function PageHeader(props: PageHeaderProps) {
  const { children, iconName } = props;
  const classes = ClassNames(styles.page__header);

  return (
    <div className={classes}>
      <Row vcenter>
        <Color shade={COLOR_SHADES.DARKER} inline>
          <Icon name={iconName} />
        </Color>
        <Space size={2} />
        <Text size={TEXT_SIZE.SIZE_1} block color={COLOR_SHADES.DARKER}>
          {children}
        </Text>
      </Row>
      <Divider />
      <Space vertical size={2} />
    </div>
  );
}
