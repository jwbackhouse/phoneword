import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import setWords from '../actions/words.js';
import InputForm from './InputForm.js';
import Results from './Results.js';

const Converter = ({ setWords, words }) => {
  const getResult = query => {
    axios.post('/convert', { input: query })
      .then(res => setWords(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Hello World</h1>
      <InputForm getResult={ getResult }/>
      <Results results={ words }/>
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
