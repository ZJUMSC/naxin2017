import { Component } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Layout, Button, Form, Input, InputNumber, Select, Radio, Icon, Row, Col, message, Modal, Popconfirm, BackTop } from 'antd';
import { apiBaseUrl } from './config';

const { Content } = Layout;
const FormItem = Form.Item;
const { confirm } = Modal;

const gradeOptions = ['大一', '大二', '大三', '大四', '研究生', '博士生', '其他'];
const campusOptions = ['紫金港', '玉泉', '西溪', '华家池', '之江', '其他'];

const toSelectOption = (v: string) => <Select.Option value={v} key={v}>{v}</Select.Option>;

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
    name: string;
    id: string;

    group: [string];
    TG: boolean;
    CG: boolean;
    PG: boolean;
    OG: boolean;

    gender: boolean;
    age: number;
    grade: number;
    campus: number;
    major: string;
    tel: string;
    email: string;
    qq: string;
    description: string;
}

class SheetState {
    status: SheetStatus;
    data: SheetData;
}

interface FormProps {
    form: any;
}

class SignUpForm extends Component<FormProps, any> {
    loadLocalStorage = () => {
        const values = JSON.parse(localStorage.getItem('formCache'));
        this.props.form.setFieldsValue(values);
    }
    saveLocalStorage = () => {
        const values = this.props.form.getFieldsValue();
        localStorage.setItem('formCache', JSON.stringify(values));
    }
    componentDidMount() {
        this.loadLocalStorage();
    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.saveLocalStorage();

        const formProps = this.props.form;

        confirm({
            title: '提交报名表',
            content: String.raw`
            您填写的表格已经保存在浏览器中，以后可以修改后覆盖提交。
            点击 OK 进行提交。
            `,
            onOk() {
                return new Promise((resolve, reject) => {
                    formProps.validateFieldsAndScroll((err: any, values: SheetData) => {
                        if (!err) {
                            fetch(apiBaseUrl + 'submit', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(values)
                            }).then(res => {
                                message.success('提交成功！');
                                resolve(42);
                            }).catch(err => {
                                message.error('提交失败，可能为网络原因。无法解决的话请马上联系我们ヽ(*ﾟдﾟ)ノｶｲﾊﾞｰ');
                                reject('network or fetch error!');
                            });
                        } else {
                            message.error('填写不正确，请按照提示修改');
                            reject('validation error!');
                        }
                    })
                }).catch((err: any) => console.log(err));
            },
            onCancel() { }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem label="姓名" {...formItemLayout} hasFeedback>
                        {
                            getFieldDecorator('name', {
                                rules: [
                                    { required: true, message: "请输入姓名" }
                                ]
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} />
                                )
                        }
                    </FormItem>
                    <FormItem label="学号" {...formItemLayout} hasFeedback>
                        {
                            getFieldDecorator('id', {
                                rules: [
                                    { required: true, message: "请输入学号" },
                                    { pattern: /^[0-9]+$/, message: "混进去了数字以外的东西呀" }
                                ]
                            })(
                                <Input prefix={<Icon type="contacts" style={{ fontSize: 13 }} />} />
                                )
                        }
                    </FormItem>
                    <FormItem label="Group" {...formItemLayout}>
                        {
                            getFieldDecorator('group', {
                                rules: [
                                    { required: true, message: "请选择至少一个Group" }
                                ]
                            })(
                                <Select mode="multiple">
                                    <Select.Option value="TG">TG</Select.Option>
                                    <Select.Option value="CG">CG</Select.Option>
                                    <Select.Option value="PG">PG</Select.Option>
                                    <Select.Option value="OG">OG</Select.Option>
                                </Select>
                                )
                        }
                    </FormItem>
                    <FormItem label="性别" {...formItemLayout}>
                        {
                            getFieldDecorator('genderText', {
                                rules: [
                                    { required: true, message: "请选择性别" }
                                ]
                            })(
                                <Radio.Group>
                                    <Radio.Button value="male"><div><Icon type="man"/>男</div></Radio.Button>
                                    <Radio.Button value="female"><div><Icon type="woman"/>女</div></Radio.Button>
                                </Radio.Group>
                                )
                        }
                    </FormItem>
                    <FormItem label="年龄" {...formItemLayout}>
                        {
                            getFieldDecorator('age', {
                                rules: [
                                    { required: true, message: "请输入年龄" }
                                ],
                                initialValue: 18
                            })(
                                <InputNumber min={1} max={100} />
                                )
                        }
                    </FormItem>
                    <FormItem label="年级" {...formItemLayout}>
                        {
                            getFieldDecorator('grade', {
                                rules: [
                                    { required: true, message: "请选择年级" }
                                ]
                            })(
                                <Select>
                                    {
                                        gradeOptions.map(toSelectOption)
                                    }
                                </Select>
                                )
                        }
                    </FormItem>
                    <FormItem label="校区" {...formItemLayout}>
                        {
                            getFieldDecorator('campus', {
                                rules: [
                                    { required: true, message: "请选择校区" }
                                ]
                            })(
                                <Select>
                                    {
                                        campusOptions.map(toSelectOption)
                                    }
                                </Select>
                                )
                        }
                    </FormItem>
                    <FormItem label="专业或大类" {...formItemLayout} hasFeedback>
                        {
                            getFieldDecorator('major', {
                                rules: [
                                    { required: true, message: "请输入专业名称或者大类" }
                                ]
                            })(
                                <Input />
                                )
                        }
                    </FormItem>
                    <FormItem label="电话号码" {...formItemLayout} hasFeedback>
                        {
                            getFieldDecorator('tel', {
                                rules: [
                                    { required: true, message: "请输入电话号码" },
                                    { pattern: /^[0-9]+$/, message: "混进去了数字以外的东西呀" }
                                ]
                            })(
                                <Input />
                                )
                        }
                    </FormItem>
                    <FormItem label="邮箱" {...formItemLayout} hasFeedback>
                        {
                            getFieldDecorator('email', {
                                rules: [
                                    { required: true, message: "请输入邮箱" },
                                    { type: 'email', message: "邮箱格式不正确" }
                                ]
                            })(
                                <Input />
                                )
                        }
                    </FormItem>
                    <FormItem label="QQ" {...formItemLayout}>
                        {
                            getFieldDecorator('qq', {
                                rules: [
                                    { pattern: /^[0-9]+$/, message: "混进去了数字以外的东西呀" }
                                ]
                            })(
                                <Input />
                                )
                        }
                    </FormItem>
                    <FormItem label="自我介绍" {...formItemLayout}>
                        {
                            getFieldDecorator('description', {
                            })(
                                <Input.TextArea rows={12} />
                                )
                        }
                    </FormItem>

                    <FormItem {...tailFormItemLayout}>
                        <Button icon="copy" type="primary" htmlType="submit">提交</Button>
                        <Button icon="save" size="large" style={{ margin: "20px" }} onClick={() => { this.saveLocalStorage(); message.success('草稿已保存') }}>保存草稿</Button>
                        <Popconfirm title="确认要清空表单内容么？" onConfirm={() => { this.props.form.resetFields(); message.success('表单内容已清空') }}>
                            <Button icon="reload" size="large" style={{ margin: "20px" }}>清空内容</Button>
                        </Popconfirm>
                        <Link to="/home"><Button icon="rollback" size="large" style={{ margin: "20px 0px" }}>返回上一页</Button></Link>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

class Sheet extends Component<any, SheetState> {
    constructor() {
        super();
    }

    render() {
        const WrappedForm = Form.create({})(SignUpForm);
        return (
            <div style={{ minHeight: "300px", alignContent: "center" }} className="form-panel">
                <h1 style={{ textAlign: "center" }}>微软俱乐部2017秋季纳新报名表</h1>
                <p><br /></p>
                <WrappedForm />
                <BackTop visibilityHeight={200}/>
            </div>
        );
    }
}

export default Sheet;