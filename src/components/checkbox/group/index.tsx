import Checkbox from '../checkbox';
import { useState, useEffect } from 'react';
import React from 'react';

export interface CheckboxGroupProps {
  defaultValue?: any;
  disabled?: boolean;
  name?: string;
  options?: string[] | Array<{ label: string; value: string; disabled?: boolean }>;
  value?: any;
  onChange?: (values: any) => void;
  style?: React.CSSProperties;
  className?: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  defaultValue,
  disabled,
  name,
  options,
  value,
  onChange,
  children,
  className,
  style
}) => {
  const [checkedValue, setCheckedValue] = useState(value || defaultValue || []);

  const onCheckboxChange = (ev: { target: { value: any } }) => {
    const { value: checked } = ev.target;
    const values = [...checkedValue];
    const index = values.indexOf(checked);
    if (index > -1) {
      values.splice(index, 1);
    } else {
      values.push(checked);
    }
    if (!value) {
      // 如果不受控，组件内部设置 value 值
      setCheckedValue(values || []);
    }
    if (onChange) {
      onChange(values);
    }
  };

  useEffect(() => {
    if (value !== checkedValue) {
      setCheckedValue(value || []);
    }
  }, [value]);

  if (options && options.length > 0) {
    const radioArray = (options as any[]).map(
      (option: { value: any; disabled: any; style: any; label: any }) => {
        if (typeof option === 'string') {
          // 此处类型自动推导为 string
          return (
            <Checkbox
              key={option}
              disabled={disabled}
              value={option}
              checked={checkedValue.indexOf(option) > -1}
              onChange={onCheckboxChange}
              name={name}
              className={
                checkedValue.indexOf(option) > -1 ? 'formily-checkbox--checked' : ''
              }
            >
              <span className="am-checkbox-label">{option}</span>
            </Checkbox>
          );
        }
        // 此处类型自动推导为 { label: string value: string }
        return (
          <Checkbox
            key={`radio-group-value-options-${option.value}`}
            disabled={option.disabled || disabled}
            value={option.value}
            checked={checkedValue.indexOf(option.value) > -1}
            style={option.style}
            onChange={onCheckboxChange}
            name={name}
            className={
              checkedValue.indexOf(option.value) > -1 ? 'formily-checkbox--checked' : ''
            }
          >
            <span className="am-checkbox-label">{option.label}</span>
          </Checkbox>
        );
      }
    );
    return (
      <div className={className} style={style}>
        {radioArray}
      </div>
    );
  }

  // TODO 如果没有 options， 需要设置 context checkbox 组件从 context 获取参数，咱不支持
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default CheckboxGroup;
