// BarGraphExamples.tsx

import React from 'react';
import BarGraph from './BarGraph';
import { TooltipOption, BarLabelOption, LegendOption } from './IBarGraph'; // Adjust the import according to your file structure

// Data for the bar graphs
const basicStackedData = [
  { name: 'Category A', values: [120, 200, 150], color: '#ff9999' }, // Pastel Red
  { name: 'Category B', values: [80, 70, 110], color: '#99ccff' }, // Pastel Blue
  { name: 'Category C', values: [70, 100, 100], color: '#ffcc99' }, // Pastel Orange
];

// Tooltip options
const tooltipOptionDefault: TooltipOption = {
  trigger: 'item',
  axisPointer: {
    type: 'line',
  },
};

// Label options with specific literal values
const labelOptionInside: BarLabelOption = {
  show: true,
  position: 'inside', // This must be one of the allowed literal values
  formatter: '{c} ({d}%)', // Show value and percentage
  fontSize: 14,
};

const labelOptionTop: BarLabelOption = {
  show: true,
  position: 'top', // This must also be one of the allowed literal values
  fontSize: 16,
};

const horizontalLegendOption: LegendOption = {
  show: true,
  orient: 'vertical',
  left: 'right',
  top: 'middle',
  textStyle: {
    color: '#555',
    fontSize: 14,
  },
};

const customizedLegendOption: LegendOption = {
  show: true,
  type: 'scroll',
  orient: 'horizontal',
  left: 'center',
  top: 'top',
  itemGap: 15,
  textStyle: {
    color: '#333',
    fontSize: 12,
  },
};

const BarGraphExamples: React.FC = () => {
  return (
    <div>
      {/* Example 1: Basic Stacked Bar Chart with Default Tooltip and Legend */}
      <h2>Basic Stacked Bar Chart</h2>
      <BarGraph
        data={basicStackedData}
        categories={['Jan', 'Feb', 'Mar']}
        title="Basic Stacked Bar Chart"
        stacked={true} // Enables stacking
      />

      {/* Example 2: Stacked Bar Chart with Customized Tooltip and Labels */}
      <h2>Stacked Bar Chart with Custom Tooltip</h2>
      <BarGraph
        data={basicStackedData}
        categories={['Jan', 'Feb', 'Mar']}
        title="Stacked Bar Chart with Custom Tooltip"
        stacked={true}
        tooltipOption={tooltipOptionDefault}
        labelOption={labelOptionInside}
      />

      {/* Example 3: Horizontal Stacked Bar Chart with Custom Legend */}
      <h2>Horizontal Stacked Bar Chart</h2>
      <BarGraph
        data={basicStackedData}
        categories={['Q1', 'Q2', 'Q3']}
        title="Horizontal Stacked Bar Chart"
        horizontal={true} // Enables horizontal bars
        stacked={true} // Enables stacking
        legendOption={horizontalLegendOption}
        tooltipOption={{
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        }}
      />

      {/* Example 4: Basic Stacked Bar Chart with Customized Legends and Labels */}
      <h2>Stacked Bar Chart with Customized Legends and Labels</h2>
      <BarGraph
        data={basicStackedData}
        categories={['Product X', 'Product Y', 'Product Z']}
        title="Stacked Bar Chart with Customized Legends and Labels"
        stacked={true} // Enables stacking
        labelOption={labelOptionTop} // Using the top label option
        legendOption={customizedLegendOption}
        tooltipOption={{
          trigger: 'item',
          axisPointer: {
            type: 'shadow',
          },
        }}
      />
    </div>
  );
};

export default BarGraphExamples;
