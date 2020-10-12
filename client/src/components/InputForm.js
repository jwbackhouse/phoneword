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

  const handleClick = value => {
    setInput(input + value);
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleSubmit = e => {
    if (input !== '') getResult(input);
    setInput('');
  };

  return (
    <div className='wrapper'>
      <div className='phone'>
        <div className='phone-container'>
          <div className='keyboard'>
            <div className='number'>
              <span onClick={ handleClick.bind(this,1) }><i>1</i></span>
              <span onClick={ handleClick.bind(this,2) }><i>2</i></span>
              <span onClick={ handleClick.bind(this,3) }><i>3</i></span>
              <span onClick={ handleClick.bind(this,4) }><i>4</i></span>
              <span onClick={ handleClick.bind(this,5) }><i>5</i></span>
              <span onClick={ handleClick.bind(this,6) }><i>6</i></span>
              <span onClick={ handleClick.bind(this,7) }><i>7</i></span>
              <span onClick={ handleClick.bind(this,8) }><i>8</i></span>
              <span onClick={ handleClick.bind(this,9) }><i>9</i></span>
            </div>

            <div className='number align-right'>
              <span onClick={ handleDelete.bind(this) }><i className='hero'>Del</i></span>
              <span onClick={ handleClick.bind(this,0) }><i>0</i></span>
              <span onClick={ handleSubmit.bind(this) }><i className='hero'>GO</i></span>
            </div>
          </div>

          <input
            type='text'
            className='number-input'
            id='numberInput'
            value={ input }
            onChange={ handleChange }
          />
        </div>
      </div>
    </div>
  );
};

export default InputForm;
