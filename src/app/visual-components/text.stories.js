import React from 'react';

import { storiesOf } from '@storybook/react';

import { COLOR_SHADES } from './Color';
import { SBSection, SBSubTitle, SBTitle } from './StorybookComponents';
import Text, { TEXT_BOLDNESS, TEXT_SIZE } from './Text';

const TextStories = storiesOf('Text', module);

TextStories.add('Styles', () => (
  <div>
    <SBSection title="Sizes">
      <SBTitle>Size 1 - LG (Special case)</SBTitle>
      <Text size={TEXT_SIZE.SIZE_1_LG} block>
        Sed lacinia est nec consectetur euismod.
      </Text>
      <SBTitle>Size 1</SBTitle>
      <Text size={TEXT_SIZE.SIZE_1} block>
        Sed lacinia est nec consectetur euismod.
      </Text>
      <SBTitle>Size 2</SBTitle>
      <Text size={TEXT_SIZE.SIZE_2} block>
        Sed lacinia est nec consectetur euismod.
      </Text>
      <SBTitle>Size 3</SBTitle>
      <Text size={TEXT_SIZE.SIZE_3} block>
        Sed lacinia est nec consectetur euismod.
      </Text>
      <SBTitle>Size 4</SBTitle>
      <Text size={TEXT_SIZE.SIZE_4} block>
        Sed lacinia est nec consectetur euismod.
      </Text>
      <SBTitle>Size 5</SBTitle>
      <Text size={TEXT_SIZE.SIZE_5} block>
        Sed lacinia est nec consectetur euismod.
      </Text>
      <SBTitle>Size 6</SBTitle>
      <Text size={TEXT_SIZE.SIZE_6} block>
        Sed lacinia est nec consectetur euismod.
      </Text>
    </SBSection>
    <SBSection title="Color">
      <SBSubTitle>{COLOR_SHADES.DARKER}</SBSubTitle>
      <Text color={COLOR_SHADES.DARKER} block>
        Sed lacinia est nec consectetur euismod.
      </Text>
      <SBSubTitle>{COLOR_SHADES.DARK}</SBSubTitle>
      <Text color={COLOR_SHADES.DARK} block>
        Sed lacinia est nec consectetur euismod.
      </Text>
      <SBSubTitle>{COLOR_SHADES.LIGHT}</SBSubTitle>
      <Text color={COLOR_SHADES.LIGHT} block>
        Sed lacinia est nec consectetur euismod.
      </Text>

      <SBSubTitle>{COLOR_SHADES.BLUE}</SBSubTitle>
      <Text color={COLOR_SHADES.BLUE} block>
        Sed lacinia est nec consectetur euismod.
      </Text>
      <SBSubTitle>{COLOR_SHADES.BLUE_LIGHT}</SBSubTitle>
      <Text color={COLOR_SHADES.BLUE_LIGHT} block>
        Sed lacinia est nec consectetur euismod.
      </Text>
      <SBSubTitle>{COLOR_SHADES.WARNING}</SBSubTitle>
      <Text color={COLOR_SHADES.WARNING} block>
        Sed lacinia est nec consectetur euismod.
      </Text>

      <SBSubTitle>{COLOR_SHADES.WHITE}</SBSubTitle>
      <Text color={COLOR_SHADES.WHITE} block>
        Sed lacinia est nec consectetur euismod.
      </Text>
      <SBSubTitle>{COLOR_SHADES.DANGER}</SBSubTitle>
      <Text color={COLOR_SHADES.DANGER} block>
        Sed lacinia est nec consectetur euismod.
      </Text>
      <SBSubTitle>{COLOR_SHADES.SUCCESS}</SBSubTitle>
      <Text color={COLOR_SHADES.SUCCESS} block>
        Sed lacinia est nec consectetur euismod.
      </Text>
    </SBSection>
    <SBSection title="Font weights">
      <SBSubTitle>{TEXT_BOLDNESS.BOLD}</SBSubTitle>
      <Text boldness={TEXT_BOLDNESS.BOLD} block>
        Sed lacinia est nec consectetur euismod.
      </Text>
      <SBSubTitle>{TEXT_BOLDNESS.SEMI_BOLD}</SBSubTitle>
      <Text boldness={TEXT_BOLDNESS.SEMI_BOLD} block>
        Sed lacinia est nec consectetur euismod.
      </Text>
      <SBSubTitle>{TEXT_BOLDNESS.NORMAL}</SBSubTitle>
      <Text boldness={TEXT_BOLDNESS.NORMAL} block>
        Sed lacinia est nec consectetur euismod.
      </Text>
    </SBSection>

    <SBSection title="Font styles">
      <SBSubTitle>Primary Style</SBSubTitle>
      <Text block primaryStyle>
        Sed lacinia est nec consectetur euismod.
      </Text>
      <SBSubTitle>Default</SBSubTitle>
      <Text block>
        Sed lacinia est nec consectetur euismod.
      </Text>
    </SBSection>
  </div>
));
