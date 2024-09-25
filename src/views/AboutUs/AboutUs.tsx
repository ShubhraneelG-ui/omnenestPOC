import BarGraph from 'components/BarGraph/BarGraph';
import { BarLabelOption } from 'components/BarGraph/IBarGraph';

const AboutUs = () => {
  const chartData = [
    {
      name: 'Forest',
      values: [320, 332, 301, 334, 390],
      color: '#91cc75',
    },
    {
      name: 'Steppe',
      values: [220, 182, 191, 234, 290],
      color: '#fac858',
    },
  ];

  const categories = ['2012', '2013', '2014', '2015', '2016'];

  const customLabelOption: BarLabelOption = {
    show: true,
    position: 'insideBottom',
    distance: 15,
    align: 'left',
    verticalAlign: 'middle',
    rotate: 90,
    formatter: '{c}  {name|{a}}',
    fontSize: 14,
    rich: {
      name: {
        textBorderColor: '#fff',
      },
    },
  };

  return (
    <div>
      <h1>ECharts Bar Charts</h1>

      {/* Basic vertical bar chart */}
      <BarGraph
        data={chartData}
        categories={categories}
        title="Basic Vertical Bar Chart"
        isBasic={true}
      />

      {/* Horizontal bar chart with custom labels */}
      <BarGraph
        data={chartData}
        categories={categories}
        title="Horizontal Bar Chart with Custom Labels"
        horizontal={true}
        labelOption={customLabelOption}
      />

      {/* Vertical bar chart with no legend and custom bar gap */}
      <BarGraph
        data={chartData}
        categories={categories}
        title="Vertical Bar Chart without Legend"
        barGap="10%"
      />

      {/* Full-featured bar chart */}
      <BarGraph
        data={chartData}
        categories={categories}
        title="Full-featured Bar Chart"
        labelOption={customLabelOption}
        horizontal={false}
        barGap={0}
      />
    </div>
  );
};

export default AboutUs;
