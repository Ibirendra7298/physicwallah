import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import DistrictPage from './districtPage';
import Home from './Home';
import StatePage from "./statePage";

export default class App extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/:stateName" exact component={StatePage} />
        <Route path="/:stateName/:districtName" exact component={DistrictPage} />
      </Router>
    );
  }
}
