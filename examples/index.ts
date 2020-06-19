import { ZlyV } from '../src/main';

function init() {
    const chart = new ZlyV.pie.ZPie({ canvas: '#test' });
    chart.drawPie([3, 4, 6, 3, 7, 2, 5])
}
init();