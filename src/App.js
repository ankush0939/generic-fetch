import React from 'react';

import Header from './Compenents/Header';
import ShowCat from './Compenents/ShowCat';
import Footer from './Compenents/Footer';

import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <ShowCat />
      <Footer name='Ankush Mishra' />
    </div>
  )
}

export default App