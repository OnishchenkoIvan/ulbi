import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args: any) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  theme: AppLinkTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'PrimaryDark',
  theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  theme: AppLinkTheme.SECONDARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'SecondaryDark',
  theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {
  children: 'DarkRed',
  theme: AppLinkTheme.RED,
};

export const SecondaryDarkRed = Template.bind({});
SecondaryDarkRed.args = {
  children: 'SecondaryDarkRed',
  theme: AppLinkTheme.RED,
};
SecondaryDarkRed.decorators = [ThemeDecorator(Theme.DARK)];
