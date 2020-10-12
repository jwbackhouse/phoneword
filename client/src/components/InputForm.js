import React, { useState } from 'react';

const InputForm = props => {
  const [input, setInput] = useState('');
  const handleChange = e => {
    // Restrict input to numbers only
    const char = e.target.value;
    const check = /^[0-9]*$/;
    if (!check.test(char)) return;

    setInput(e.target.value);
  };

  return (
    <form>
      <input
        className='input'
        name='numbers'
        type='text'
        value={ input }
        onChange = { handleChange }
      />
    </form>
  );
};

export default InputForm;