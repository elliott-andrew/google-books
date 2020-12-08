import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Search from './Pages/Search';
import Saved from './Pages/Saved';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/Saved">
          <Saved />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
