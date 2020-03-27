import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
export default class Login extends Component {



  onFinish = values => {
    console.log('Received values of form: ', values);
  };

  handleUser = e => {
    e.preventDefault()
    this.setState({ username: e.target.value })
  }

  handlePassword = e => {
    e.preventDefault()
    this.setState({ password: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    let data = [...this.state.user, { username: this.state.username, password: this.state.password }]
    this.setState({ user: data, username: "", password: "" })
    console.log(this.state.user)
  }


  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password
        </a>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" onSubmit={this.handleSubmit}>
              Log in
        </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    )
  }
}


