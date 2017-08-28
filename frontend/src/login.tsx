import * as React from 'react';
import { Component } from 'react';

import { Layout, Button, Form, Input, Icon } from 'antd';

import { UserProperty } from './sheet';

class LoginPanel extends Component<any, UserProperty> {
    render() {
        return <div>
            <Layout>
                <Form>
                    <div>Login</div>
                    <Input prefix={<Icon type="user" style={{ fontSize: 20 }} />} placeholder="Username" />
                </Form>
            </Layout>
        </div>;
    }
}

export default LoginPanel;
