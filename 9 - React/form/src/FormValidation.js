import React from 'react'
import { Row, Col, Form, Input, Button } from 'antd';

function FormValidation() {
  const layout = {
    labelCol: {
      xs: 6, sm: 8, md: 10
    },
    wrapperCol: {
      xs: 18, sm: 16, md: 14
    },
  }

  let onFinish = (values) => {
    console.log(values)
  }

  return (
    <>
      <Row justify="center">
        <Col xs={24} sm={22} md={20} lg={16} xl={14} xxl={12}>
          <Form onFinish={onFinish} {...layout}>
            <Form.Item label="Name" name="name" rules={[
              { required: true, message: "คุณต้องกรอกช่องนี้" }, 
              { max: 6, min: 3, message: "ชื่อต้องอยู่ระหว่าง 3 ถึง 6 ตัวอักษร" }]} >
              <Input placeholder="Name" />
            </Form.Item >

            <Form.Item label="Phone number" name="phoneNumber" rules={[
              { len: 10, message: "เบอร์โทรศัพท์ของคุณไม่ถูกต้อง" }]} >
              <Input placeholder="Phone Number" />
            </Form.Item>

            <Form.Item label="Email" name="email" rules={[
              { required: true, message: "คุณต้องกรอกช่องนี้" }, 
              { type: 'email', message: " รูปแบบอีเมล์ของคุณไม่ถูกต้อง" }]} >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item type="password" label="Password" name="password" rules={[
              {required: true, message: "คุณต้องใส่รหัสผ่าน"},
              {min: 12, max: 24, message: "รหัสผ่านของคุณต้องอยู่ระหว่าง 12 ถึง 24 ตัว"}
            ]} >
              <Input placeholder="Password" />
            </Form.Item>

            <Button htmlType="submit"> Register </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default FormValidation
