import React from "react";

class DebounceThrottle extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }


  /*防抖*/
  static debounceFunction() {
    let timer = null;
    console.log(555555555555555555);

//    return function () {
//      console.log(timer);
//      let context = this;
//      if (timer) {
//        clearTimeout(timer);
//      }
//      timer = setTimeout(function () {
//        func.call(context);
//        timer = null;
//      }, delay);
//    };
  }


  /*节流*/
  static throttleFunction(func, delay) {
    let timer = null;
    return function () {
      let context = this;
      if (!timer) {
        func.apply(context, arguments);
        timer = setTimeout(function () {
          timer = null;
        }, delay);
      } else {
      }
    }
  }
}

export default DebounceThrottle;
