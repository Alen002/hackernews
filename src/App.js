import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main  from './components/Main';
import Footer from './components/Footer';

const App = () => {

useEffect = (() => {
    console.log('useEffect');
  }, []);




  return (
    <div>
  
      
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;

