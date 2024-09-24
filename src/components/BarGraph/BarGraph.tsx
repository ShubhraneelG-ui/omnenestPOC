import React, { useEffect, useRef } from 'react';
import { BarLabelOption, IBarGraph, LegendOption, TooltipOption } from './IBarGraph';
import * as echarts from 'echarts';

const BarGraph: React.FC<IBarGraph> = ({
  data,
  categories,
  title,
  labelOption,
  legendOption,
  tooltipOption,
  horizontal = false,
  barGap = '30%',
  isBasic = false,
  stacked = false, 
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
      rotate: 0,
      formatter: '{c}  {name|{a}}',
      fontSize: 16,
      rich: {
        name: {},
      },
    };

    const defaultLegendOption: LegendOption = {
      show: true,
      type: 'plain',
      orient: 'horizontal',
      align: 'auto',
      left: 'center',
      top: 'top',
      itemGap: 10,
      itemWidth: 25,
      itemHeight: 14,
      textStyle: {
        color: '#333',
        fontSize: 12,
      },
      borderColor: '#ccc',
      borderWidth: 1,
      padding: [5, 10],
    };

    const defaultTooltipOption: TooltipOption = {
      trigger: 'axis',
      axisPointer: {
        type: isBasic ? 'none' : 'shadow',
      },
    };

    const mergedLabelOption = { ...defaultLabelOption, ...labelOption };
    const mergedLegendOption = { ...defaultLegendOption, ...legendOption };
    const mergedTooltipOption = { ...defaultTooltipOption, ...tooltipOption };

    const defaultBarColor = '#5470C6'; 

    const option: echarts.EChartsOption = {
      title: title ? { text: title } : undefined,
      tooltip: mergedTooltipOption,
      legend: mergedLegendOption.show
        ? {
            data: data.map((item) => item.name), 
            type: mergedLegendOption.type,
            orient: mergedLegendOption.orient,
            left: mergedLegendOption.left,
            top: mergedLegendOption.top,
            itemGap: mergedLegendOption.itemGap,
            itemWidth: mergedLegendOption.itemWidth,
            itemHeight: mergedLegendOption.itemHeight,
            textStyle: mergedLegendOption.textStyle,
            borderColor: mergedLegendOption.borderColor,
            borderWidth: mergedLegendOption.borderWidth,
            padding: mergedLegendOption.padding,
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
        itemStyle: {
          color: item.color || defaultBarColor, 
        },
        label: mergedLabelOption,
        stack: stacked ? 'stack' : undefined,
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
    legendOption,
    tooltipOption,
    horizontal,
    barGap,
    isBasic,
  ]);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default BarGraph;
