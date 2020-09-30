import React from 'react';
import './App.css';
import Main from './components/MainPage';
import { BrowserRouter, HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App" style={{backgroundColor: "#f0edf3"}}>        
            <Main/>
        </div>
      </HashRouter> 
    </Provider>       
  );
}

export default App;
