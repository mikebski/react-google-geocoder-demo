import React, { Component } from 'react';
import './App.css';
import GeoCoder from 'react-google-geocoder'
class App extends Component {
  render() {
    return (
      <div className="App">
        <GeoCoder apiKey="AIzaSyCqJeH1bp062RgnAHmlrxVa-Y_dq1PFU6g" showFormTitle={true}/>
      </div>
    );
  }
}

export default App;
