import React, { Component } from 'react'
import '../style/log_in_page/RightBody.css'
import { Row, Col } from 'antd'

export default class RightBody extends Component {
  render() {
    return (
      <div>
        <Col className="RightBody">

          <Row className="rowInRight">
            สร้างบัญชีใหม่
        </Row>

          <Row className="rowInRight">
            ง่ายและเร็ว
        </Row>

          <Row className="rowInRight">
            <Col span={24} className="">
              <Row span={12}><input type="text" placeholder="ชื่อ"/></Row>
              <Row span={12}><input type="text" placeholder="นามสกุล"/></Row>
            </Col>

            <Col span={24}><input type="text" placeholder="หมายเลขโทรศัพท์มือถือหรืออีเมล"/></Col>
            <Col span={24}><input type="text" placeholder="รหัสผ่านใหม่"/></Col>
            
            <Row>วันเกิด</Row>
            <Col span={24}></Col>

          </Row>

        </Col>
      </div>
    )
  }
}
