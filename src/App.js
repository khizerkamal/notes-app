import React from 'react';
import InputSection from './components/InputSection';
import NotesSection from './components/NotesSection';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="input-container">
        <h1 className={"title"}>GOOGLE KEEPS CLONE</h1>
        <InputSection />
      </div>
      <div className="line"></div>
      <NotesSection />
    </div>
  );
}

export default App;
