// App.js
import React from 'react';
import Button from './Components/Button';
import SearchBar from './Components/SearchBar';
import Feedback from './Components/Givefeedback';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <SearchBar />
        <Feedback />
      </header>
    </div>
  );
}

export default App;
