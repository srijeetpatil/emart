import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/MainPage';
import { BrowserRouter, HashRouter} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App" style={{backgroundColor: "#f0edf3"}}>        
          <Main/>
      </div>
    </HashRouter>    
  );
}

export default App;
