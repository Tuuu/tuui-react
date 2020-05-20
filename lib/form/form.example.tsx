import React, { useState } from 'react';
import Form from './form';

const FormExample: React.FunctionComponent = () => {
  const [formData] = useState({
    username: '',
    password: '',
  });
  const [fields] = useState([
    {
      name: 'username',
      label: '用户名',
      input: {
        type: 'text',
      },
    },
  ]);
  return (
    <div>
      <Form value={formData} fields={fields} />
    </div>
  );
};

export default FormExample;
