import React from 'react';
import { createVirtualBox } from '@formily/react-schema-renderer';

export const FormCard = createVirtualBox('card', ({ children, ...props }) => {
  return <div {...props}>{children}</div>
});

export default FormCard;