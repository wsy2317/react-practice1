import React from "react";

/*手写Bind*/
function myBind() {
  Function.prototype.myBind = function (context, ...args) {
    let fn = this;
    console.log(fn);
    return function (...rest) {
      return fn.apply(context, [...args, ...rest]);
    }
  };
  let foo = function () {
    console.log("222222222222222222222222");
  };
  let xx = {
    a: 1,
    b: 2
  };
  let boo = foo.myBind(xx);
  boo();
  return <div/>
}

function ccc() {
  Array.prototype.myFind = function (func) {
    let me = this;
    for (let i = 0; i < me.length; i++) {
      if (func(me[i])) {
        return me[i];
      }
    }
  };
  var xxx = [1, 2, 3, 9, 10, 20].myFind(function (item) {
    return item > 10;
  });
  console.log(xxx);
}

function myMapFunction() {
  Array.prototype.myMap = function (func) {
    if (typeof func == 'function') {
      throw new TypeError();
    }
    let me = this;
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      newArr.push(func(me[i]));
    }
    return newArr;
  };
  let wsy = [1, 2, 3, 4, 5].myMap(function (item) {
    return item * 2;
  });

  function www() {
  }

  console.log(wsy);
  console.log(typeof www);
}

export default ccc();
