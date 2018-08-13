import React, {Component} from 'react';
import './App.css';
import GeoCoder from 'react-google-geocoder'

import PrismCode from 'react-prism'

const customInput = ({searching, address, onChange}) => {
    return (
        <input disabled={searching}
               value={address}
               onChange={(event) => onChange(event)}/>
    )
}

const customSearchButton = ({searching, onClick}) => {
    return (
        <button type="button" disabled={searching} onClick={onClick}>
            Custom Search
        </button>
    )
}

class App extends Component {
    render() {
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
                    <pre>`
                    <PrismCode className="language-javascript">
                        {'<GeoCoder />'}
                    </PrismCode>
                    </pre>
                    <div style={innerDivStyle}>
                        <GeoCoder />
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
               onChange={(event) => onChange(event)}/>
    )
}


<GeoCoder  input={customInput}/>
                        `}

                    </PrismCode>
                    </pre>
                    <div style={innerDivStyle}>
                        <GeoCoder 
                                  input={customInput}
                        />
                    </div>
                </div>
                <div style={outerDivStyle}>
                    <h3>No Title</h3>
                    <pre>
                        <PrismCode className="language-javascript">
                        {'<GeoCoder  formTitle={false}/>'}
                        </PrismCode>
                    </pre>
                    <div style={innerDivStyle}>
                        <GeoCoder  formTitle={false}/>
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
                        <GeoCoder  fieldLabel={"Custom Label"}/>
                    </div>
                </div>

                <div style={outerDivStyle}>
                    <h3>Custom Search Button</h3>
                    <pre>
                    <PrismCode className="language-javascript">
                        {`
const customSearchButton = ({searching, onClick}) => {
    return (
        <button type="button" disabled={searching} onClick={onClick}>
            Custom Search
        </button>
    )
}
<GeoCoder  fieldLabel={"Custom Label"} searchButton={customSearchButton}/>
                        `}
                    </PrismCode>
                    </pre>
                    <div style={innerDivStyle}>
                        <GeoCoder  fieldLabel={"Custom Label"} searchButton={customSearchButton}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
