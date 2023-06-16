// import '../styles/globals.css'
// import PropTypes from 'prop-types';


// import { AuthUserProvider } from '../context/AuthUserContext';

// function MyApp({ Component, pageProps }) {
//   return <AuthUserProvider><Component {...pageProps} /></AuthUserProvider>
// }

// export default MyApp

// import React from 'react';
import PropTypes from 'prop-types';
import { AuthUserProvider } from '../context/AuthUserContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
