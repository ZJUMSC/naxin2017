import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { Layout, Button, message } from 'antd';

import Sheet from './sheet';
import LoginPanel from './login';

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {

    render() {
        return (
            <div>
                <Layout>
                    <Header>
                        <div>
                            <h1 style={{ color: "#aaf" }}>浙江大学 微软学生俱乐部 2017纳新网站</h1>
                        </div>
                    </Header>
                    <Content>
                        <Router>
                            <Switch>
                                <Route exact path="/" render={() => <Redirect to="/login" />} />
                                <Route path="/login" component={LoginPanel} />
                                <Route path="/sheet" render={() => <Sheet studentId="test31501" studentName="lalala" />} />
                            </Switch>
                        </Router>
                    </Content>
                    <Footer>
                        <p>浙江大学 微软学生俱乐部 &copy; 2017 All Rights Reserved</p>
                    </Footer>
                </Layout>
            </div>
        );
    }
};

export default App;
