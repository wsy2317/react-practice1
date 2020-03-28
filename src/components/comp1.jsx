import React from "react";

function Hello(props) {
  console.log(props);
  console.log(props.name);
  return <div>this is comp1 and props = {props.age}</div>
}

export default Hello;