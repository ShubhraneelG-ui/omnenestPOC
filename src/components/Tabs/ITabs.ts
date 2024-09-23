import { TabProps, TabsProps } from '@mui/material';

export interface ITabsContent {
  value: string | number | any;
  content: React.ReactNode;
  tabProps?: TabProps;
  isPermitted?: boolean;
}

export interface ITabs extends TabsProps {
  selectedValue: string | number;
  tabsContent: ITabsContent[];
}
