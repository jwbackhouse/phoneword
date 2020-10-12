import React, { useState } from 'react';
import axios from 'axios';
import InputForm from './InputForm.js';

const Converter = props => {
  const getResult = query => {
    axios.post('/convert', { input: query })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Hello World</h1>
      <InputForm getResult={ getResult }/>
    </div>
  );
};

export default Converter;
