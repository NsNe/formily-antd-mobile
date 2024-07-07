import React, { useState } from 'react';
import { ISchemaFieldComponentProps } from '@formily/react-schema-renderer';
import { ImagePicker } from 'antd-mobile';
import * as imgViewer from 'h5-imageviewer';
import { getComponentProps, getDisabled, getEnum } from '../util';
import deleteImageSrc from './delete.png';
import './style.less';

// 文件类型
enum FileType {
  IMAGE = 'image',
  AUDIO = 'audio',
  VIDEO = 'video',
  WORD = 'word',
  EXCEL = 'excel',
  PPT = 'ppt',
  TXT = 'txt',
  PDF = 'pdf',
  ZIP = 'zip',
  RAR = 'rar',
  DICOM = 'dicom',
}

// 文件类型对应关系
const fileTypes = {
  [FileType.IMAGE]: 'image/*',
  [FileType.AUDIO]: 'audio/*',
  [FileType.VIDEO]: 'video/*',
  [FileType.WORD]: ['.doc', '.docx'],
  [FileType.EXCEL]: ['.xls', '.xlsx', '.xlsm', '.xltx', 'xltm'],
  [FileType.PPT]: ['.ppt', '.pptx'],
  [FileType.PDF]: '.pdf',
  [FileType.TXT]: '.txt',
  [FileType.DICOM]: '.dcm',
  [FileType.ZIP]: '.zip',
  [FileType.RAR]: '.rar',
};

// 转换 maxSize 单位，子节 => 其他
const getDisplayMaxSize = (maxSize: number) => {
  let size = maxSize / 1024;

  if (size < 1) {
    return maxSize + 'B';
  }

  if (size < 1024) {
    return Math.round(size) + 'KB';
  }

  return Math.round(size / 1024) + 'M';
};

export const Upload = (props: ISchemaFieldComponentProps) => {
  const newProps = {
    ...getComponentProps(props),
    disabled: getDisabled(props),
    value: props.value,
  };

  newProps.onChange = (newFiles, type, index) => {
    props.mutators.change((newProps.value || []).concat(newFiles));
  };

  const deleteImg = (index: number) => {
    const value = [].concat(newProps.value);
    value.splice(index, 1);
    props.mutators.change(value);
  };

  const onPreview = (index: number) => {
    imgViewer.showImgListViewer(
      (newProps.value || []).map(e => ({ src: e.url })),
      {
        defaultPageIndex: index,
      },
    );
  };

  return (
    <div className="formily-image-picker">
      <p className="formily-image-picker__tips">支持图片格式jpg、png</p>
      <div className="formily-image-picker__content">
        <div className="formily-image-picker-List">
          {(newProps.value || []).map(({ url: base64, name }, index) => (
            <div className="formily-image-picker-List__imgBox">
              <img src={base64} alt={name} onClick={() => onPreview(index)} />
              <div
                className={`formily-image-picker-List__delete ${
                  !newProps.disabled
                    ? ''
                    : 'formily-image-picker-List__delete--hidden'
                }`}
                onClick={() => deleteImg(index)}
              >
                <img src={deleteImageSrc} alt="删除图片" />
              </div>
            </div>
          ))}
        </div>
        {!newProps.disabled && <ImagePicker {...newProps} length={1} />}
      </div>
    </div>
  );
};

export default Upload;
