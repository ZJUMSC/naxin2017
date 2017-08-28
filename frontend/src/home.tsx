import * as React from 'react';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Layout, Button, Form, Input, Icon } from 'antd';

class LoginPanel extends Component {
    render() {
        return <div>
            <Layout>
                <Form>
                    <div>Login</div>
                    <Button type="primary" onClick={() => <Redirect to="/form" />}>进入报名</Button>
                </Form>
            </Layout>
        </div>;
    }
}

export default LoginPanel;
