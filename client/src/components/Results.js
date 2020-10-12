import React from 'react';

const Results = ({ results }) => (
  <div>
    <h2>Results</h2>
    { results.data && results.data.length > 0 ?
      ( results.data.map(res => {
        return (<p>{ res }</p>);
      }))
      :
      ( <p>Nothing to see here</p> )
    }
 </div>
);

export default Results;
