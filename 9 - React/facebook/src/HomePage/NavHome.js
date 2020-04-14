import React, { Component } from 'react'
import '../style/Home_page/NavHome.css'
import { Col, Row } from 'antd'

export default class NavHome extends Component {
  render() {
    return (
      <div>
        <Row className="navHomeBody">
          <Col>
            <Row className="NavLeftBlock" align="middle">
              <Col>
                <a class="_19eb fackbookIcon" data-gt="{&quot;chrome_nav_item&quot;:&quot;logo_chrome&quot;}" href="https://www.facebook.com/?ref=logo" title="Go to Facebook Home"><span class="_2md">Facebook</span></a>
              </Col>
            </Row>
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
