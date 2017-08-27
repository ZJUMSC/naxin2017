import * as React from 'react';
import { Component } from 'react';
import Sheet from './sheet';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>Frontend Root Component</h2>
                <Sheet studentName="testName" studentId="testId" />
            </div>
        );
    }
};

export default App;