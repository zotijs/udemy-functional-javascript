// function curry(fn,arity = fn.length) {
//     return (function nextCurried(prevArgs){
//         return function curried(nextArg){
//             var args = [ ...prevArgs, nextArg ];
//             if (args.length >= arity) {
//                 return fn( ...args );
//             }
//             else {
//                 return nextCurried( args );
//             }
//         };
//     })( [] );
// }

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

const curry = (fn, arity = fn.length) =>
  (nextCurried = prevArgs =>
    (curried = nextArg => {
      var args = [...prevArgs, nextArg];
      if (args.length >= arity) {
        return fn(...args);
      } else {
        return nextCurried(args);
      }
    }))([]);

const pipe = (...fns) => x =>
  fns.reduce(function(v, f) {
    return f(v);
  }, x);

const compose = (...fns) => x =>
  fns.reduceRight(function(v, f) {
    return f(v);
  }, x);
