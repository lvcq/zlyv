import { Chart } from "../base/chart";
import { PieInitOptions } from "../model/chart";

export class ZPie extends Chart {

    private sectors: Array<Sector>;
    private source: number[];
    constructor(options: PieInitOptions) {
        super(options);
        this.sectors = [];
        this.source = options.data || [];
    }

    private generateSectors() {
        if (!this.source || !this.source.length) {
            throw '请先设置数据';
        }
        this.sectors = [];
    }

    drawPie(nums: number[]) {
        let total = nums.reduce((a, b) => a + b);
        let sum = 0;
        let percents = [0, ...nums.map(item => { sum = sum + item; return sum / total; })];
        const colors = ['vec4(1.0,0.0,0.0,1.0)', 'vec4(0.0,1.0,0.0,1.0)', 'vec4(0.0,0.0,1.0,1.0)', 'vec4(0.5,0.5,0.5,1.0)']
        percents.forEach((item, index) => {
            if (index > 0) {
                this.scene.addInstance({
                    vertices: this.generateVertex(percents[index - 1], item),
                    numComponent: 2,
                    positionAttribute: 'a_Position',
                    vertexShader: 'attribute vec2 a_Position;\n' +
                        'uniform mat3 u_matrix;\n' +
                        'void main() {\n' +
                        '   vec3 p_position= u_matrix * vec3(a_Position,1.0);\n' +
                        '   gl_Position = vec4(p_position,1.0);\n' +
                        '}\n',
                    fragmentShader: 'void main() {\n' +
                        `   gl_FragColor = ${colors[index % 4]};\n` +
                        '}\n',
                    uniforms: {
                        u_matrix: this.u_matrix
                    }
                });
            }
        });
    }

    private generateVertex(start: number, end: number) {
        const N = 4096;
        let bounds = this.chartArea;
        let centerX = Math.floor((bounds.right - bounds.left) / 2);
        let centerY = Math.floor((bounds.bottom - bounds.top) / 2);
        let radius = (centerX > centerY ? centerY : centerX) * 0.8;
        let vertices = [centerX, centerY];
        for (let i = Math.floor(start * N); i <= Math.floor(end * N); i++) {
            const theta = i * 2 * Math.PI / N;
            let x = centerX + radius * Math.cos(theta);
            let y = centerY + radius * Math.sin(theta);
            vertices.push(x, y, centerX, centerY);
        }
        return vertices;
    }
}


class Sector {

}
