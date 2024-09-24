import { Meta, StoryObj } from '@storybook/react';
import MultiGraph from './MultiGraph';

// Meta for the story
const meta: Meta<typeof MultiGraph> = {
  title: 'Charts/MultiGraph',
  component: MultiGraph,
  argTypes: {
    lineData: { control: 'object' },
    barData: { control: 'object' },
    categories: { control: 'array' },
    title: { control: 'text' },
    showLegend: { control: 'boolean' },
    barGap: { control: 'text' },
  },
};
export default meta;

// Default Story (using StoryObj)
type Story = StoryObj<typeof MultiGraph>;

export const Default: Story = {
  args: {
    lineData: [
      {
        name: 'Line A',
        values: [10, 22, 33, 44, 55],
        color: '#5470C6',
      },
      {
        name: 'Line B',
        values: [20, 28, 39, 50, 60],
        color: '#91CC75',
      },
    ],
    barData: [
      {
        name: 'Bar A',
        values: [40, 52, 63, 74, 85],
        color: '#EE6666',
      },
      {
        name: 'Bar B',
        values: [30, 48, 59, 70, 80],
        color: '#FAC858',
      },
    ],
    categories: ['2020', '2021', '2022', '2023', '2024'],
    title: 'Multi-Series Line and Bar Chart',
    showLegend: true,
    barGap: '0%',
  },
};

export const WithoutLegend: Story = {
  args: {
    ...Default.args,
    showLegend: false,
  },
};

export const CustomBarGap: Story = {
  args: {
    ...Default.args,
    barGap: '30%',
  },
};
