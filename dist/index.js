"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=c(function(R,s){
var t=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-gammaincinv/dist');function N(e,r,n){return t(r)||t(n)||t(e)||r<0||n<=0||e<0||e>1?NaN:r===0?0:1/n*v(e,r)}s.exports=N
});var o=c(function(j,f){
var m=require('@stdlib/utils-constant-function/dist'),y=require('@stdlib/math-base-special-gammaincinv/dist'),g=require('@stdlib/stats-base-dists-degenerate-quantile/dist').factory,u=require('@stdlib/math-base-assert-is-nan/dist');function x(e,r){if(u(e)||u(r)||e<0||r<=0)return m(NaN);if(e===0)return g(0);return n;function n(i){return u(i)||i<0||i>1?NaN:1/r*y(i,e)}}f.exports=x
});var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=a(),F=o();d(q,"factory",F);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
