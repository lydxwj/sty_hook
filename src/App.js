import React from 'react';
import './App.css';
import DState from './hooks/state'
import DEffect from './hooks/effect'
import DUseMemo from './hooks/useMemo'
import DForm from './hooks/form'
function App() {
  return (
    <div className="App">
      <DUseMemo />
      <DState />
      <DEffect a="" />
      <DForm />
    </div>
  );
}

export default App;
