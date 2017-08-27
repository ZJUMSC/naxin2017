import { Component } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class UserProperty {
    studentName: string;
    studentId: string;
}

class SheetStatus {
    Available: boolean;
}

class Sheet extends Component<UserProperty, SheetStatus> {
    render() {
        return (<div></div>);
    }
}

export default Sheet;