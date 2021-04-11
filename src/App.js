import Header from './header';
import Books from './books';
import SingleBook from './sBook';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
    <Route path="/" exact component={Header} />
    <Route path="/" exact component={Books} />
    <Route path="/:id" exact component={SingleBook} />
    </Router>
    </div>
  );
}

export default App;


