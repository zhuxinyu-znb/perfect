// /**
//  * 团队公用类库
//  *  _.map([],function(){})
//  *  _([]).map(function)
//  */
// const ArrayProto = Array.prototype;
// const push = ArrayProto.push;
// const _ = function(obj): void {
//   if (!(this instanceof _)) return new _(obj);
//   this._wrapped = obj;
// };
// // 框架组成以外的核心业务逻辑
// _.throttle = function(fn, wait = 500) {
//   let timer;
//   return function(...args) {
//     if (timer == null) {
//       timer = setTimeout(() => {
//         timer = null;
//       }, wait);
//       return fn.apply(this, args);
//     }
//   };
// };
// _.sum = (a: number, b: number) => {
//   if (a === 1) {
//     return 1;
//   }
//   return a + b;
// };
// _.map = function(wrapped, callback) {
//   console.log("map");
//   console.log("🍊", wrapped);
//   console.log("🍎", callback);
// };
// _.each = function(obj, callback) {
//   if (Array.isArray(obj)) {
//     for (const item of obj) {
//       callback && callback.call(_, item);
//     }
//   }
// };
// _.isFunction = function(obj) {
//   return typeof obj === "function" || false;
// };
// _.functions = function(obj) {
//   const names = [];
//   for (const key in obj) {
//     if (_.isFunction(obj[key])) names.push(key);
//   }
//   return names.sort();
// };
// // obj == _ ->functions ["each","map","mixin"]
// _.mixin = function(obj) {
//   _.each(_.functions(obj), name => {
//     const func = (_[name] = obj[name]);
//     _.prototype[name] = function() {
//       const args = [this._wrapped];
//       push.apply(args, arguments);
//       return func.apply(_, args);
//     };
//   });
//   return _;
// };
// _.mixin(_);
// export default _;
