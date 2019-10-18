import React from 'react';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
      <body className="d-flex flex-column h-100">
		<Header />
		<Body />
        <Footer />
      </body>
  );
}

export default App;
