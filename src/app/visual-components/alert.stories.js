import React from 'react';
import { storiesOf } from '@storybook/react';

import { SBSection } from './StorybookComponents';

import InfoMessage, { INFO_MESSAGE_STYLE } from './Alert';

const AlertStories = storiesOf('Alerts', module);

AlertStories.add('InfoMessage', () => (
  <div>
    <SBSection title="Info">
      <InfoMessage iconName="info" style={INFO_MESSAGE_STYLE.INFO}>
        Cras non tortor ac dolor ullamcorper condimentum.
      </InfoMessage>

      <InfoMessage iconName="upload_cloud" style={INFO_MESSAGE_STYLE.INFO}>
        Cras non tortor ac dolor ullamcorper condimentum.
      </InfoMessage>
    </SBSection>

    <SBSection title="Success">
      <InfoMessage iconName="check_circle" style={INFO_MESSAGE_STYLE.SUCCESS}>
        Cras non tortor ac dolor ullamcorper condimentum.
      </InfoMessage>
    </SBSection>
    <SBSection title="Warning">
      <InfoMessage iconName="check_circle" style={INFO_MESSAGE_STYLE.WARNING}>
        Cras non tortor ac dolor ullamcorper condimentum.
      </InfoMessage>
    </SBSection>
    <SBSection title="Danger">
      <InfoMessage iconName="check_circle" style={INFO_MESSAGE_STYLE.DANGER}>
        Cras non tortor ac dolor ullamcorper condimentum.
      </InfoMessage>
    </SBSection>
  </div>
));
