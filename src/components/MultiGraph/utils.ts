import { IMultiGraph } from './IMultiGraph';

export const getChartsOptions = ({
  lineData,
  barData,
  categories,
  title,
  showLegend,
  barGap,
  yAxisOptions,
}: IMultiGraph) => ({
  title: title ? { text: title } : undefined,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    right: '10%',
  },
  legend: showLegend
    ? {
        data: lineData.map((item) => item.name),
      }
    : undefined,
  xAxis: [
    {
      type: 'category',
      data: categories,
    },
  ],
  // yAxis: [
  //   {
  //     type: 'value',
  //     name: 'Trade Volume',
  //     position: 'left',
  //     axisLine: {
  //       show: true,
  //     },
  //     axisLabel: {
  //       formatter: '{value} lot',
  //     },
  //   },
  //   {
  //     type: 'value',
  //     name: 'Price',
  //     position: 'right',
  //     axisLine: {
  //       show: true,
  //     },
  //     axisLabel: {
  //       formatter: '${value}',
  //     },
  //   },
  // ],
  yAxis: yAxisOptions?.length
    ? yAxisOptions.map((option) => ({
        type: 'value',
        ...option,
      }))
    : [
        {
          type: 'value',
          name: 'Price',
          position: 'right',
          axisLine: {
            show: true,
          },
          axisLabel: {
            formatter: '${value}',
          },
        },
      ],
  series: [
    ...barData.map((item) => ({
      name: item.name,
      type: 'bar',
      data: item.values,
      yAxisIndex: item.yIndex,
      emphasis: { focus: 'series' },
      barGap,
      itemStyle: item.color ? { color: item.color } : undefined,
    })),
    ...lineData.map((item) => ({
      name: item.name,
      type: 'line',
      data: item.values,
      yAxisIndex: item.yIndex,
      lineStyle: item.lineStyle
        ? item.lineStyle
        : { color: item.color, type: 'solid' },
      itemStyle: item.color ? { color: item.color } : undefined,
    })),
  ],
});
