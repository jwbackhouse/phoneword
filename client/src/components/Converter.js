import React, { useState } from 'react';
import axios from 'axios';
import InputForm from './InputForm.js';
import Results from './Results.js';

const Converter = props => {
  const [results, setResults] = useState([]);

  const getResult = query => {
    axios.post('/convert', { input: query })
      .then(res => setResults(res))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Hello World</h1>
      <InputForm getResult={ getResult }/>
      <Results results={ results }/>
    </div>
  );
};

export default Converter;
