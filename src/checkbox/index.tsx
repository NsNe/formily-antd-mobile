import React from 'react';
import { ISchemaFieldComponentProps } from '@formily/react-schema-renderer';
import { getComponentProps, getDisabled, getEnum } from '../util';
import CheckboxGroup from '../components/checkbox/group';


export const Checkbox = (props: ISchemaFieldComponentProps) => {
  const newProps = {
    ...getComponentProps(props),
    disabled: getDisabled(props),
    value: props.value,
    options: getEnum(props),
  };

  newProps.onChange = (values: any) => {
    props.mutators.change(values);
  }

  return (
    <CheckboxGroup {...newProps} ></CheckboxGroup>
  )
}

export default Checkbox;