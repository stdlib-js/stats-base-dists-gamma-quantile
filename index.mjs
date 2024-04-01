// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaincinv@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";import{factory as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-quantile@v0.2.1-esm/index.mjs";function r(t,n,i){return s(n)||s(i)||s(t)||n<0||i<=0||t<0||t>1?NaN:0===n?0:1/i*e(t,n)}function d(t,r){return s(t)||s(r)||t<0||r<=0?n(NaN):0===t?i(0):function(n){if(s(n)||n<0||n>1)return NaN;return 1/r*e(n,t)}}t(r,"factory",d);export{r as default,d as factory};
//# sourceMappingURL=index.mjs.map
