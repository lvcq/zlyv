
export interface GlMathBase {
    toUniform(gl: WebGL2RenderingContext, location: WebGLUniformLocation): void;
}

export interface Vector {
    add(b: Vector, c?: Vector): Vector;
}

export interface Matrix{
    
}