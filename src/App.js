import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './containers/Header'
import Index from './containers/Index'
import drawings from './drawings'

function App() {
  return (
    <div className="App">
      <Header />
      <Index drawings={ drawings }/>
    </div>
  )
}

export default App;
