import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './containers/Header'
import Index from './containers/Index'
import drawings from './drawings'

function App() {
  return (
    <Fragment>
      <Header />
      <Index drawings={ drawings }/>
    </Fragment>
  )
}

export default App;
