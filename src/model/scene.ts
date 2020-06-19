import { GlMathBase } from "../webgl/gl-math/gl-math-base";

export interface SceneOptions {
    canvas: HTMLCanvasElement;
}

export interface InstanceInfo {
    vertices: number[];
    numComponent: number;
    vertexShader: string;
    fragmentShader: string;
    positionAttribute: string;
    uniforms?: { [key: string]: GlMathBase }
}

export enum SceneEvent {
    MOUSE_MOVE = 'mousemove'
}