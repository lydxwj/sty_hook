import React, { useState, useRef, useEffect } from 'react';
/* 模拟数据交互 */
function getUserInfo(a){
  return new Promise((resolve)=>{
    console.log('getUserInfo')
      setTimeout(()=>{ 
         resolve({
             name: '小美' + a,
             age: +a,
         })
      },500)
  })
}

const DemoEffect = ({ a }) => {
  const [ userMessage , setUserMessage ] = useState({})
  const div= useRef()
  const [number, setNumber] = useState(0)
  /* 模拟事件监听处理函数 */
  const handleResize =()=>{}
  /* useEffect使用 ，这里如果不加限制 ，会是函数重复执行，陷入死循环*/
  useEffect(()=>{
      /* 请求数据 */
    getUserInfo(a + number).then(res=>{
      setUserMessage(res)
    })
     /* 操作dom  */
    console.log(div.current) /* div */
  /* 只有当props->a和state->number改变的时候 ,useEffect副作用函数重新执行 ，如果此时数组为空[]，证明函数只有在初始化的时候执行一次相当于componentDidMount */
  },[ a ,number ])
  useEffect(()=>{
    /* 事件监听等 */
    window.addEventListener('resize', handleResize)
    return () => {
      console.log('componentWillUnmount')
      window.removeEventListener('resize', handleResize)
    }
  })
  return (<div className="demo_box" ref={div} >
      <div className="title">useEffect异步加载数据，事件的监听与取消</div>
      <p>name:{ userMessage?.name }</p>
      <p>age:{ userMessage?.age }</p>
      <button onClick={ ()=> setNumber(number + 1) } >+1</button>
  </div>)
}
export default DemoEffect;