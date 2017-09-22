import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Button, Form, Input, Icon } from 'antd';
import { Row, Col } from 'antd';
import { Tooltip } from 'antd';

const { Content } = Layout;

const groups = [
    { g: 'TG', t: 'Technology Group 是 MSC 的核心技术部门，负责组织和支持俱乐部的各种技术活动，如活动主讲人，代码编写与维护，参与微软的编程实践项目等。' },
    { g: 'CG', t: 'Culture Group 的任务是推广多元的俱乐部文化，为俱乐部营造温馨和谐的氛围。他们会获得 TG 的全力支持与帮助。' },
    { g: 'PG', t: 'Public Group 旨在扩大 MSC 在校内与校外的影响力。通过对活动的宣传与报道让更多人了解 MSC 并且参与到 MSC 的活动当中来。主要负责俱乐部的宣传，如海报，传单与月刊的制作等。' },
    { g: 'OG', t: 'Operation Group 负责俱乐部的日常运作，广为人知的是财务管理。除此之外还负责行政管理，会员管理文档管理与绩效评估等事务。' }
];

const toIntro = (it: { g: string, t: string }) => <li><Tooltip key={it.g} title={it.t}><span>{it.g + ' '}</span><Icon type='question-circle-o' /></Tooltip></li>;

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
                                    <li>俱乐部分为<b>TG CG PG OG</b>四个组别，试试问机器人『俱乐部的groups』</li>
                                    {groups.map(toIntro)}
                                    <li>建议使用电脑填写报名表</li>
                                    <li style={{ color: "#6af" }} >9月23日 0:00 开始接受报名</li>
                                    <li style={{ color: "#6af" }} >暂定9月29日 24:00 截止报名</li>
                                    <li><br /><br /></li>
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
