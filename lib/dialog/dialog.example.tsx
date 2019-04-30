import * as React from 'react';
import { useState } from 'react';
import Dialog from './dialog';

export default function() {
  const [x, setX] = useState(false);
  return (
    <div>
      <button onClick={() => setX(!x)}>click</button>
      <Dialog visible={x}>
        <div>h1</div>
      </Dialog>
    </div>
  );
}
