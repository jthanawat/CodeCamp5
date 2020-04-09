import React, { Component } from 'react'
import { Row, Col } from 'antd'
import NavHome from './NavHome'
import Left from './LeftBodyHome'
import Center from './CenterBodyHome'
import Right from './RightBodyHome'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Col>
          <Row span={24}><NavHome /></Row>
          <Row span={24}>

            <Col><Left /></Col>
            <Col><Center /></Col>
            <Col><Right /></Col>

          </Row>

        </Col>

      </div>
    )
  }
}
