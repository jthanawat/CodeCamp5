import React, { Component } from 'react'
import '../style/Home_page/NavHome.css'
import { Col, Row } from 'antd'

export default class NavHome extends Component {
  render() {
    return (
      <div>
        <Row className="navHomeBody">
          <Col>
            <Row></Row>
            <Row></Row>
          </Col>
          <Col>
            <Row></Row>
            <Row></Row>
            <Row></Row>
          </Col>
        </Row>
      </div>
    )
  }
}
