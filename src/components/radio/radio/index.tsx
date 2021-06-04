import { Radio as AntdRadio } from 'antd-mobile';
import './style.less';
import React from 'react';

const Radio = (props: any) => {
  return <AntdRadio {...props} className={`formily-radio ${props.className}`}/>
}

export default Radio;