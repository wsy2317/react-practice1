/*ES6 Promise*/
export default class EsPromise {
  static request() {
    let myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('YYYYYYYYYYYYYYYY');
      }, 1000);
      setTimeout(() => {
        reject('NNNNNNNNNNNNNNNN');
      }, 2000);
    });
    let myPromise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('1111111111111111');
      }, 500);
      setTimeout(() => {
        reject('0000000000000000');
      }, 1000);
    });
    return Promise.all([myPromise, myPromise2]);
  }

  static mypromise() {
    let sss = new Promise(function (resolve, reject) {
      setTimeout(function (n) {
        resolve(1341234);
      }, 1000);
    })
  }
}