export interface BarLabelOption {
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

export interface IBarGraph {
  data: {
    name: string;
    values: number[];
    color?: string;
  }[];
  categories: string[];
  title?: string;
  labelOption?: BarLabelOption;
  showLegend?: boolean;
  horizontal?: boolean;
  barGap?: number | string;
  isBasic?: boolean;
}
