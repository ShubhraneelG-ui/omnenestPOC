import { StoryObj, Meta } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: "text"
    },
    color: {
      control: "select",
      options: ['primary', 'secondary', 'tertiary']
    },
    size: {
      control: "select",
      options: ["small", 'medium', 'large']
    }
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Color: Story = {
  args: {
    color: "primary",
    size: 'medium',
    disabled: false,
    children: 'Primary Button',
  },
};

export const Loading: Story = {
  args: {
    color: "secondary",
    size: 'medium',
    disabled: false,
    children: 'Primary Button',
  },
};

