import React, { Component } from 'react'
import '../style/log_in_page/Navbar.css'
import { Row, Col } from 'antd'

export default class Navbar extends Component {
  render() {
    return (
      <Row className="Navbar">
        <Col className="top">
          <div>
            <a href="#">
              <i class="fb_logo img sp_Vgu5hh_52BR_2x sx_dc3a6f"><u>Facebook</u></i>
            </a>
          </div>

          <div>
            <table>
              <tr>
                <td><label>อีเมลหรือโทรศัพท์</label></td>
                <td><label>รหัสผ่าน</label></td>
              </tr>
              <tr>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><button>เข้าสู่ระบบ</button></td>
              </tr>
              <tr>
                <td></td>
                <td>ลืมบัญชีใช่หรือไม่</td>
              </tr>

            </table>
          </div>
        </Col>
      </Row>
    )
  }
}
