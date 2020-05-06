import React from "react";

function FuncComp({age,num,name,unmountMe}) {
  return  <div>this is comp1 and props = {age}
            <button onClick={unmountMe}/>
          </div>
}

export default FuncComp;