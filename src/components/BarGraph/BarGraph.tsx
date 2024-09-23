import React, { useEffect, useRef } from 'react';
import { BarLabelOption, IBarGraph } from './IBarGraph';
import * as echarts from 'echarts';

const BarGraph: React.FC<IBarGraph> = ({
  data,
  categories,
  title,
  labelOption,
  showLegend = true,
  horizontal = false,
  barGap = '30%',
  isBasic = false,
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    let chart = echarts.init(chartRef.current);
    const defaultLabelOption: BarLabelOption = {
      show: true,
      position: 'top',
      distance: 15,
      align: 'left',
      verticalAlign: 'middle',
      rotate: 90,
      formatter: '{c}  {name|{a}}',
      fontSize: 16,
      rich: {
        name: {},
      },
    };

    const mergedLabelOption = { ...defaultLabelOption, ...labelOption };

    const option: echarts.EChartsOption = {
      title: title ? { text: title } : undefined,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: isBasic ? 'none' : 'shadow',
        },
      },
      legend: showLegend
        ? {
            data: data.map((item) => item.name),
          }
        : undefined,
      [horizontal ? 'yAxis' : 'xAxis']: {
        type: 'category',
        axisTick: { show: false },
        data: categories,
      },
      [horizontal ? 'xAxis' : 'yAxis']: {
        type: 'value',
      },
      series: data.map((item) => ({
        name: item.name,
        type: 'bar',
        data: item.values,
        emphasis: {
          focus: 'series',
        },
        barGap: barGap,
        itemStyle: item.color
          ? {
              color: item.color,
            }
          : undefined,
        label: mergedLabelOption,
      })),
    };

    chart.setOption(option);

    return () => {
      chart?.dispose();
    };
  }, [
    data,
    categories,
    title,
    labelOption,
    showLegend,
    horizontal,
    barGap,
    isBasic,
  ]);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default BarGraph;
