import React from 'react';

import { storiesOf } from '@storybook/react';

import Button, {
  BUTTON_SIZE,
  BUTTON_STYLES,
  TEXT_BUTTON_STYLES,
  TextButton,
} from './Buttons';
import { COLOR_SHADES } from './Color';
import Space from './Grid';
import Icon from './Icons';
import { LOADING_PULSE_STYLES, LoadingPulse, LoadingSpin, LoadingUpload, ProgressBar } from './Loading';
import { SBSection, SBSubTitle, SBTitle } from './StorybookComponents';
import Text, { TEXT_BOLDNESS, TEXT_SIZE } from './Text';

const LoadingStories = storiesOf('Loading', module);

LoadingStories.add('ProgressBar', () => (
  <div>
    <SBSection title="default">
      <ProgressBar  progress={10} />
      <Space vertical />
      <ProgressBar  progress={40} />
      <Space vertical />
      <ProgressBar  progress={90} />
    </SBSection>
    <SBSection title="Secondary styles">
      <ProgressBar  progress={10} secondayStyle />
      <Space vertical />
      <ProgressBar  progress={40} secondayStyle />
      <Space vertical />
      <ProgressBar  progress={90} secondayStyle />
    </SBSection>
  </div>
));

LoadingStories.add('Icons', () => (
  <div>
    <SBSection title="Spin">
      <LoadingSpin />
    </SBSection>

    <SBSection title="Upload">
      <LoadingUpload />
    </SBSection>

    <SBSection title="Pulse">

      <SBSubTitle>Style: Success [default]</SBSubTitle>
      <LoadingPulse />
      <SBSubTitle>Style: Warning</SBSubTitle>
      <LoadingPulse style={LOADING_PULSE_STYLES.WARNING}/>
      <SBSubTitle>Style: Danger</SBSubTitle>
      <LoadingPulse style={LOADING_PULSE_STYLES.DANGER}/>
    </SBSection>
  </div>
));
