import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Divider } from 'antd';

const style = { background: '#0092ff', padding: '8px 0' };

export default class Facebook extends Component {
  render() {
    return (
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <h1> this is the Homepage </h1>
          <Link to="/"> Homepage </Link>
          <Link to="/resume"> Resume page </Link>
          <Link to="/app"> App </Link>
      </Row>
    )
  }
}
