import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Subtitle from "./components/Subtitle";
import Panorama from "./components/Panorama";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from './pages/Book';
import Mybookshelf from './pages/Mybookshelf';
import Openbook from "./components/Openbook";
import Login from "./components/Login"
import Bookfloat from "./components/Bookfloat"
import Signup from "./components/Signup"
import Bookshelf from "./pages/BookShelf";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
       
        <Switch>
          <Route exact path="/">
            <p>Navbar</p>
          </Route>
          <Route exact path="/login">
            <Login/>
            <Bookfloat/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>

          <Route exact path="/books">
            <Bookshelf />
          </Route>

          <Route exact path="/books/:title">
            <p>Book ID Route</p>
          </Route>

          <Route exact path="/openbook">
            <Openbook/>
            <Book/>
          </Route>

          <Route exact path="/mybookshelf">
          <p>My Bookshelf</p>
          <Mybookshelf/>
          </Route>
          <Route exact path="/saved" component={Saved} />           
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
