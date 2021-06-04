import { DatePicker as AntdDatePicker, List } from 'antd-mobile';
import React from 'react';
import {
  connect,
  registerFormField,
  ISchemaFieldComponentProps
} from '@formily/react-schema-renderer';
import { getComponentProps, getDisabled } from '../util';
import _ from 'lodash';
import './style.less';
import PickerItem from '../PickerItem';


export const DatePicker = (props: ISchemaFieldComponentProps) => {

  const newProps = {
    extra: '请选择日期',
    ...getComponentProps(props),
    disabled: getDisabled(props),
    value: props.value ? new Date(_.toNumber(props.value)) : undefined
  };

  newProps.onChange = (val: any) =>
    props.mutators.change(val.getTime());

  const onClear = e => {
    e.stopPropagation();
    props.mutators.change(undefined);
  }

  return (
    <AntdDatePicker
      mode="date"
      {...newProps}
      extra={newProps.placeholder || newProps.extra}
    >
      <PickerItem
        className="formily-numpicker__listItem"
        onClear={onClear}
        clear={!!props.value}
      />
    </AntdDatePicker>
  );
};

export default DatePicker;