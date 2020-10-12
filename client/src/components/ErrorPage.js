import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = props => {
  return (
    <div className='background'>
      <div className='text-box'>
        <h1>Doh. That's a 404</h1>
        <Link to='/'>Go home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
