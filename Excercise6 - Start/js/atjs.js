// const pipe = function(...fns) {
//     return function(x) {
//         return fns.reduce(function(v, f) {
//             return f(v);
//         }, x);
//     }
// };

// const compose = function(...fns) {
//     return function(x) {
//         return fns.reduceRight(function(v, f) {
//             return f(v);
//         }, x);
//     }
// };

const pipe = (...fns) => x =>
  fns.reduce(function(v, f) {
    return f(v);
  }, x);

const compose = (...fns) => x =>
  fns.reduceRight(function(v, f) {
    return f(v);
  }, x);
