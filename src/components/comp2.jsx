import React from "react";

class Hello2 extends React.Component {
  constructor(props) {
    super(props);
//    console.log(props.age);
    console.log(props.age, `hahaha         ${props.name}`);
    this.state = {
      qqq: 111,
      www: 222,
      eee: 333
    };
  }

  clickfunction() {
//    console.log(document.getElementById("aa").value);
    this.setState({
      qqq: this.state.qqq + 1
    });
    console.log(this.state.qqq);
  }

  changefunction() {
    this.setState({
      qqq: this.state.qqq + 1
    })
  }

  render() {
    return <div>this is comp2 {this.props.name} {this.props.age}
      <hr/>
      <input id="aa" style={{
        borderColor: 'red',
        height: '30px'
      }} value={this.state.qqq} onChange={() => this.changefunction()}/>
      <button onClick={() => this.clickfunction()}>button1
      </button>
    </div>;
  }
}

export default Hello2;
