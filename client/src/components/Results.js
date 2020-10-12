import React from 'react';

const Results = ({ errorMsg, results }) => (
  <div className='Results'>
    <div className='result-heading'>
      { (!errorMsg && results.data.length > 0) && <h4>Here are your letter combinations</h4> }

      { errorMsg && <p className='error'>{ errorMsg }</p> }
    </div>
    <ul className='word-list'>
      { results.data.map(res => {
          return (<li className='word'>{ res }</li>);
      })}
    </ul>
 </div>
);

export default Results;
