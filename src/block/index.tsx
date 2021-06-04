import React from 'react';
import { createVirtualBox } from '@formily/react-schema-renderer';

export const FormBlock = createVirtualBox('block', ({ children, ...props }) => {
  return <div {...props} className="formily-block">{children}</div>
});

export default FormBlock;