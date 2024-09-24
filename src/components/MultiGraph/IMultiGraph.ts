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
export interface IMultiGraph {
  lineData: {
    name: string;
    values: number[];
    color?: string;
    lineStyle?: LineStyle;
  }[];
  barData: {
    name: string;
    values: number[];
    color?: string;
  }[];
  categories: string[];
  title?: string | undefined;
  labelOption?: GraphLabelOption;
  showLegend?: boolean;
  barGap?: number | string;
}
