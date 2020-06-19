import { GlMathBase, Vector } from "./gl-math-base";

export class Vec4 implements GlMathBase, Vector {
    private component0: number;
    private component1: number;
    private component2: number;
    private component3: number;

    constructor(c1: number = 0, c2: number = 0, c3: number = 0, c4: number = 0) {
        this.component0 = c1;
        this.component1 = c2;
        this.component2 = c3;
        this.component3 = c4;
    }


    toUniform(gl: WebGL2RenderingContext, location: WebGLUniformLocation): void {
        gl.uniform1fv(location, new Float32Array([this.component0, this.component1, this.component2, this.component3]));
    }

    add(b: Vec4, c?: Vec4): Vec4 {
        return new Vec4();
    }

}