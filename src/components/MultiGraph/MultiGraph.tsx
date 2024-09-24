import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import * as echarts from 'echarts';
import { IMultiGraph } from './IMultiGraph';
import { debounce } from 'lodash';

const MultiGraph: React.FC<IMultiGraph> = ({
  lineData,
  barData,
  categories,
  title,
  labelOption,
  showLegend = true,
  barGap = '0',
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const chartOptions: echarts.EChartsOption = useMemo(() => {
    return {
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
      yAxis: [
        {
          type: 'value',
          name: 'Trade Volume',
          position: 'left',
          axisLine: {
            show: true,
          },
          axisLabel: {
            formatter: '{value} lot',
          },
        },
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
          emphasis: { focus: 'series' },
          barGap,
          itemStyle: item.color ? { color: item.color } : undefined,
        })),
        ...lineData.map((item) => ({
          name: item.name,
          type: 'line',
          data: item.values,
          yAxisIndex: 1,
          lineStyle: item.lineStyle
            ? item.lineStyle
            : { color: item.color, type: 'solid' },
          itemStyle: item.color ? { color: item.color } : undefined,
        })),
      ],
    };
  }, [lineData, barData, categories, title, labelOption, showLegend, barGap]);

  const handleResize = useCallback(
    debounce(() => {
      const chart = chartRef.current
        ? echarts.getInstanceByDom(chartRef.current)
        : null;
      if (chart) chart.resize();
    }, 200),
    [],
  );

  useEffect(() => {
    if (!chartRef.current) return;

    let chart = echarts.init(chartRef.current);

    chart.setOption(chartOptions);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart?.dispose();
    };
  }, [chartOptions, handleResize]);

  return (
    <div
      ref={chartRef}
      style={{ width: '100%', height: '700px' }}
      aria-label={title || 'Multi-series graph'}
    ></div>
  );
};

export default MultiGraph;
