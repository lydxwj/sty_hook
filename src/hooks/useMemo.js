import React, { useState, useMemo } from 'react';


const DemoUseMemo=()=>{
  const [ number ,setNumber ] = useState(0)
  const newLog = useMemo(()=>{
      const log =()=>{
          /* 点击span之后 打印出来的number 不是实时更新的number值 */
          console.log(number)
      }
      return log
    /* [] 没有 number 时，log打印出来的number 不是实时更新的number值 */  
  },[number])
  return <div className="demo_box">
      <div className="title">useMemo性能优化，设置更新条件</div>
      <p>{number}</p>
      <button onClick={()=>newLog()} >打印</button>
      <button onClick={ ()=> setNumber( number + 1 )  } >增加</button>
  </div>
}
export default DemoUseMemo;