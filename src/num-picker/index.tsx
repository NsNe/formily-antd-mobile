import React from 'react';
import { Picker } from 'antd-mobile';
import { ISchemaFieldComponentProps } from '@formily/react-schema-renderer';
import { range } from 'lodash';
import { getComponentProps, getDisabled } from '../util';
import PickerItem from '../pick-item';

export const NumPicker = (props: ISchemaFieldComponentProps) => {
  const newProps = {
    extra: '请选择数量',
    ...getComponentProps(props),
    disabled: getDisabled(props),
    value: props.value ? [props.value] : []
  };

  newProps.onChange = (val: any) => props.mutators.change(val?.[0]);

  const onClear = e => {
    e.stopPropagation();
    props.mutators.change(undefined);
  };

  return (
    <Picker
      data={range(1, 100).map(i => ({ label: i, value: i }))}
      cols={1}
      {...newProps}
      extra={newProps.placeholder || newProps.extra}
    >
      <PickerItem
        className="formily-numpicker__listItem"
        onClear={onClear}
        clear={!!props.value}
      />
    </Picker>
  );
};

export default NumPicker;
