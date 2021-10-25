import React, { forwardRef } from 'react';

import fred from '../assets/fred.png';

const Div2 = forwardRef(({ visible }, ref) => {
  const content = visible ? (
    <div className='div3'>
      <img src={fred} alt='fred' />
    </div>
  ) : (
    <div className='div2' ref={ref}>
      <h1>Hello</h1>
    </div>
  );
  return <>{content}</>;
});

export default Div2;
