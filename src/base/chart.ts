import { ChartInitOptions } from "../model/chart";
import { ZlyScene2D } from "../webgl/scene2d";
import { SceneEvent } from "../model/scene";
import { AreaBounds } from "./area-bounds";
import { Mat3 } from "../webgl/gl-math/mat3";

export class Chart {
    private canvas: HTMLCanvasElement;
    public scene: ZlyScene2D;
    private mchartArea: AreaBounds;
    private mu_matrix: Mat3;

    get canvasWidth() {
        if (this.canvas) {
            return this.canvas.offsetWidth
        }
        else return 0;
    }

    get canvasHeight() {
        if (this.canvas) {
            return this.canvas.offsetHeight
        } else {
            return 0;
        }
    }

    get chartArea() {
        return this.mchartArea;
    }

    get u_matrix() {
        return this.mu_matrix;
    }

    constructor(options: ChartInitOptions) {
        this.canvas = this.getCanvas(options.canvas);

        this.scene = new ZlyScene2D({
            canvas: this.canvas
        })
        this.mchartArea = new AreaBounds(0, this.canvas.offsetWidth, this.canvas.offsetHeight, 0);
        console.log(this.canvas.offsetHeight,this.canvas.offsetHeight);
        this.mu_matrix = new Mat3([2 / this.canvas.offsetWidth, 0.0, 0.0, 0.0, -2 / this.canvas.offsetHeight, 0.0, -1.0, 1.0, 1.0]);
        this.scene.on(SceneEvent.MOUSE_MOVE, (evt: MouseEvent) => {
            let [sceneX, sceneY] = this.scene.getSceneXY(evt.clientX, evt.clientY);
        })
    }

    private getCanvas(canvas: string | HTMLCanvasElement) {
        if (typeof canvas == "string") {
            const canvasElement = document.querySelector(canvas);
            if (canvasElement && canvasElement.tagName == "CANVAS") {
                return (canvasElement as HTMLCanvasElement);
            } else {
                throw `传入元素选择器: ${canvas} 错误`;
            }
        } else if (typeof canvas == "object") {
            let isCanvas = false;
            if (HTMLCanvasElement) {
                if (canvas instanceof HTMLCanvasElement) {
                    isCanvas = true;
                }
            } else {
                if (!!(canvas.nodeType === 1 && typeof canvas.nodeName === 'string' && canvas.nodeName === "CANVAS")) {
                    isCanvas = true;
                }
            }
            if (isCanvas) {
                return canvas;
            } else {
                throw `传入元素: ${canvas} 不是canvas元素`;
            }
        } else {
            throw `传入参数canvas错误`;
        }
    }

}