import * as React from 'react';
import { useState } from 'react';
import Dialog from './dialog';

export default function() {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  return (
    <div>
      <h1>例子1：</h1>
      <button onClick={() => setX(!x)}>click</button>
      <Dialog
        visible={x}
        buttons={[
          <button onClick={() => setX(false)}>1</button>,
          <button onClick={() => setX(false)}>2</button>,
        ]}
        onclose={() => setX(false)}
      >
        <div>h1</div>
      </Dialog>
      <h1>例子2：</h1>
      <button onClick={() => setY(!y)}>click</button>
      <Dialog
        visible={y}
        closeOnClickMask={true}
        buttons={[
          <button onClick={() => setY(false)}>1</button>,
          <button onClick={() => setY(false)}>2</button>,
        ]}
        onclose={() => setY(false)}
      >
        <div>h1</div>
      </Dialog>
    </div>
  );
}
