import React from 'react';
import { Header } from './Components/Header/Header';
import { Navbar } from './Components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import { Sidebar } from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className="main-wrapper">
          <Navbar/>
          <div className="content">
            <Switch>
              <Route path='/profile'/>
              <Route path='/users'/>
            </Switch>
          </div>
          <Sidebar/>
        </div>
      </div>
    </div>
  );
}

export default App;
