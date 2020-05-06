import React from 'react';
import FuncComp from "@/components/wsy/func-component";
import ButtonComponent from "@/components/wsy/button-component";

const App = () => {

  const dog = {
    age: 33,
    name: "teddy",
    count: "US"
  };
  const cat = {
    age: 100,
    name: "cat",
    num: 1000
  };

  return (
    <div>
      <div id="athena-demo">This is athena-demo</div>
      <div>
        <FuncComp {...cat}/>
        <ButtonComponent {...cat}/>
      </div>
    </div>
  );
};

export default App;