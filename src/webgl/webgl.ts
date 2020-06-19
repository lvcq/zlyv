import { WebglInitOptions } from "../model/webgl";
import { GlMathBase } from "./gl-math/gl-math-base";

export class Webgl2 {
    private gl: WebGL2RenderingContext;
    private vertexShader: WebGLShader | null = null;
    private fragmentShader: WebGLShader | null = null;
    private shaderProgram: WebGLProgram | null = null;
    private vertexBuffer: WebGLBuffer | null = null;
    private vertexCount: number = 0;
    private vertexRefKey = 'zly_position';
    private numComponent = 3;
    private uniforms: Map<string, GlMathBase> = new Map();
    private type: number;

    constructor(options: WebglInitOptions) {
        this.gl = options.gl;
        this.type = options.gl.FLOAT
    }

    private loadShader(type: GLenum, source: string) {
        const shader = this.gl.createShader(type);
        if (!shader) {
            throw '创建shader失败';
        }
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);

        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            const err = `编译shader失败: ${this.gl.getShaderInfoLog(shader)}`;
            this.gl.deleteShader(shader);
            throw err;
        }

        return shader;
    }

    setVertexShader(source: string) {
        this.vertexShader = this.loadShader(this.gl.VERTEX_SHADER, source);
    }

    setFragmentShader(source: string) {
        this.fragmentShader = this.loadShader(this.gl.FRAGMENT_SHADER, source);
    }

    private createShaderProgram() {
        if (this.vertexShader == null || this.fragmentShader == null) {
            throw '请先设置顶点着色器和片元着色器';
        }
        const shaderProgram = this.gl.createProgram();
        if (!shaderProgram) {
            throw '创建着色器程序失败';
        }
        this.gl.attachShader(shaderProgram, this.vertexShader);
        this.gl.attachShader(shaderProgram, this.fragmentShader);
        this.gl.linkProgram(shaderProgram);
        if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) {
            throw 'Unable to initialize the shader program: ' + this.gl.getProgramInfoLog(shaderProgram);
        }

        this.shaderProgram = shaderProgram;
    }

    setVertices(vertices: number[], refKey: string, numComponent: number = 3) {
        const positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);
        this.vertexBuffer = positionBuffer;
        this.vertexRefKey = refKey;
        this.numComponent = numComponent;
        this.vertexCount = Math.floor(vertices.length / numComponent);
    }


    addUniform(key: string, value: GlMathBase) {
        this.uniforms.set(key, value);
    }

    private sendUniform() {
        if (!this.shaderProgram) {
            throw '请先初始化着色器程序';
        }
        this.uniforms.forEach((item, key) => {
            const uniformLocation = this.gl.getUniformLocation(this.shaderProgram as WebGLProgram, key);
            if (uniformLocation) {
                item.toUniform(this.gl, uniformLocation)
            }
        })
    }

    private sendVertices() {
        const vertexAttribLocation = this.gl.getAttribLocation(this.shaderProgram as WebGLProgram, this.vertexRefKey);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);
        this.gl.vertexAttribPointer(vertexAttribLocation, this.numComponent, this.type, false, 0, 0);
        this.gl.enableVertexAttribArray(vertexAttribLocation);
    }

    render() {
        this.createShaderProgram();
        this.sendVertices();
        this.gl.useProgram(this.shaderProgram);
        this.sendUniform();
        const offset = 0;
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, offset, this.vertexCount);
    }

}