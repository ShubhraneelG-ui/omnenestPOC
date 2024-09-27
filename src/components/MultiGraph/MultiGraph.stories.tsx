import { Meta, StoryObj } from '@storybook/react';
import MultiGraph from './MultiGraph';
import { IMultiGraph } from './IMultiGraph';

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
    yAxisOptions: { control: 'object' },
  },
};
export default meta;

const baseArgs: IMultiGraph = {
  lineData: [
    {
      name: 'Line A',
      values: [10, 22, 33, 44, 55],
      yIndex: 0,
      color: '#5470C6',
    },
    {
      name: 'Line B',
      values: [20, 28, 39, 50, 60],
      yIndex: 1,
      color: '#91CC75',
    },
  ],
  barData: [
    {
      name: 'Bar A',
      values: [40, 52, 63, 74, 85],
      yIndex: 0,
      color: '#EE6666',
    },
    {
      name: 'Bar B',
      values: [30, 48, 59, 70, 80],
      yIndex: 1,
      color: '#FAC858',
    },
  ],
  categories: ['2020', '2021', '2022', '2023', '2024'],
  title: 'Multi-Series Line and Bar Chart',
  showLegend: true,
  barGap: '0%',
  yAxisOptions: [
    {
      name: 'Custom Y Axis',
      position: 'left',
      axisLine: { show: true },
      axisLabel: { formatter: '{value} units' },
    },
    {
      name: 'Price',
      position: 'right',
      axisLine: { show: true },
      axisLabel: { formatter: '${value}' },
    },
  ],
};
const lineArgs: IMultiGraph = {
  lineData: [
    {
      name: 'Line A',
      values: [10, 22, 33, 44, 55],
      yIndex: 0,
      color: '#5470C6',
    },
    {
      name: 'Line B',
      values: [20, 28, 39, 50, 60],
      yIndex: 0,
      color: '#91CC75',
    },
  ],
  barData: [],
  categories: ['2020', '2021', '2022', '2023', '2024'],
  title: 'Multi-Series Line and Bar Chart',
  showLegend: true,
  barGap: '0%',
  yAxisOptions: [
    {
      name: 'Custom Y Axis',
      position: 'left',
      axisLine: { show: true },
      axisLabel: { formatter: '{value} units' },
    },
    {
      name: 'Price',
      position: 'right',
      axisLine: { show: true },
      axisLabel: { formatter: '${value}' },
    },
  ],
};

// Default Story (using StoryObj)
type Story = StoryObj<typeof MultiGraph>;

export const Default: Story = {
  args: {
    ...baseArgs,
  },
};

export const WithoutLegend: Story = {
  args: {
    ...baseArgs,
    showLegend: false,
  },
};

export const CustomBarGap: Story = {
  args: {
    ...baseArgs,
    barGap: '30%',
  },
};

export const MultiLine: Story = {
  args: {
    ...lineArgs,
    barGap: '30%',
  },
};
