import React, { useState, useEffect, useRef } from 'react';

import Div1 from './components/Div1';
import Div2 from './components/Div2';

import './App.css';

const App = () => {
  const [visible, setVisible] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const options = { root: null, threshold: 0.6 };

    const observer = new IntersectionObserver(([entry]) => {
      console.log(entry);
      setVisible(entry.isIntersecting);
    }, options);

    const refCopy = ref.current;

    observer.observe(ref.current);

    return () => {
      observer.unobserve(refCopy);
    };
  }, []);

  return (
    <main>
      <Div1 />
      <Div2 ref={ref} visible={visible} />
    </main>
  );
};

export default App;
