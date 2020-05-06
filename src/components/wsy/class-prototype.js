/*class and prototype*/
import React from "react";

function Plane() {
  this.wings = 2;
  this.speed = 500;
  this.altitude = 0;
}

Plane.prototype.fly = function () {
  this.altitude = 3000;
};
const myPlane = new Plane();

function Jet() {
  this.speed = 1000;
}

Jet.prototype = new Plane();
let myJet = new Jet();
console.log(myJet);

class Human {
  constructor(props) {
    /*类实例属性*/
    this.height = 185;
    this.weight = 160;
  }

  /*类静态方法*/
  static get sayHello() {
    return console.log("hello");
  }
  static set setHello(asdf) {
    this.ppp = asdf;
  }
  static ppp = 30;

  /*类实例方法*/
  walk(param) {
    param = param + 100;
    console.log(param);
  }

  static setHello(asdf) {

  }
}

const ace = new Human();
ace.walk(1);
Human.sayHello;
Human.setHello(1000);
console.log(Human.ppp);
