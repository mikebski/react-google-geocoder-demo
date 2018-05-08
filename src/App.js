import React, {Component} from 'react';
import './App.css';
import GeoCoder from 'react-google-geocoder'

import PrismCode from 'react-prism'

const customInput = ({searching, address, onChange}) => {
    return (
        <input disabled={searching}
               value={address}
               onChange={(event) => onChange(event.target.value)}/>
    )
}

class App extends Component {
    render() {
        const apiKey = "AIzaSyCqJeH1bp062RgnAHmlrxVa-Y_dq1PFU6g"
        const outerDivStyle = {
            padding: "10px",
            margin: "10px",
            backgroundColor: "azure",
            margin: "0 auto",
            width: "600px;",
            float: "left",
            padding: "1em",
        }
        const innerDivStyle = {
            border: "1px dashed black",
            padding: "5px",
            margin: "5px",
        }

        return (
            <div className="App">
                <h1>GeoCoder Examples</h1>
                <p>
                    <a target="_blank" href="https://github.com/mikebski/react-google-geocoder">Source on github</a>
                </p>
                <p>
                    <a target="_blank" href="https://www.npmjs.com/package/react-google-geocoder">NPM JS Package</a>
                </p>
                <div style={outerDivStyle}>
                    <h3>Default</h3>
                    <pre>
                    <PrismCode className="language-javascript">
                        {'<GeoCoder apiKey={apiKey}/>'}
                    </PrismCode>
                    </pre>
                    <div style={innerDivStyle}>
                        <GeoCoder apiKey={apiKey}/>
                    </div>
                </div>
                <div style={outerDivStyle}>
                    <h3>Custom Input</h3>
                    <pre>
                    <PrismCode className="language-javascript">
                        {`
const customInput = ({searching, address, onChange}) => {
    return (
        <input disabled={searching}
               value={address}
               onChange={(event) => onChange(event.target.value)}/>
    )
}


<GeoCoder apiKey={apiKey} input={customInput}/>
                        `}

                    </PrismCode>
                    </pre>
                    <div style={innerDivStyle}>
                        <GeoCoder apiKey={apiKey}
                                  input={customInput}
                        />
                    </div>
                </div>
                <div style={outerDivStyle}>
                    <h3>No Title</h3>
                    <pre>
                        <PrismCode className="language-javascript">
                        {'<GeoCoder apiKey={apiKey} formTitle={false}/>'}
                        </PrismCode>
                    </pre>
                    <div style={innerDivStyle}>
                        <GeoCoder apiKey={apiKey} formTitle={false}/>
                    </div>
                </div>

                <div style={outerDivStyle}>
                    <h3>Custom Label</h3>
                    <pre>
                    <PrismCode className="language-javascript">
                        {'<GeoCoder fieldLabel={"Custom Label"}/>'}
                    </PrismCode>
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
