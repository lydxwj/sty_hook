import React, { useState } from 'react';

const DemoState = (props) => {
  /* number为此时state读取值 ，setNumber为派发更新的函数 */
  let [number, setNumber] = useState(0) /* 0为初始值 */
  return (
    <div className="demo_box">
      <div className="title">useState</div>
      <p>{ number }</p>
      <button onClick={ ()=> {
        setNumber(number+1)
        console.log(number) /* 这里的number是不能够即时改变的  */
      } } >加1</button>
    </div>)
}
export default DemoState;
