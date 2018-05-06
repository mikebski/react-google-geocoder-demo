import React, {Component} from 'react';
import './App.css';
import GeoCoder from 'react-google-geocoder'

class App extends Component {
    render() {
        const apiKey = "AIzaSyCtjPHjqXV5TqB_WFIUnk4gpjbmCldNrEU"
        const outerDivStyle = {
            float: "left",
            padding: "10px",
            margin: "10px",
            height: "300px",
            backgroundColor: "azure",
        }
        const innerDivStyle = {
            border: "1px dashed black",
            padding: "5px",
            margin: "5px",
        }

        return (
            <div className="App">
                <h1>GeoCoder Examples</h1>
                <div style={outerDivStyle}>
                    <h3>Default</h3>
                    <pre>
                        {'<GeoCoder apiKey={apiKey}/>'}
                    </pre>
                    <div style={innerDivStyle}>
                        <GeoCoder apiKey={apiKey}/>
                    </div>
                </div>

                <div style={outerDivStyle}>
                    <h3>No Title</h3>
                    <pre>
                        {'<GeoCoder apiKey={apiKey} formTitle={false}/>'}
                    </pre>
                    <div style={innerDivStyle}>
                        <GeoCoder apiKey={apiKey} formTitle={false}/>
                    </div>
                </div>

                <div style={outerDivStyle}>
                    <h3>Custom Label</h3>
                    <pre>
                        {'<GeoCoder fieldLabel={"Custom Label"}/>'}
                    </pre>
                    <div style={innerDivStyle}>
                        <GeoCoder apiKey={apiKey} fieldLabel={"Custom Label"}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
