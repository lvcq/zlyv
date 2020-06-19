export interface ChartInitOptions {
    /**
     * canvas 元素或者元素选择器, 例如: `类 => .class`、`id => #id`
     */
    canvas: string | HTMLCanvasElement;
}

export interface PieInitOptions extends ChartInitOptions {
    data?: number[];
}