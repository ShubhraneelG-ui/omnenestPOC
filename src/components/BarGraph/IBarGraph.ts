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

export interface LegendOption {
  show?: boolean;
  type?: 'plain' | 'scroll';
  orient?: 'horizontal' | 'vertical';
  align?: 'auto' | 'left' | 'right';
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number | number[];
  padding?: number | number[];
  itemGap?: number;
  itemWidth?: number;
  itemHeight?: number;
  textStyle?: {
    color?: string;
    fontStyle?: 'normal' | 'italic' | 'oblique';
    fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
    fontFamily?: string;
    fontSize?: number;
    lineHeight?: number;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number | number[];
    padding?: number | number[];
    shadowColor?: string;
    shadowBlur?: number;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
  };
  formatter?: string | ((name: string) => string);
  selectedMode?: boolean | 'single' | 'multiple';
  inactiveColor?: string;
  selected?: Record<string, boolean>;
  icon?: string;
  emphasis?: {
    focus?: 'none' | 'self';
    textStyle?: {
      color?: string;
      fontSize?: number;
    };
  };
  scrollDataIndex?: number;
  pageButtonItemGap?: number;
  pageButtonPosition?: 'start' | 'end';
  pageFormatter?: string | ((current: number, total: number) => string);
  pageIcons?: {
    horizontal?: string[];
    vertical?: string[];
  };
  pageTextStyle?: {
    color?: string;
  };
}



export interface TooltipOption {
  trigger?: 'item' | 'axis';
  axisPointer?: {
    type?: 'line' | 'shadow' | 'none';
  };
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
  legendOption?: LegendOption;
  tooltipOption?: TooltipOption;
  horizontal?: boolean;
  barGap?: number | string;
  isBasic?: boolean;
  stacked?: boolean;
}
