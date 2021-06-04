import React from 'react';
import { ISchemaFieldComponentProps } from '@formily/react-schema-renderer'
import { TextareaItem } from 'antd-mobile';
import { getComponentProps, getDisabled } from '../util';
import './style.less';

export const Textarea = (props: ISchemaFieldComponentProps) => {

  const newProps = {
    ...getComponentProps(props),
    disabled: getDisabled(props),
    value: props.value,
    autoHeight: true,
    rows: 3,
  };

  newProps.onChange = (val: any) => props.mutators.change(val);

  return (
    <TextareaItem {...newProps} className={`formily-textarea ${newProps.className}`}></TextareaItem>
  )
}

export default Textarea;