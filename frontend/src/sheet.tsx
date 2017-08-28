import { Component } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Layout, Button, Form, Input, Icon } from 'antd';

export class UserProperty {
    studentName: string;
    studentId: string;
}

class SheetStatus {
    available: boolean;
}

class SheetData {
    constructor() {
        this.TG = this.CG = this.PG = this.OG = false;
    }

    TG: boolean;
    CG: boolean;
    PG: boolean;
    OG: boolean;

    gender: boolean;
}

class SheetState {
    status: SheetStatus;
    data: SheetData;
}

class Sheet extends Component<any, SheetState> {
    render() {
        return (
            <div>
                <Layout>
                    <Form>
                        <div>Sheet</div>
                        <Link to="/login">login</Link>
                        <div>{this.props.studentId}</div>
                        <div>{this.props.studentName}</div>
                    </Form>
                </Layout>
            </div>
        );
    }
}

export default Sheet;