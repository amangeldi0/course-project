import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Button',
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
    theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    theme: ButtonTheme.CLEAR,
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    theme: ButtonTheme.OUTLINE,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundDark = Template.bind({});
OutlineDark.args = {
    theme: ButtonTheme.BACKGROUND,
};

BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundInvertedDark = Template.bind({});
OutlineDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeM = Template.bind({});
SizeM.args = {
    size: ButtonSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
    size: ButtonSize.L,
};

export const SizeXL = Template.bind({});
SizeXL.args = {
    size: ButtonSize.XL,
};

export const SquareL = Template.bind({});
SquareL.args = {
    theme: ButtonTheme.OUTLINE,
    square: true,
    size: ButtonSize.L,
    children: '<',
};

export const SquareM = Template.bind({});
SquareM.args = {
    theme: ButtonTheme.OUTLINE,
    square: true,
    size: ButtonSize.M,
    children: '<',
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    theme: ButtonTheme.OUTLINE,
    square: true,
    size: ButtonSize.XL,
    children: '<',
};
