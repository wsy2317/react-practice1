/*实现Bind（Polyfill）*/
Function.prototype.myBind = function (context, ...args) {
  let fn = this;
  console.log(fn);
  return function (...rest) {
    /*apply第一个参数是指定this*/
    return fn.apply(context, [...args, ...rest]);
  }
};
