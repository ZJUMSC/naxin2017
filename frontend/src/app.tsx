import * as React from 'react';
import { Component } from 'react';
import antd from 'antd';
import { Layout, Button, message } from 'antd';
import Sheet from './sheet';

class App extends Component {

    render() {
        return (
            <div>
                <h2>Frontend Root Component</h2>
                <Sheet studentName="testName" studentId="testId" />
                <Button type="primary">antd button</Button>
            </div>
        );
    }
};

export default App;
