import React, { useState, useRef, useEffect } from 'react';
import {
  ISchemaFieldComponentProps
} from '@formily/react-schema-renderer';
import { getComponentProps, getDisabled, getEnum } from '../util';
import CheckboxGroup from '../components/checkbox/group';
import { InputItem } from 'antd-mobile';
import './index.less';

export const CheckboxOther = (props: ISchemaFieldComponentProps) => {
  const newProps = {
    ...getComponentProps(props),
    disabled: getDisabled(props),
    value: props.value?.value || [],
    options: getEnum(props)
  };

  const otherText = (props.value?.otherText);
  const [inputAble, setInputAble] = useState<boolean>(
    props.value?.value?.includes('其他')
  );
  useEffect(() => {
    setInputAble(props.value?.value?.includes('其他'))
  }, [props.value?.value]);

  const inputRef = useRef<{
    focus: () => void;
  }>();

  newProps.onChange = (values: any) => {
    const index = values.indexOf('其他');
    const prevIndex = props.value.value.indexOf('其他');
    if (index < 0) {
      setInputAble(false);
    } else if (prevIndex < 0) {
      setInputAble(true);
      if (inputRef.current) {
        setTimeout(() => {
          inputRef.current.focus();
        });
      }
    }
    props.mutators.change({
      ...props.value,
      value: values,
    });
  };

  const onInputChange = (value: string) => {
    props.mutators.change({
      ...props.value,
      otherText: value
    });
  };

  return (
    <div>
      <CheckboxGroup {...newProps}></CheckboxGroup>
      <InputItem
        className={`checkboxOtherInput ${inputAble ? 'active' : ''}`}
        disabled={!inputAble}
        value={otherText}
        onChange={onInputChange}
        ref={(ref: any) => (inputRef.current = ref)}
      />
    </div>
  );
};

export default CheckboxOther;