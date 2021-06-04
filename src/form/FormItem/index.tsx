import React from 'react';
import { getRegistry, ISchemaFieldComponentProps } from '@formily/react-schema-renderer';
import _ from 'lodash';
import './style.less';

export const FormItem = (props: ISchemaFieldComponentProps) => {

  // 如果是表单组件，才走formitem，否则走各自的组件
  const registry = getRegistry();
  if (!Object.keys(registry.fields).includes(props?.props?.['x-component'])) {
    return <>{props.children}</>;
  }
  if (_.get(props, 'props["x-component"]') === 'matrix') {
    return null;
  }

  // 双端展示不同的标题，如果是移动端，优先展示友好的问题标题
  const title =
  _.get(props, 'props["x-props"].metadata.name') ||
  _.get(props, 'props.title');

  // 根据标题判断是否嵌套，并添加对应的 css 样式
  let nestForm = false;
  if (/^[1-9].[1-9].*$/.test(props.props.title)) {
    nestForm = true;
  }

  return (
    <div className={`formily-formitem ${nestForm ? 'formily-formitem--nest' : 'formily-formitem--unnest'}`}>
      <div
        className={`formily-formitem__label formily-formitem__label__${props.props['x-component']} ${
          props.required ? 'formily-formitem__label--required' : ''
        }`}
      >
        {title}
      </div>
      <div
        className={`formily-formitem__control formily-formitem__control__${props.props['x-component']}`}
      >
        {props.children}
      </div>
    </div>
  );
};

