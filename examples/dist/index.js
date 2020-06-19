/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./examples/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/index.ts":
/*!***************************!*\
  !*** ./examples/index.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/main */ \"./src/main.ts\");\n\nfunction init() {\n    const chart = new _src_main__WEBPACK_IMPORTED_MODULE_0__[\"ZlyV\"].pie.ZPie({ canvas: '#test' });\n    chart.drawPie([3, 4, 6, 3, 7, 2, 5]);\n}\ninit();\n\n\n//# sourceURL=webpack:///./examples/index.ts?");

/***/ }),

/***/ "./src/base/area-bounds.ts":
/*!*********************************!*\
  !*** ./src/base/area-bounds.ts ***!
  \*********************************/
/*! exports provided: AreaBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AreaBounds\", function() { return AreaBounds; });\nclass AreaBounds {\n    constructor(top = 0, right = 0, bottom = 0, left = 0) {\n        this.mtop = top;\n        this.mright = right;\n        this.mbottom = bottom;\n        this.mleft = left;\n    }\n    get top() {\n        return this.mtop;\n    }\n    get right() {\n        return this.mright;\n    }\n    get bottom() {\n        return this.mbottom;\n    }\n    get left() {\n        return this.mleft;\n    }\n    set(bounds) {\n        if (bounds.length != 4) {\n            throw '边界数组长度必须为4';\n        }\n        this.mtop = bounds[0];\n        this.mright = bounds[1];\n        this.mbottom = bounds[2];\n        this.mleft = bounds[3];\n    }\n    setLeft(left) {\n        this.mleft = left;\n    }\n    setTop(top) {\n        this.mtop = top;\n    }\n    setRight(right) {\n        this.mright = right;\n    }\n    setBottom(bottom) {\n        this.mbottom = bottom;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/base/area-bounds.ts?");

/***/ }),

/***/ "./src/base/chart.ts":
/*!***************************!*\
  !*** ./src/base/chart.ts ***!
  \***************************/
/*! exports provided: Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Chart\", function() { return Chart; });\n/* harmony import */ var _webgl_scene2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl/scene2d */ \"./src/webgl/scene2d.ts\");\n/* harmony import */ var _model_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/scene */ \"./src/model/scene.ts\");\n/* harmony import */ var _area_bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./area-bounds */ \"./src/base/area-bounds.ts\");\n/* harmony import */ var _webgl_gl_math_mat3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webgl/gl-math/mat3 */ \"./src/webgl/gl-math/mat3.ts\");\n\n\n\n\nclass Chart {\n    constructor(options) {\n        this.canvas = this.getCanvas(options.canvas);\n        this.scene = new _webgl_scene2d__WEBPACK_IMPORTED_MODULE_0__[\"ZlyScene2D\"]({\n            canvas: this.canvas\n        });\n        this.mchartArea = new _area_bounds__WEBPACK_IMPORTED_MODULE_2__[\"AreaBounds\"](0, this.canvas.offsetWidth, this.canvas.offsetHeight, 0);\n        console.log(this.canvas.offsetHeight, this.canvas.offsetHeight);\n        this.mu_matrix = new _webgl_gl_math_mat3__WEBPACK_IMPORTED_MODULE_3__[\"Mat3\"]([2 / this.canvas.offsetWidth, 0.0, 0.0, 0.0, -2 / this.canvas.offsetHeight, 0.0, -1.0, 1.0, 1.0]);\n        this.scene.on(_model_scene__WEBPACK_IMPORTED_MODULE_1__[\"SceneEvent\"].MOUSE_MOVE, (evt) => {\n            let [sceneX, sceneY] = this.scene.getSceneXY(evt.clientX, evt.clientY);\n        });\n    }\n    get canvasWidth() {\n        if (this.canvas) {\n            return this.canvas.offsetWidth;\n        }\n        else\n            return 0;\n    }\n    get canvasHeight() {\n        if (this.canvas) {\n            return this.canvas.offsetHeight;\n        }\n        else {\n            return 0;\n        }\n    }\n    get chartArea() {\n        return this.mchartArea;\n    }\n    get u_matrix() {\n        return this.mu_matrix;\n    }\n    getCanvas(canvas) {\n        if (typeof canvas == \"string\") {\n            const canvasElement = document.querySelector(canvas);\n            if (canvasElement && canvasElement.tagName == \"CANVAS\") {\n                return canvasElement;\n            }\n            else {\n                throw `传入元素选择器: ${canvas} 错误`;\n            }\n        }\n        else if (typeof canvas == \"object\") {\n            let isCanvas = false;\n            if (HTMLCanvasElement) {\n                if (canvas instanceof HTMLCanvasElement) {\n                    isCanvas = true;\n                }\n            }\n            else {\n                if (!!(canvas.nodeType === 1 && typeof canvas.nodeName === 'string' && canvas.nodeName === \"CANVAS\")) {\n                    isCanvas = true;\n                }\n            }\n            if (isCanvas) {\n                return canvas;\n            }\n            else {\n                throw `传入元素: ${canvas} 不是canvas元素`;\n            }\n        }\n        else {\n            throw `传入参数canvas错误`;\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/base/chart.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: ZPie, default, ZlyV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ZlyV\", function() { return ZlyV; });\n/* harmony import */ var _pie_pie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pie/pie */ \"./src/pie/pie.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ZPie\", function() { return _pie_pie__WEBPACK_IMPORTED_MODULE_0__[\"ZPie\"]; });\n\n\n\nconst ZlyV = {\n    pie: _pie_pie__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ZlyV);\n\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/model/scene.ts":
/*!****************************!*\
  !*** ./src/model/scene.ts ***!
  \****************************/
/*! exports provided: SceneEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SceneEvent\", function() { return SceneEvent; });\nvar SceneEvent;\n(function (SceneEvent) {\n    SceneEvent[\"MOUSE_MOVE\"] = \"mousemove\";\n})(SceneEvent || (SceneEvent = {}));\n\n\n//# sourceURL=webpack:///./src/model/scene.ts?");

/***/ }),

/***/ "./src/pie/pie.ts":
/*!************************!*\
  !*** ./src/pie/pie.ts ***!
  \************************/
/*! exports provided: ZPie, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _z_pie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./z-pie */ \"./src/pie/z-pie.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ZPie\", function() { return _z_pie__WEBPACK_IMPORTED_MODULE_0__[\"ZPie\"]; });\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    ZPie: _z_pie__WEBPACK_IMPORTED_MODULE_0__[\"ZPie\"]\n});\n\n\n//# sourceURL=webpack:///./src/pie/pie.ts?");

/***/ }),

/***/ "./src/pie/z-pie.ts":
/*!**************************!*\
  !*** ./src/pie/z-pie.ts ***!
  \**************************/
/*! exports provided: ZPie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ZPie\", function() { return ZPie; });\n/* harmony import */ var _base_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/chart */ \"./src/base/chart.ts\");\n\nclass ZPie extends _base_chart__WEBPACK_IMPORTED_MODULE_0__[\"Chart\"] {\n    drawPie(nums) {\n        let total = nums.reduce((a, b) => a + b);\n        let sum = 0;\n        let percents = [0, ...nums.map(item => { sum = sum + item; return sum / total; })];\n        const colors = ['vec4(1.0,0.0,0.0,1.0)', 'vec4(0.0,1.0,0.0,1.0)', 'vec4(0.0,0.0,1.0,1.0)', 'vec4(0.5,0.5,0.5,1.0)'];\n        percents.forEach((item, index) => {\n            if (index > 0) {\n                this.scene.addInstance({\n                    vertices: this.generateVertex(percents[index - 1], item),\n                    numComponent: 2,\n                    positionAttribute: 'a_Position',\n                    vertexShader: 'attribute vec2 a_Position;\\n' +\n                        'uniform mat3 u_matrix;\\n' +\n                        'void main() {\\n' +\n                        '   vec3 p_position= u_matrix * vec3(a_Position,1.0);\\n' +\n                        '   gl_Position = vec4(p_position,1.0);\\n' +\n                        '}\\n',\n                    fragmentShader: 'void main() {\\n' +\n                        `   gl_FragColor = ${colors[index % 4]};\\n` +\n                        '}\\n',\n                    uniforms: {\n                        u_matrix: this.u_matrix\n                    }\n                });\n            }\n        });\n    }\n    generateVertex(start, end) {\n        const N = 4096;\n        let bounds = this.chartArea;\n        let centerX = Math.floor((bounds.right - bounds.left) / 2);\n        let centerY = Math.floor((bounds.bottom - bounds.top) / 2);\n        let radius = (centerX > centerY ? centerY : centerX) * 0.8;\n        let vertices = [centerX, centerY];\n        for (let i = Math.floor(start * N); i <= Math.floor(end * N); i++) {\n            const theta = i * 2 * Math.PI / N;\n            let x = centerX + radius * Math.cos(theta);\n            let y = centerY + radius * Math.sin(theta);\n            vertices.push(x, y, centerX, centerY);\n        }\n        return vertices;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/pie/z-pie.ts?");

/***/ }),

/***/ "./src/webgl/gl-math/mat3.ts":
/*!***********************************!*\
  !*** ./src/webgl/gl-math/mat3.ts ***!
  \***********************************/
/*! exports provided: Mat3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Mat3\", function() { return Mat3; });\nclass Mat3 {\n    constructor(data) {\n        if (data) {\n            const dataArray = [...data];\n            if (dataArray.length !== 9) {\n                throw \"3阶矩阵元素个数必须为9\";\n            }\n            this.elements = new Float32Array(data);\n        }\n        else {\n            this.elements = new Float32Array(9);\n            this.elements.fill(0.0);\n        }\n    }\n    toUniform(gl, location) {\n        gl.uniformMatrix3fv(location, false, this.elements);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/webgl/gl-math/mat3.ts?");

/***/ }),

/***/ "./src/webgl/scene2d.ts":
/*!******************************!*\
  !*** ./src/webgl/scene2d.ts ***!
  \******************************/
/*! exports provided: ZlyScene2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ZlyScene2D\", function() { return ZlyScene2D; });\n/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl */ \"./src/webgl/webgl.ts\");\n\nclass ZlyScene2D {\n    constructor(options) {\n        this.canvas = options.canvas;\n        const gl = this.canvas.getContext('webgl2');\n        if (!gl) {\n            throw '浏览器不支持webgl2';\n        }\n        gl.canvas.width = this.canvas.offsetWidth;\n        gl.canvas.height = this.canvas.offsetHeight;\n        gl.viewport(0, 0, this.canvas.offsetWidth, this.canvas.offsetHeight);\n        this.gl = gl;\n        this.instances = new Map();\n        this.drawScene();\n    }\n    addInstance(options) {\n        const uuid = this.generateInstanceId();\n        const webglIns = new _webgl__WEBPACK_IMPORTED_MODULE_0__[\"Webgl2\"]({\n            gl: this.gl\n        });\n        webglIns.setVertices(options.vertices, options.positionAttribute, options.numComponent);\n        webglIns.setVertexShader(options.vertexShader);\n        webglIns.setFragmentShader(options.fragmentShader);\n        if (options.uniforms) {\n            Reflect.ownKeys(options.uniforms).forEach((key) => {\n                if (typeof key === 'string' && options.uniforms) {\n                    webglIns.addUniform(key, options.uniforms[key]);\n                }\n            });\n        }\n        this.instances.set(uuid, webglIns);\n        return uuid;\n    }\n    generateInstanceId() {\n        let now = new Date().getTime();\n        if (window.performance && typeof window.performance.now === 'function') {\n            now += window.performance.now();\n        }\n        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (letter) {\n            const r = (now + Math.random() * 16) % 16 | 0;\n            now = Math.floor(now / 16);\n            return (letter == 'x' ? r : (r & 0x3 | 0x8)).toString(16);\n        });\n        return uuid;\n    }\n    findInstanceById(id) {\n        return this.instances.get(id);\n    }\n    clearScene() {\n        this.gl.clearColor(0.0, 0.0, 0.0, 0.0);\n        // 清空canvas\n        this.gl.clear(this.gl.DEPTH_BUFFER_BIT | this.gl.COLOR_BUFFER_BIT);\n    }\n    drawScene() {\n        this.clearScene();\n        this.instances.forEach((ins) => {\n            ins.render();\n        });\n        requestAnimationFrame(() => {\n            this.drawScene();\n        });\n    }\n    on(type, handler) {\n        this.canvas.addEventListener(type, (event) => {\n            handler(event);\n        });\n    }\n    getSceneXY(clientX, clientY) {\n        const rect = this.canvas.getBoundingClientRect();\n        const sceneX = clientX - rect.left;\n        const sceneY = clientY - rect.top;\n        return [sceneX, sceneY];\n    }\n}\n\n\n//# sourceURL=webpack:///./src/webgl/scene2d.ts?");

/***/ }),

/***/ "./src/webgl/webgl.ts":
/*!****************************!*\
  !*** ./src/webgl/webgl.ts ***!
  \****************************/
/*! exports provided: Webgl2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Webgl2\", function() { return Webgl2; });\nclass Webgl2 {\n    constructor(options) {\n        this.vertexShader = null;\n        this.fragmentShader = null;\n        this.shaderProgram = null;\n        this.vertexBuffer = null;\n        this.vertexCount = 0;\n        this.vertexRefKey = 'zly_position';\n        this.numComponent = 3;\n        this.uniforms = new Map();\n        this.gl = options.gl;\n        this.type = options.gl.FLOAT;\n    }\n    loadShader(type, source) {\n        const shader = this.gl.createShader(type);\n        if (!shader) {\n            throw '创建shader失败';\n        }\n        this.gl.shaderSource(shader, source);\n        this.gl.compileShader(shader);\n        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {\n            const err = `编译shader失败: ${this.gl.getShaderInfoLog(shader)}`;\n            this.gl.deleteShader(shader);\n            throw err;\n        }\n        return shader;\n    }\n    setVertexShader(source) {\n        this.vertexShader = this.loadShader(this.gl.VERTEX_SHADER, source);\n    }\n    setFragmentShader(source) {\n        this.fragmentShader = this.loadShader(this.gl.FRAGMENT_SHADER, source);\n    }\n    createShaderProgram() {\n        if (this.vertexShader == null || this.fragmentShader == null) {\n            throw '请先设置顶点着色器和片元着色器';\n        }\n        const shaderProgram = this.gl.createProgram();\n        if (!shaderProgram) {\n            throw '创建着色器程序失败';\n        }\n        this.gl.attachShader(shaderProgram, this.vertexShader);\n        this.gl.attachShader(shaderProgram, this.fragmentShader);\n        this.gl.linkProgram(shaderProgram);\n        if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) {\n            throw 'Unable to initialize the shader program: ' + this.gl.getProgramInfoLog(shaderProgram);\n        }\n        this.shaderProgram = shaderProgram;\n    }\n    setVertices(vertices, refKey, numComponent = 3) {\n        const positionBuffer = this.gl.createBuffer();\n        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);\n        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);\n        this.vertexBuffer = positionBuffer;\n        this.vertexRefKey = refKey;\n        this.numComponent = numComponent;\n        this.vertexCount = Math.floor(vertices.length / numComponent);\n    }\n    addUniform(key, value) {\n        this.uniforms.set(key, value);\n    }\n    sendUniform() {\n        if (!this.shaderProgram) {\n            throw '请先初始化着色器程序';\n        }\n        this.uniforms.forEach((item, key) => {\n            const uniformLocation = this.gl.getUniformLocation(this.shaderProgram, key);\n            if (uniformLocation) {\n                item.toUniform(this.gl, uniformLocation);\n            }\n        });\n    }\n    sendVertices() {\n        const vertexAttribLocation = this.gl.getAttribLocation(this.shaderProgram, this.vertexRefKey);\n        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);\n        this.gl.vertexAttribPointer(vertexAttribLocation, this.numComponent, this.type, false, 0, 0);\n        this.gl.enableVertexAttribArray(vertexAttribLocation);\n    }\n    render() {\n        this.createShaderProgram();\n        this.sendVertices();\n        this.gl.useProgram(this.shaderProgram);\n        this.sendUniform();\n        const offset = 0;\n        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, offset, this.vertexCount);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/webgl/webgl.ts?");

/***/ })

/******/ });