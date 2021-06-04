import React from 'react';
import { ISchemaFieldComponentProps } from '@formily/react-schema-renderer'
import { InputItem } from 'antd-mobile';
import { getComponentProps, getDisabled } from '../util';
import './style.less';

export const Input = (props: ISchemaFieldComponentProps) => {

  const newProps = {
    ...getComponentProps(props),
    disabled: getDisabled(props),
    value: props.value,
  };

  newProps.onChange = (val: any) => props.mutators.change(val);

  return (
    <InputItem {...newProps} className={`formily-input ${newProps.className || ''}`}></InputItem>
  )
}

export default Input;