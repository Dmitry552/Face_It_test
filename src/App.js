import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import WeatherContainer from './modules/Weather/conteiners/WeatherContainer';
import './styles/app.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Switch>
            <Route path='/' exact>
              <WeatherContainer />
            </Route>
           <Route path='*'>
             <Redirect to='/'/>
          </Route> 
          </Switch>
        </div>
      </Router>
    );
  } 
}

export default App;
