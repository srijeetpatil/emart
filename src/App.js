import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/MainPage';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{backgroundColor: "#f0edf3"}}>        
          <Main/>
      </div>
    </BrowserRouter>    
  );
}

export default App;
