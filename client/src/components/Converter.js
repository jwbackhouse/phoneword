import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import setWords from '../actions/words.js';
import Header from './Header.js';
import Footer from './Footer.js';
import InputForm from './InputForm.js';
import Results from './Results.js';

// Scroll to result words
const scroll = ref => window.scrollTo(0, ref.current.offsetTop);

const Converter = ({ setWords, words }) => {
  const [errorMsg, setErrorMsg] = useState('');
  const ref = useRef(null);

  const executeScroll = () => {
    scroll(ref);
  };

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

        executeScroll();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='background'>
      <Header />
      <InputForm getResult={ getResult }/>
      { (words.data.length > 0 || errorMsg)
        && <Results refValue={ ref } errorMsg={ errorMsg } results={ words }/>
      }
      <Footer />
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
