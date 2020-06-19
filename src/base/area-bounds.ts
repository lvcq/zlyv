export class AreaBounds {
    private mtop: number;
    private mright: number;
    private mbottom: number;
    private mleft: number;

    get top() {
        return this.mtop;
    }

    get right() {
        return this.mright;
    }

    get bottom() {
        return this.mbottom;
    }

    get left() {
        return this.mleft;
    }

    constructor(top: number = 0, right: number = 0, bottom: number = 0, left: number = 0) {
        this.mtop = top;
        this.mright = right;
        this.mbottom = bottom;
        this.mleft = left;
    }

    set(bounds: number[]) {
        if (bounds.length != 4) {
            throw '边界数组长度必须为4';
        }
        this.mtop = bounds[0];
        this.mright = bounds[1];
        this.mbottom = bounds[2];
        this.mleft = bounds[3];
    }

    setLeft(left: number) {
        this.mleft = left;
    }

    setTop(top: number) {
        this.mtop = top;
    }
    setRight(right: number) {
        this.mright = right;
    }
    setBottom(bottom: number) {
        this.mbottom = bottom;
    }
}