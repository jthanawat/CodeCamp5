import React, { Component } from 'react'
import { Row, Col } from 'antd'
import '../style/log_in_page/LeftBody.css'

export default class LeftBody extends Component {
  render() {
    return (
      <Col className="LeftBody">

        <Row className="rowInLeft">
          การเข้าสู่ระบบล่าสุด
          </Row>

        <Row className="rowInLeft">
          คลิกรูปภาพหรือเพิ่มบัญชี
          </Row>

        <Row className="rowInLeft">
          <img src="https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.0-1/p720x720/31349913_10211138676533986_9000220130453487616_o.jpg?_nc_cat=104&amp;_nc_sid=dbb9e7&amp;_nc_ohc=iCwgtqswE80AX9vCBWy&amp;_nc_ht=scontent.fbkk2-6.fna&amp;_nc_tp=6&amp;oh=91b5e5992449d67ac1e092d56d437af7&amp;oe=5EB21E04" />
          <div className="name">Kla</div>
        </Row>
      </Col>
    )
  }
}
