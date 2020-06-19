import { GlMathBase, Matrix } from "./gl-math-base";


export class Mat3 implements GlMathBase, Matrix {
    private elements: Float32Array;

    constructor(data?: Iterable<number>) {
        if (data) {
            const dataArray = [...data];
            if (dataArray.length !== 9) {
                throw "3阶矩阵元素个数必须为9";
            }
            this.elements = new Float32Array(data);
        } else {
            this.elements = new Float32Array(9);
            this.elements.fill(0.0);
        }
    }
    toUniform(gl: WebGL2RenderingContext, location: WebGLUniformLocation): void {
        gl.uniformMatrix3fv(location, false, this.elements)
    }

}