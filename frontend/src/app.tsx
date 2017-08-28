import * as React from 'react';
import { Component } from 'react';
import antd from 'antd';
import { Layout, Button, message } from 'antd';
import Sheet from './sheet';

const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;
const Sider = Layout.Sider;

class App extends Component {

    render() {
        return (
            <div>
                <Layout>
                    <Header>
                        <h2>Frontend Root Component</h2>
                    </Header>
                    <Content>
                        <Sheet studentName="testName" studentId="testId" />
                        <Button type="primary">antd button</Button>
                    </Content>
                    <Footer>
                        <h5>MSC@ZJU 2017</h5>
                    </Footer>
                </Layout>
            </div>
        );
    }
};

export default App;
