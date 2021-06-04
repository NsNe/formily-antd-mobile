import {
  ISchemaFieldComponentProps,
  IFieldState,
  IVirtualFieldState,
  ISchemaFormActions,
  ISchemaFormAsyncActions
} from '@formily/react-schema-renderer';
import { get } from 'lodash';

// 获取字段组件属性
export const getComponentProps = (props: ISchemaFieldComponentProps) => {

  const { canBeNotSure, ...componentProps }  = get(props, 'schema.x-component-props', {})
  return {
  ...componentProps,
  ...get(props, 'schema.x-props', {}),
  value: props.value
}

};

// 计算字段是否是 disabled
export const getDisabled = (props: ISchemaFieldComponentProps) =>
  props.editable === false || get(props, 'schema.x-component-props.disabled') === true;

// 获取字段 enum
export const getEnum = (props: ISchemaFieldComponentProps) =>
  get(props, 'schema.enum', []);

type ValueGetter = (value: any) => any;

interface LabelValuePair<T = any> {
  label: string;
  value: T;
}

export enum LinkageOperator {
  EQ = 'eq',
  NQ = 'nq',
  INCLUDE = 'include'
}

export interface LinkageCondition {
  source: string;
  target?: string;
  rules: [LinkageOperator, any];
}

export interface FieldMetadata {
  index?: number;
  key: string;
  name: string;
  uuid: string;
  questionType?: string; // dreprecated, use editorName instead
  editorName?: string;
  canBeNotSure?: boolean;
  isModule?: boolean;
  isMultiple?: boolean;
  canAdd?: boolean;
  canDelete?: boolean;
  storeType?: string;
  options?: Array<{ label: string; value: string }>;
}

export interface Linkage {
  operator: 'or' | 'and';
  conditions: LinkageCondition[];
}
export interface JsonSchema {
  title?: string | React.ReactNode;
  type?: 'string' | 'object' | 'array' | 'number' | 'boolean' | string;
  properties?: {
    [key: string]: JsonSchema;
  };
  items?: Record<string, JsonSchema>;
  'x-props'?: {
    linkage?: Linkage;
    metadata: FieldMetadata;
    [name: string]: any;
  };
  'x-component'?: string;
  'x-component-props'?: {
    [name: string]: any;
  };
  'x-index'?: number;
  default?: any;
  enum?: LabelValuePair[];
  description?: any;
}

export function createLinkageHandler(
  jsonSchema: JsonSchema,
  getValue: ValueGetter = value => value
) {
  function initLinkageMap() {
    const map: Record<string, LinkageCondition[]> = {};
    Object.keys(jsonSchema.properties!).forEach(questionKey => {
      const subSchema = jsonSchema.properties![questionKey];
      if (!subSchema['x-props'] || !subSchema['x-props'].linkage) {
        return;
      }
      const linkage = subSchema['x-props'].linkage;
      linkage.conditions.forEach(condition => {
        if (!map[condition.source]) {
          map[condition.source] = [];
        }
        map[condition.source].push({ ...condition, target: questionKey });
      });
    });
    return map;
  }

  const linkageMap = initLinkageMap();

  return (
    fieldState: IFieldState | IVirtualFieldState,
    actions: ISchemaFormActions | ISchemaFormAsyncActions
  ) => {
    const { name } = fieldState;
    const value = fieldState.value ? getValue(fieldState.value) : '';
    const linkageCinditions: LinkageCondition[] = linkageMap[name] || [];
    linkageCinditions.forEach(condition => {
      let visible = true;
      const options: string[] = condition.rules[1];
      if (Array.isArray(value)) {
        visible = value.some(value => !!options.find(item => item === value));
      } else {
        visible = !!options.find(item => item === value);
      }
      actions.setFieldState(condition.target!, state => {
        state.visible = visible;
      });
    });
  };
}
