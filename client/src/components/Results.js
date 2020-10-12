import React from 'react';

const Results = ({ errorMsg, results, refValue }) => (
  <div ref={ refValue } className='Results'>
    <div>
      { (!errorMsg && results.data.length > 0) && <h4>Here are all the possible combinations</h4> }

      { errorMsg && <p className='error'>{ errorMsg }</p> }
    </div>
    <ul className='word-list'>
      { results.data.map(res => {
          return (<li className='word'>{ res }</li>);
      })}
      { results.data.length > 8 && (
        <>
          <li className='dummy-word'></li>
          <li className='dummy-word'></li>
          <li className='dummy-word'></li>
          <li className='dummy-word'></li>
          <li className='dummy-word'></li>
          <li className='dummy-word'></li>
          <li className='dummy-word'></li>
          <li className='dummy-word'></li>
          <li className='dummy-word'></li>
          <li className='dummy-word'></li>
          <li className='dummy-word'></li>
          <li className='dummy-word'></li>
          <li className='dummy-word'></li>
          <li className='dummy-word'></li>
        </>
      )}
    </ul>
 </div>
);

export default Results;
