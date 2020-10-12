import React from 'react';

const Results = ({ errorMsg, results }) => (
  <div>
    { (!errorMsg && results.data.length > 0) && <h4>Here are your letter combinations</h4> }

    { errorMsg && <p className='error'>{ errorMsg }</p> }

    { results.data.map(res => {
        return (<p>{ res }</p>);
    })}
 </div>
);

export default Results;
