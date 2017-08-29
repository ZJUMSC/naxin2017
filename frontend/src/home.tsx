import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Button, Form, Input, Icon } from 'antd';

const { Content } = Layout;

class LoginPanel extends Component {
    render() {
        return <div>
            <Layout>
                <Content style={{ background: "#fff", minHeight: "300px" }}>
                    <Form>
                        <div>Login</div>
                        <Link to="/form"><Button type="primary">进入报名</Button></Link>
                    </Form>
                </Content>
            </Layout>
        </div>;
    }
}

export default LoginPanel;
