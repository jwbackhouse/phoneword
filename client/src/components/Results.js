import React from 'react';

const Results = ({ warnMsg, results, refValue, error }) => (
  <div ref={ refValue } className='results'>
    <div>
      { (!warnMsg && results.data.length > 0) && <h4>Here are all the possible combinations</h4> }
      { warnMsg && <p className='error'>{ warnMsg }</p> }
      { error && <p className='error'>Oops, something went wrong</p> }
    </div>
    <ul className='word-list'>
      { results.data.map(res => {
          return (<li data-testid='wordEl' className='word' key={res}>{ res }</li>);
      })}
      { results.data.length > 11 && (
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
        </>
      )}
    </ul>
 </div>
);

export default Results;
