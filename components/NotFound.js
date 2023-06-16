// import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Sorry, that page does not exist.</h2>
      <p>Why not try a search to find something else?</p>
      <Link href="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;