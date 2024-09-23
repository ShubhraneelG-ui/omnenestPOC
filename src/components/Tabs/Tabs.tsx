import { Tabs as MUITabs, Tab } from '@mui/material';
import React from 'react';
import { ITabs, ITabsContent } from './ITabs';
import styles from './Tabs.module.scss';

const Tabs: React.FC<ITabs> = ({ selectedValue, tabsContent, ...tabsProp }) => {
  return (
    <MUITabs className={styles.tabs} value={selectedValue} {...tabsProp}>
      {tabsContent &&
        tabsContent.map((tabContent: ITabsContent, index: number) => {
          const { content, value, tabProps } = tabContent;
          return (
            <Tab
              key={index}
              tabIndex={index}
              label={content}
              value={value}
              {...tabProps}
            />
          );
        })}
    </MUITabs>
  );
};

export default Tabs;
