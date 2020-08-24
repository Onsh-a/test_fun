import React from 'react';
import Page from './components/page'
import data from './data/data'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Page data={data} />
    </div>
  );
}

export default App;
