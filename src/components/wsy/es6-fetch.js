/*ES6 fetch()*/
"use strict";
export default class EsFetch {
  static request() {
//    let options = {
//      headers: {
//        'Content-Type': 'application/json'
//      },
//      mode: 'cors'
//    };
    return fetch('http://api.icndb.com/jokes/randoom/10/', options);
  }
}
