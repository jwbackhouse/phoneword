import React, { useState } from 'react';

const InputForm = ({ getResult }) => {
  const [input, setInput] = useState('');
  const handleChange = e => {
    // Restrict input to numbers only
    const char = e.target.value;
    const check = /^[0-9]*$/;
    if (!check.test(char)) return;

    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    getResult(input);
    setInput('');
  };

  return (
    <form onSubmit={ handleSubmit } >
      <input
        className='input'
        name='numbers'
        type='text'
        value={ input }
        onChange={ handleChange }
      />
      <button type='submit'>
        Go
      </button>
    </form>
  );
};

export default InputForm;