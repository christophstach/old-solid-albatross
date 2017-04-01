// @flow

import React from 'react';

const Button = (props: {
    type: string,
    onClick: any,
    children: any
  }) => (

  <button
    type="button"
    className={('btn btn-' + props.type)}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;