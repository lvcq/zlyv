import { SceneOptions, InstanceInfo, SceneEvent } from "../model/scene";
import { Webgl2 } from "./webgl";

export class ZlyScene2D {
    private canvas: HTMLCanvasElement;
    private gl: WebGL2RenderingContext;
    private instances: Map<string, Webgl2>;
    constructor(options: SceneOptions) {
        this.canvas = options.canvas;
        const gl = this.canvas.getContext('webgl2');
        if (!gl) {
            throw '浏览器不支持webgl2';
        }
        gl.canvas.width = this.canvas.offsetWidth;
        gl.canvas.height = this.canvas.offsetHeight;
        gl.viewport(0, 0, this.canvas.offsetWidth, this.canvas.offsetHeight)
        this.gl = gl;
        this.instances = new Map();
        this.drawScene();
    }

    addInstance(options: InstanceInfo): string {
        const uuid = this.generateInstanceId();
        const webglIns = new Webgl2({
            gl: this.gl
        })
        webglIns.setVertices(options.vertices, options.positionAttribute, options.numComponent);
        webglIns.setVertexShader(options.vertexShader);
        webglIns.setFragmentShader(options.fragmentShader);
        if (options.uniforms) {
            Reflect.ownKeys(options.uniforms).forEach((key) => {
                if (typeof key === 'string' && options.uniforms) {
                    webglIns.addUniform(key, options.uniforms[key]);
                }
            })
        }
        this.instances.set(uuid, webglIns);
        return uuid;
    }

    private generateInstanceId(): string {
        let now = new Date().getTime();
        if (window.performance && typeof window.performance.now === 'function') {
            now += window.performance.now();
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (letter) {
            const r = (now + Math.random() * 16) % 16 | 0;
            now = Math.floor(now / 16);
            return (letter == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;

    }

    private findInstanceById(id: string): Webgl2 | undefined {
        return this.instances.get(id)
    }

    clearScene() {
        this.gl.clearColor(0.0, 0.0, 0.0, 0.0);
        // 清空canvas
        this.gl.clear(this.gl.DEPTH_BUFFER_BIT | this.gl.COLOR_BUFFER_BIT);
    }

    private drawScene() {
        this.clearScene();
        this.instances.forEach((ins) => {
            ins.render();
        });
        requestAnimationFrame(() => {
            this.drawScene();
        })
    }

    on(type: SceneEvent, handler: (event: any) => void) {
        this.canvas.addEventListener(type, (event: any) => {
            handler(event);
        })
    }

    getSceneXY(clientX: number, clientY: number): number[] {
        const rect = this.canvas.getBoundingClientRect();
        const sceneX = clientX - rect.left;
        const sceneY = clientY - rect.top;
        return [sceneX, sceneY];
    }
}