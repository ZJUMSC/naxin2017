import * as React from 'react';
import { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { Layout, Button, message } from 'antd';

import Sheet from './sheet';
import HomePanel from './home';

import './ms.png';

const { Header, Content, Footer, Sider } = Layout;

function isMobile() {
    return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
}

class App extends Component {

    render() {
        return (
            <div>
                <Layout>
                    <Header style={{ width: "100%" }}>
                        <div>
                            <img src={require('./ms.png')} height="45px" />
                            {
                                isMobile() ? <div/> :
                                    <h1 style={{ color: "#fff", whiteSpace: "nowrap", display: "inline", lineHeight: "64px" }}>浙江大学 微软学生俱乐部 2017纳新网站</h1>
                            }
                        </div>
                    </Header>
                    <Content style={{ padding: "0", minHeight: "300px" }}>
                        <Router>
                            <Switch>
                                <Route exact path="/" render={() => <Redirect to="/home" />} />
                                <Route path="/home" component={HomePanel} />
                                <Route path="/form" component={Sheet} />
                            </Switch>
                        </Router>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        <p>&copy; 浙江大学 微软学生俱乐部</p>
                        <p>2017 All Rights Reserved</p>
                    </Footer>
                </Layout>
            </div>
        );
    }
};

export default App;
