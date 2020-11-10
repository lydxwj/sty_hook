import React from 'react'

import useFormChange from './useFormChange'

const selector = ['嘿嘿', '哈哈', '嘻嘻']
function Form() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, setFormData, reset] = useFormChange()
    const {
        name,
        options,
        select
    } = formData
    console.log(name)
    return <div className='formbox demo_box'>
        <div className="title">自定义hook更新表单项,useRef可以用作缓存数据</div>
        <p className='des'>
          文本框：
          <input
            name='value1'
            title='名称'
            type='text'
            placeholder='请输入名称'
            value={name||''}
            onChange={(e) => setFormData('name', e?.target?.value)}
          />
        </p>
        
        <p className='des'>
          单选：
          <input name="radio" checked={options === 'option1'} onChange={(e) => setFormData('options', e.target.value)} value="option1" type="radio" label="单选项一" />
          <input name="radio" checked={options === 'option2'} onChange={(e) => setFormData('options', e.target.value)} value="option2" type="radio" label="单选项二" />
        </p>
        <p className='des' >
          下拉框：
          <select onChange={(e) => setFormData('select',e.target.value)} value={select} >
            { selector.map(item => {
              return (<option key={item} value={item}>{item}</option>)
            })}
          </select>
        </p>
        <div className='btns' >
            <button type='primary' onClick={() => console.log(formData)} >提交</button>
            <button className='reset' onClick={reset} >重置</button>
        </div>
    </div>
}

export default Form;