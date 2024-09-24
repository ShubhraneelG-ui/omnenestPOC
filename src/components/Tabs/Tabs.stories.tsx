import { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';
import { useState } from 'react';

export const tabsContent = [
  {
    value: 1,
    content: 'First Tab',
  },
  {
    value: 2,
    content: 'Second Tab',
  },
  {
    value: 3,
    content: 'Third Tab',
  },
];

const TabsWithContent = () => {
  const [activeValue, setActiveValue] = useState(1);

  return (
    <>
      <Tabs
        onChange={(_, value) => setActiveValue(value)}
        selectedValue={activeValue}
        tabsContent={tabsContent}
      />
      Active Content {activeValue}
    </>
  );
};

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: TabsWithContent,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Tab: Story = {
  args: {
    tabsContent: tabsContent,
  },
};
