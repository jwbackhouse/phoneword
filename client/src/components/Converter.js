import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import setWords from '../actions/words.js';
import InputForm from './InputForm.js';
import Results from './Results.js';

const Converter = ({ setWords, words }) => {
  const [errorMsg, setErrorMsg] = useState('');

  const getResult = query => {
    axios.post('/convert', { input: query })
      .then(res => {
        if (res.data.length === 0) {
          setErrorMsg('Nothing to see here');
          setWords([]);
        } else {
          setWords(res.data);
          setErrorMsg('');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='Converter'>
      <h1>Greetings from the 1990s</h1>
      <p className='subtitle'>Find the letter combinations from your mobile keypad.</p>
      <InputForm getResult={ getResult }/>
      { <Results errorMsg={ errorMsg } results={ words }/> }
    </div>
  );
};

const mapStateToProps = state => ({
  words: state.words
});

const mapDispatchToProps = dispatch => ({
  setWords: result => dispatch(setWords(result)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
