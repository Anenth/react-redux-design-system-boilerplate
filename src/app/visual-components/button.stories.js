import React from 'react';

import { storiesOf } from '@storybook/react';

import Button, {
  BUTTON_CIRCLE_SIZES,
  BUTTON_CIRCLE_STYLES,
  BUTTON_ICON_STYLES,
  BUTTON_SIZE,
  BUTTON_STYLES,
  ButtonCircle,
  ButtonIcon,
  GroupedButton,
  GroupedButtons,
  TEXT_BUTTON_STYLES,
  TextButton,
} from './Buttons';
import Icon, { ICON_SIZES } from './Icons';
import { SBSection, SBSubTitle, SBTitle } from './StorybookComponents';

const ButtonStories = storiesOf('Buttons', module);

ButtonStories.add('Styles', () => (
  <div>
    <SBSection title="Default button">
      <Button style={BUTTON_STYLES.DEFAULT} size={BUTTON_SIZE.SM}>
        Hello Button
      </Button>
      <Button style={BUTTON_STYLES.DEFAULT}>Hello Button</Button>
      <Button style={BUTTON_STYLES.DEFAULT} size={BUTTON_SIZE.LG}>
        Hello Button
      </Button>
    </SBSection>
    <SBSection title="Primary">
      <Button style={BUTTON_STYLES.PRIMARY} size={BUTTON_SIZE.SM}>
        Hello Button
      </Button>
      <Button style={BUTTON_STYLES.PRIMARY}>Hello Button</Button>
      <Button style={BUTTON_STYLES.PRIMARY} size={BUTTON_SIZE.LG}>
        Hello Button
      </Button>
    </SBSection>
    <SBSection title="Primary dark">
      <Button style={BUTTON_STYLES.PRIMARY_DARK} size={BUTTON_SIZE.SM}>
        Hello Button
      </Button>
      <Button style={BUTTON_STYLES.PRIMARY_DARK}>Hello Button</Button>
      <Button style={BUTTON_STYLES.PRIMARY_DARK} size={BUTTON_SIZE.LG}>
        Hello Button
      </Button>
    </SBSection>
    <SBSection title="Secondary">
      <Button style={BUTTON_STYLES.SECONDARY} size={BUTTON_SIZE.SM}>
        Hello Button
      </Button>
      <Button style={BUTTON_STYLES.SECONDARY}>Hello Button</Button>
      <Button style={BUTTON_STYLES.SECONDARY} size={BUTTON_SIZE.LG}>
        Hello Button
      </Button>
    </SBSection>
    <SBSection title="Link">
      <Button style={BUTTON_STYLES.LINK} size={BUTTON_SIZE.SM}>
        Hello Button
      </Button>
      <Button style={BUTTON_STYLES.LINK}>Hello Button</Button>
      <Button style={BUTTON_STYLES.LINK} size={BUTTON_SIZE.LG}>
        Hello Button
      </Button>
    </SBSection>
    <SBSection title="Link secondary">
      <Button style={BUTTON_STYLES.LINK_SECONDARY} size={BUTTON_SIZE.SM}>
        Hello Button
      </Button>
      <Button style={BUTTON_STYLES.LINK_SECONDARY}>Hello Button</Button>
      <Button style={BUTTON_STYLES.LINK_SECONDARY} size={BUTTON_SIZE.LG}>
        Hello Button
      </Button>
    </SBSection>
    <SBSection title="Danger button">
      <Button style={BUTTON_STYLES.DANGER} size={BUTTON_SIZE.SM}>
        Hello Button
      </Button>
      <Button style={BUTTON_STYLES.DANGER}>Hello Button</Button>
      <Button style={BUTTON_STYLES.DANGER} size={BUTTON_SIZE.LG}>
        Hello Button
      </Button>
    </SBSection>
    <SBSection title="Reset button">
      <Button style={BUTTON_STYLES.RESET}>Hello Button</Button>
    </SBSection>
  </div>
));

ButtonStories.add('Button Icons', () => (
  <div>
    <SBSection title="Styles">
      <SBTitle>Default</SBTitle>
      <ButtonIcon
        onClick={() => {}}
        title="Edit project name"
        style={BUTTON_ICON_STYLES.DEFAULT}
      >
        <Icon name="edit" size={ICON_SIZES.SM} />
      </ButtonIcon>
      <SBTitle>Secondary</SBTitle>
      <ButtonIcon
        onClick={() => {}}
        title="Edit project name"
        style={BUTTON_ICON_STYLES.SECONDARY}
      >
        <Icon name="edit" size={ICON_SIZES.SM} />
      </ButtonIcon>
    </SBSection>
  </div>
));

ButtonStories.add('Button Circle', () => (
  <div>
    <SBSection title="Styles">
      <SBSubTitle>{BUTTON_CIRCLE_STYLES.DEFAULT}</SBSubTitle>
      <ButtonCircle onClick={() => {}} style={BUTTON_CIRCLE_STYLES.DEFAULT}>
        <Icon name="edit" size={ICON_SIZES.SM} />
      </ButtonCircle>
      <SBSubTitle>{BUTTON_CIRCLE_STYLES.WHITE}</SBSubTitle>
      <ButtonCircle onClick={() => {}} style={BUTTON_CIRCLE_STYLES.WHITE}>
        <Icon name="edit" size={ICON_SIZES.SM} />
      </ButtonCircle>
      <SBSubTitle>{BUTTON_CIRCLE_STYLES.SECONDARY}</SBSubTitle>
      <ButtonCircle onClick={() => {}} style={BUTTON_CIRCLE_STYLES.SECONDARY}>
        <Icon name="edit" size={ICON_SIZES.SM} />
      </ButtonCircle>
      <SBSubTitle>{BUTTON_CIRCLE_STYLES.SUCCESS}</SBSubTitle>
      <ButtonCircle onClick={() => {}} style={BUTTON_CIRCLE_STYLES.SUCCESS}>
        <Icon name="edit" size={ICON_SIZES.SM} />
      </ButtonCircle>
    </SBSection>
    <SBSection title="Sizes">
      <SBSubTitle>{BUTTON_CIRCLE_SIZES.N}</SBSubTitle>
      <ButtonCircle onClick={() => {}} size={BUTTON_CIRCLE_SIZES.N}>
        <Icon name="edit" size={ICON_SIZES.SM} />
      </ButtonCircle>
      <SBSubTitle>{BUTTON_CIRCLE_SIZES.MD}</SBSubTitle>
      <ButtonCircle onClick={() => {}} size={BUTTON_CIRCLE_SIZES.MD}>
        <Icon name="edit" size={ICON_SIZES.SM} />
      </ButtonCircle>
      <SBSubTitle>{BUTTON_CIRCLE_SIZES.LG}</SBSubTitle>
      <ButtonCircle onClick={() => {}} size={BUTTON_CIRCLE_SIZES.LG}>
        <Icon name="edit" size={ICON_SIZES.SM} />
      </ButtonCircle>
    </SBSection>
    <SBSection title="Layers">
      <SBSubTitle>Layer 0</SBSubTitle>
      <ButtonCircle onClick={() => {}} layer={0}>
        <Icon name="edit" size={ICON_SIZES.SM} />
      </ButtonCircle>
      <SBSubTitle>Layer 1</SBSubTitle>
      <ButtonCircle onClick={() => {}} layer={1}>
        <Icon name="edit" size={ICON_SIZES.SM} />
      </ButtonCircle>
    </SBSection>
  </div>
));

ButtonStories.add('Text button', () => (
  <div>
    <SBSection title="Default">
      <TextButton style={TEXT_BUTTON_STYLES.DEFAULT}>Hello Button</TextButton>
      <div>
        <TextButton style={TEXT_BUTTON_STYLES.DEFAULT}>
          Hello Button <Icon name="chevron_down" />
        </TextButton>
      </div>
    </SBSection>
  </div>
));

ButtonStories.add('Button groups', () => (
  <div>
    <GroupedButtons>
      <GroupedButton>
        <Icon name="whatsapp_solid_color" size={ICON_SIZES.MD} />
      </GroupedButton>
      <GroupedButton>
        <Icon name="instagram_solid_color" size={ICON_SIZES.MD} />
      </GroupedButton>
      <GroupedButton>
        <Icon name="facebook_solid_color" size={ICON_SIZES.MD} />
      </GroupedButton>
      <GroupedButton>
        <Icon name="messenger_solid_color" size={ICON_SIZES.MD} />
      </GroupedButton>
    </GroupedButtons>
  </div>
));
