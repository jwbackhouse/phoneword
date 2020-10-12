import React, { useState } from 'react';
import axios from 'axios';
import InputForm from './InputForm.js';

const Converter = props => {
  const [input, setInput] = useState('');
  const handleChange = e => {
    const char = e.target.value;
    const check = /[0-9]/;
    if (!check.test(char)) return;
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>Hello World</h1>
      <InputForm />
    </div>
  );
};

export default Converter;
