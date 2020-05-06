import React from "react";
import DebounceThrottle from '@/components/wsy/debounce-throttle.jsx';
import MyPromise from '@/components/wsy/es6-promise.js';
import MyFetch from '@/components/wsy/es6-fetch.js';
import {jsObject1, jsObject2} from "@/components/wsy/js-object";
import myArray from "@/components/wsy/js-array";
import ccc from "@/components/wsy/my-bind";
import FuncComp from "@/components/wsy/func-component";

class ButtonComponent extends React.Component {

  constructor(props) {
    super(props);
    console.log(props.age, `hahaha         ${props.name}`);
    this.state = {
      qqq: 11100,
      www: 222,
      eee: 333,
      renderChild: true
    };

    this.cat = {
      age: 10000,
      name: "cat",
      num: 1000
    };
    this.handleChildUnmount = this.handleChildUnmount.bind(this);
//    this.handle = this.handle.bind(this);
  }

  componentDidMount() {
    jsObject1();
    jsObject2();
    myArray();
  }

  changeFunction(e) {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    })
  }

  clickFunction() {
    this.setState({
      qqq: this.state.qqq + 1
    });
    console.log(this.state.qqq);
  }

  handle() {
    console.log(this.state.qqq);
  };

  promiseFunction(arg) {
    console.log(arg);
    MyPromise.request().then((data) => {
      console.log(data[0]);
      console.log(data[1]);
      console.log(data);
    }).catch((e) => {
      console.log(e);
    });
  }

  fetchFunction(arg) {
    console.log(arg);
    MyFetch.request().then((res) => {
      res.json().then((data) => {
        console.log(data.value);
      })
    }).catch((err) => {
      console.log(err);
    });
  }
  handleChildUnmount(){
    this.setState({renderChild: false});
  }
  render() {
    return <div>this is comp2 {this.props.name} {this.props.age}
      <hr/>
      <input id="aa" style={{
        borderColor: 'red',
        height: '30px'
      }} placeholder='ChangeFunc' value={this.state.qqq} onChange={(e) => this.changeFunction(e)}/>
      <button onClick={() => {
        this.clickFunction();
      }}>ClickButton
      </button>
      <button onClick={DebounceThrottle.debounceFunction(this.handle.bind(this), 1000)}>DebounceButton
      </button>
      <button onClick={DebounceThrottle.throttleFunction(this.handle, 1000)}>ThrottleButton
      </button>


      <button onClick={() => {
        this.promiseFunction("123");
      }}>PromiseButton
      </button>
      <button onClick={() => {
        this.fetchFunction("123");
      }}>FetchButton
      </button>

      {this.state.renderChild?<FuncComp {...this.cat} unmountMe={()=>{this.handleChildUnmount();}}/>:null}

    </div>;
  }
}

export default ButtonComponent;
