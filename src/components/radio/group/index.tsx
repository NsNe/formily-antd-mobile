import Radio from '../radio';
import { useState, useEffect, ChangeEvent } from 'react';
import React from 'react';

export interface RadioGroupProps {
  defaultValue?: any;
  disabled?: boolean;
  name?: string;
  options?: string[] | Array<{ label: string; value: string; disabled?: boolean }>;
  value?: any;
  onChange?: (e: Event) => void;
  style?: React.CSSProperties;
  className?: string;
}

function getCheckedValue(children: React.ReactNode) {
  let value = null;
  let matched = false;
  React.Children.forEach(children, (radio: any) => {
    if (radio && radio.props && radio.props.checked) {
      value = radio.props.value;
      matched = true;
    }
  });
  return matched ? { value } : undefined;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
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
  const initCheckedValue = () => {
    if (value !== undefined) {
      return value;
    }
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    const checkedValue = getCheckedValue(children);
    return checkedValue && checkedValue.value;
  };

  const [checkedValue, setCheckedValue] = useState(initCheckedValue());

  const onRadioChange = ev => {
    const lastValue = checkedValue;
    const checked = ev.target.value;
    if (!value) {
      // 如果不受控，组件内部设置 value 值
      setCheckedValue(checked);
    }

    if (onChange && checked !== lastValue) {
      onChange(ev);
    }
  };

  useEffect(() => {
    if (value !== checkedValue) {
      setCheckedValue(value);
    }
  }, [value]);

  if (options && options.length > 0) {
    const radioArray = (options as any[]).map(
      (option: { value: any; disabled: any; style: any; label: any }) => {
        if (typeof option === 'string') {
          // 此处类型自动推导为 string
          return (
            <Radio
              key={option}
              disabled={disabled}
              value={option}
              checked={checkedValue === option}
              onChange={onRadioChange}
              name={name}
              className={checkedValue === option ? 'formily-radio--checked' : ''}
            >
              <span className="am-radio-label">{option}</span>
            </Radio>
          );
        }
        // 此处类型自动推导为 { label: string value: string }
        return (
          <Radio
            key={`radio-group-value-options-${option.value}`}
            disabled={option.disabled || disabled}
            value={option.value}
            checked={checkedValue === option.value}
            style={option.style}
            onChange={onRadioChange}
            name={name}
            className={checkedValue === option.value ? 'formily-radio--checked' : ''}
          >
            <span className="am-radio-label">{option.label}</span>
          </Radio>
        );
      }
    );
    return (
      <div className={className} style={style}>
        {radioArray}
      </div>
    );
  }

  // TODO 如果没有 options， 需要设置 context ，radio 组件从 context 获取参数，咱不支持
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default RadioGroup;
