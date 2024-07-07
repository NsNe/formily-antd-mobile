import React from 'react';
import './style.less';

interface IProps {
  extra?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  onClear?: (e: any) => void;
  clear?: boolean;
}

const PickerItem = ({ extra, className = '', onClick, onClear, clear }: IProps) => (
  <div
    className={`am-list-item am-list-item-middle formily-pickeritem ${className}`}
    onClick={onClick}
  >
    <div className="am-list-line">
      <div className="am-list-extra">
        <span>{extra}</span>
      </div>
      <div className="am-list-right">
        {onClear && clear && (
          <span className="formily-pickeritem__clear" onClick={e => onClear(e)}>
            清空
          </span>
        )}
        <div className="am-list-arrow am-list-arrow-horizontal" aria-hidden="true"></div>
      </div>
    </div>
  </div>
);

export default PickerItem;
