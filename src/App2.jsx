import React, {useState} from 'react';
import style from './styles.module.css';
function App2() {
  const [color, setColor] = useState();
  return (
    <div className={style.container}>
    <div>
      <label htmlFor="">选择第一个颜色</label> <input type="color" name="" id="" className="colorPick"/>
    </div>
    <div>
      <label htmlFor="">选择第二个颜色</label> <input type="color" name="" id="" className="colorPick"/>
    </div>
  </div>);
}

export default App2;