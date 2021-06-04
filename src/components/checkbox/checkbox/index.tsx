import { Checkbox as AntdCheckbox } from 'antd-mobile';
import React from 'react';
import './style.less';

const Checkbox = (props: any) => {


  return <AntdCheckbox {...props} className={`formily-checkbox ${props.className ? props.className : ''}`}/>
}

export default Checkbox;