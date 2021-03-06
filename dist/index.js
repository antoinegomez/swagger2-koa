// index.ts
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Koa2 middleware for validating against a Swagger document
 */
/*
 The MIT License

 Copyright (c) 2014-2017 Carl Ansley

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
/* tslint:disable:no-unused-variable */
// noinspection ES6UnusedImports
// import * as swagger from 'swagger2';
/* tslint:enable:no-unused-variable */
var validate_1 = require("./validate");
exports.validate = validate_1.default;
var ui_1 = require("./ui");
exports.ui = ui_1.default;
var router_1 = require("./router");
exports.router = router_1.default;
//# sourceMappingURL=index.js.map