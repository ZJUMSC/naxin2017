import { Component } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Layout, Button, Form, Input, InputNumber, Select, Radio, Icon, Row, Col, message } from 'antd';
import { apiBaseUrl } from './config';

const { Content } = Layout;
const FormItem = Form.Item;

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

const submit = (data: SheetData) => {

}

class SignUpForm extends Component<FormProps, any> {
    loadLocalStorage = () => {
        console.log('load');
        const { setFieldsValue } = this.props.form;
    }
    saveLocalStorage = () => {
        console.log('save');
    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.saveLocalStorage();
        this.props.form.validateFieldsAndScroll((err: any, values: SheetData) => {
            if (!err) {
                console.log(values);
                fetch(apiBaseUrl + 'submit', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                }).then(res => {
                    message.success('提交成功！');
                }).catch(err => {
                    message.error('提交失败，可能为网络原因。无法解决的话请马上联系我们ヽ(*ﾟдﾟ)ノｶｲﾊﾞｰ');
                });
            } else {
                console.log('error!');
                console.log(err);
                console.log(values);
                message.error('填写不正确，请按照提示修改');
            }
        })
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
                    <FormItem label="姓名" {...formItemLayout}>
                        {
                            getFieldDecorator('name', {
                                rules: [
                                    { required: true, message: "请输入姓名" }
                                ]
                            })(
                                <Input />
                                )
                        }
                    </FormItem>
                    <FormItem label="学号" {...formItemLayout}>
                        {
                            getFieldDecorator('id', {
                                rules: [
                                    { required: true, message: "请输入学号" }
                                ]
                            })(
                                <Input />
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
                                    <Radio.Button value="male">男</Radio.Button>
                                    <Radio.Button value="female">女</Radio.Button>
                                </Radio.Group>
                                )
                        }
                    </FormItem>
                    <FormItem label="年龄" {...formItemLayout}>
                        {
                            getFieldDecorator('age', {
                                rules: [
                                    { required: true, message: "请输入年龄" }
                                ]
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

                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">提交</Button>
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
            </div>
        );
    }
}

export default Sheet;