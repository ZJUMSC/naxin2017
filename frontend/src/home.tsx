import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Button, Form, Input, Icon } from 'antd';
import { Row, Col } from 'antd';

const { Content } = Layout;

class HomePanel extends Component {
    render() {
        return <div>
            <Layout>
                <Content style={{ background: "#fff", minHeight: "300px" }}>
                    <Form>
                        <Row type="flex" justify="center">
                            <Col span={14} className="white" style={{ margin: "20px" }}>

                            </Col>
                            <Col span={8} className="white" style={{ margin: "20px" }}>
                            <h2></h2>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center">
                            <Link to="/form"><Button type="primary" size="large" icon="edit" style={{margin: "20px"}}>进入报名</Button></Link>
                        </Row>
                    </Form>
                </Content>
            </Layout>
        </div>;
    }
}

export default HomePanel;
