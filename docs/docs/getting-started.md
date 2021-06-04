---
order: 1
nav:
  title: 快速上手
  order: 1
---

# 快速上手

## 安装

npm install formily-antd-mobile

## 使用

```tsx
import React, { useState } from 'react';
import { Button } from 'antd-mobile';
import {
  SchemaForm,
  setup,
  ISchemaFormActions,
  createFormActions,
} from 'formily-antd-mobile';

export default () => {
  const schemaJson = {
    type: 'object',
    'x-props': {
      metadata: {
        name: '个人信息',
        index: 0,
        uuid: '13488',
        key: 'geRenXinXi',
        isModule: true,
      },
    },
    properties: {
      xingBie: {
        'x-component': 'radio',
        disabled: false,
        'x-component-props': {
          disabled: false,
          canBeNotSure: false,
          required: false,
        },
        'x-index': 1,
        title: '2. 性别',
        type: 'string',
        'x-props': {
          metadata: {
            editorName: 'single',
            storeType: 'string',
            uneditable: false,
            canAdd: false,
            index: 1,
            isMultiple: false,
            canBeNotSure: false,
            uuid: 'a5d984da-6788-4e34-9a29-b9e4f36b6b62',
            required: false,
            isModule: false,
            name: '性别',
            options: [
              {
                label: '男',
                value: '男',
              },
              {
                label: '女',
                value: '女',
              },
            ],
            canDelete: false,
            key: 'xingBie',
          },
        },
        required: false,
        enum: [
          {
            label: '男',
            value: '男',
          },
          {
            label: '女',
            value: '女',
          },
        ],
      },
      niDeXingMing: {
        'x-component': 'input',
        disabled: false,
        'x-component-props': {
          disabled: false,
          canBeNotSure: false,
          required: true,
        },
        'x-index': 0,
        title: '1. 你的姓名',
        type: 'string',
        'x-props': {
          metadata: {
            editorName: 'fillIn',
            storeType: 'string',
            uneditable: false,
            canAdd: false,
            index: 0,
            isMultiple: false,
            canBeNotSure: false,
            uuid: 'bf9b31d3-af2b-480f-9ad8-39cf7821ae20',
            required: true,
            isModule: false,
            name: '你的姓名',
            canDelete: false,
            key: 'niDeXingMing',
          },
        },
        required: true,
      },
      chuShengNianYue: {
        'x-component': 'datepicker',
        disabled: false,
        'x-component-props': {
          format: 'YYYY-MM-DD',
          disabled: false,
          canBeNotSure: false,
          notSureType: 'whole',
          required: false,
        },
        'x-index': 2,
        title: '3. 出生年月',
        type: 'number',
        'x-props': {
          metadata: {
            editorName: 'date',
            storeType: 'date',
            uneditable: false,
            canAdd: false,
            index: 2,
            isMultiple: false,
            canBeNotSure: false,
            uuid: 'b87b0b27-3f4c-40d6-8a5a-a3906ae3f52f',
            required: false,
            isModule: false,
            name: '出生年月',
            canDelete: false,
            key: 'chuShengNianYue',
          },
        },
        required: false,
      },
      zhaoPian: {
        'x-component': 'upload',
        disabled: false,
        'x-component-props': {
          disabled: false,
          canBeNotSure: false,
          listType: 'dragger',
          required: false,
          accept: [
            'image',
            'audio',
            'video',
            'word',
            'excel',
            'ppt',
            'txt',
            'pdf',
            'zip',
            'rar',
            'dicom',
          ],
        },
        'x-index': 3,
        title: '4. 照片',
        type: 'file',
        'x-props': {
          metadata: {
            editorName: 'file',
            storeType: 'file',
            uneditable: false,
            canAdd: false,
            index: 3,
            isMultiple: false,
            canBeNotSure: false,
            uuid: '59a3c147-3d86-4e8c-84c1-8382a4b910b8',
            required: false,
            isModule: false,
            name: '照片',
            canDelete: false,
            key: 'zhaoPian',
          },
        },
        required: false,
      },
    },
  };

  const defaultValue = {};
  const [schemaFormActions] = useState<ISchemaFormActions>(createFormActions());

  const [disabled, setDisabled] = useState(true);

  const onSubmit = () => {
    schemaFormActions.submit().then(result => {
      console.log('...result:', result);
    });
  };

  return (
    <>
      <SchemaForm
        schema={schemaJson}
        initialValues={defaultValue}
        actions={schemaFormActions}
        effects={($, schemaFormActions) => {
          $('onFieldChange', '*').subscribe(fieldState => {
            schemaFormActions
              .validate()
              .then(res => {
                setDisabled(false);
              })
              .catch(res => {
                setDisabled(true);
              });
          });
        }}
      />
      <Button type="primary" onClick={onSubmit} disabled={disabled}>
        提交
      </Button>
    </>
  );
};
```

