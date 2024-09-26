export interface GraphLabelOption {
  show?: boolean;
  position?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'inside'
    | 'insideLeft'
    | 'insideRight'
    | 'insideTop'
    | 'insideBottom'
    | 'insideTopLeft'
    | 'insideBottomLeft'
    | 'insideTopRight'
    | 'insideBottomRight';
  distance?: number;
  align?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'middle' | 'bottom';
  rotate?: number;
  formatter?: string;
  fontSize?: number;
  rich?: Record<string, any>;
}
export interface LineStyle {
  color: string;
  width: number;
  type: 'dotted' | 'dashed' | 'solid'; // Strict union type
}

export interface ILineData {
  name: string;
  values: number[];
  yIndex: number;
  color?: string;
  lineStyle?: LineStyle;
}

export interface IBarData {
  name: string;
  values: number[];
  yIndex: number;
  color?: string;
}
export interface YAxisOptions {
  name?: string;
  position?: 'left' | 'right';
  axisLine?: {
    show: boolean;
  };
  axisLabel?: {
    formatter: string;
  };
}

export interface IMultiGraph {
  lineData: ILineData[];
  barData: IBarData[];
  categories: string[];
  title?: string | undefined;
  labelOption?: GraphLabelOption;
  showLegend?: boolean;
  barGap?: number | string;
  yAxisOptions?: YAxisOptions[];
}
