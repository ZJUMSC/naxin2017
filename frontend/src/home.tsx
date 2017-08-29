import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Button, Form, Input, Icon } from 'antd';
import { Row, Col } from 'antd';

const { Content } = Layout;

class HomePanel extends Component {
    render() {
        return <div className="form-panel">
            <Layout style={{ minHeight: "100%" }}>
                <Content style={{ background: "#fff", minHeight: "100%" }}>
                    <Row type="flex" justify="center">
                        <Col span={8} className="white" style={{ margin: "20px", minWidth: "300px" }}>
                            <div style={{ margin: "20px" }}>
                                <h2>欢迎加入微软俱乐部！</h2>
                                <ul>
                                    <li>社团与纳新相关问题可以咨询本页面中的机器人聊天窗口</li>
                                    <li>纳新咨询可加入QQ群 <b>667813936</b></li>
                                    <li>报名相关问题及时与我们联系 yzyDavid@qq.com 或 QQ 1729462839</li>
                                    <li>建议使用电脑填写报名表</li>
                                    <li><br/><br/></li>
                                </ul>
                                <Row type="flex" justify="center" style={{ verticalAlign: "bottom" }}>
                                    <Link to="/form"><Button type="primary" size="large" icon="edit" style={{ margin: "20px" }}>进入报名</Button></Link>
                                </Row>
                            </div>
                        </Col>
                        <Col className="white" style={{ margin: "20px" }}>
                            <iframe seamless style={{ justifyContent: "center", minHeight: "525px" }} src='https://webchat.botframework.com/embed/zjumsc?s=1mkx6UasV00.cwA.PEc.pojbesy-x_xNKagb3QxxrNIbANGadrd-zyKYT_4plsE'></iframe>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </div>;
    }
}

export default HomePanel;
