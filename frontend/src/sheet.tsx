import { Component } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Layout, Button, Form, Input, Icon, Row, Col, message } from 'antd';
import { apiBaseUrl } from './config';

const { Content } = Layout;
const FormItem = Form.Item;

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
                    method: 'POST'
                }).then( res => {;
                    message.success('提交成功！');
                }).catch( err => {
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
                            getFieldDecorator('studentName', {
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
                            getFieldDecorator('studentId', {
                                rules: [
                                    { required: true, message: "请输入学号" }
                                ]
                            })(
                                <Input />
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