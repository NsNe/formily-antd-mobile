import React from 'react';

export const Form = (props: { children: React.ReactNode; }) => {
  return <div className="formily-form">{props.children}</div>;
}

