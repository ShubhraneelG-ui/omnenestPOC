import { IMultiGraph } from 'components/MultiGraph/IMultiGraph';
import MultiGraph from 'components/MultiGraph/MultiGraph';

const AboutUs = () => {
  // For multiGraph

  const lineData: IMultiGraph['lineData'] = [
    {
      name: 'VWAP',
      values: [63, 62.95, 64.5, 64.65, 64.55, 65.3, 67, 68, 68.85, 69, 67.95],
      color: '#91CC75',
    },
    {
      name: 'TWAP',
      values: [60, 63.95, 62.5, 65.65, 63.55, 64.3, 65, 65.6, 67.85, 68, 66.85],
      color: 'blue',
    },
    {
      name: 'MarketPrice(LTP)',
      values: [
        59, 60.95, 64.5, 67.65, 66.55, 65.3, 65.7, 65.8, 66.85, 67, 67.85,
      ],
      lineStyle: {
        color: '#5470C6',
        width: 4,
        type: 'dotted',
      },
    },
  ];
  const barData = [
    {
      name: 'Volume',
      values: [10, 12, 14, 8, 4, 16, 14, 11, 17, 16, 15],
      color: '#5470C6',
    },
  ];
  const multiGraphCategory = [
    '10:00 AM',
    '11:00 AM',
    '12:00 AM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
    '08:00 PM',
  ];

  return (
    <div>
      <h1>ECharts Bar Charts</h1>

      <MultiGraph
        lineData={lineData}
        barData={barData}
        categories={multiGraphCategory}
        title="Custom MultiChart"
        showLegend={true}
        barGap={'0'}
      />
    </div>
  );
};

export default AboutUs;
