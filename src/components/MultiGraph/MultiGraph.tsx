import React, { useCallback, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { IMultiGraph } from './IMultiGraph';
import { debounce } from 'lodash';
import { getChartsOptions } from './utils';

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

  useEffect(() => {
    if (!chartRef.current) return;

    let chart = echarts.init(chartRef.current);

    const chartOptions = getChartsOptions({
      lineData,
      barData,
      categories,
      title,
      labelOption,
      showLegend,
      barGap,
    });
    chart.setOption(chartOptions);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart?.dispose();
    };
  }, [
    chartRef,
    lineData,
    barData,
    categories,
    title,
    labelOption,
    showLegend,
    barGap,
  ]);

  const handleResize = useCallback(
    debounce(() => {
      const chart = chartRef.current
        ? echarts.getInstanceByDom(chartRef.current)
        : null;
      if (chart) chart.resize();
    }, 200),
    [],
  );

  return (
    <div
      ref={chartRef}
      style={{ width: '100%', height: '700px' }}
      aria-label={title || 'Multi-series graph'}
    ></div>
  );
};

export default React.memo(MultiGraph);
