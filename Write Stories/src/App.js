
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './components/home';
import write from './components/write';
import story from './components/story';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={home}/>     
          <Route path="/write" exact component={write}/> 
          <Route path="/story" exact component={story}/> 
          

        </Switch>
      </div>
    </Router>
  );
}

export default App;
