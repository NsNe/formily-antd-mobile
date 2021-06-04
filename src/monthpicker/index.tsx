import React from 'react';
import { Picker } from 'antd-mobile';
import {
  ISchemaFieldComponentProps
} from '@formily/react-schema-renderer';
import { range } from 'lodash';
import { getComponentProps, getDisabled } from '../util';
import PickerItem from '../PickerItem';

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];

export const MonthPicker = (props: ISchemaFieldComponentProps) => {
  const newProps = {
    ...getComponentProps(props),
    disabled: getDisabled(props)
  };

  newProps.onChange = (val: any) => props.mutators.change(val);

  const onClear = e => {
    e.stopPropagation();
    props.mutators.change(undefined);
  };

  return (
    <Picker
      data={[
        range(1, 13).map(i => ({ label: i, value: i })),
        [{ label: '月', value: '月' }],
      ]}
      cascade={false}
      // data={seasons}
      cols={2}
      {...newProps}
      extra={newProps.placeholder || newProps.extra}
    >
      <PickerItem className="formily-numpicker__listItem" clear={props.value} onClear={onClear}/>
    </Picker>
  );
};

export default MonthPicker;