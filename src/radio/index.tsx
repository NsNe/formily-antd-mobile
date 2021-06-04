import React from 'react';
import { ISchemaFieldComponentProps } from '@formily/react-schema-renderer';
import { RadioGroup } from '../components/radio';
import { getComponentProps, getDisabled, getEnum } from '../util';


export const Radio = (props: ISchemaFieldComponentProps) => {
  const newProps = {
    ...getComponentProps(props),
    disabled: getDisabled(props),
    value: props.value,
    options: getEnum(props),
  };

  newProps.onChange = (e: { target: { value: any; }; }) => props.mutators.change(e.target.value);

  return (
    <RadioGroup {...newProps} ></RadioGroup>
  )
}

export default Radio;