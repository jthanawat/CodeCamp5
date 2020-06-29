import React from 'react'
import { Table, Row, Col } from 'antd';

function Antd() {
  const students = [{
    "first_name": "Nona",
    "last_name": "St. Hill",
    "email": "nsthill0@miitbeian.gov.cn",
    "gender": "Female",
    "university": "Istanbul Arel University"
  }, {
    "first_name": "Felice",
    "last_name": "Wilcocke",
    "email": "fwilcocke1@nytimes.com",
    "gender": "Male",
    "university": "University of Maryland Baltimore County"
  }, {
    "first_name": "Chester",
    "last_name": "Ruske",
    "email": "cruske2@spotify.com",
    "gender": "Male",
    "university": "Rafsanjan University of Medical Sciences"
  }, {
    "first_name": "Christye",
    "last_name": "Biddy",
    "email": "cbiddy3@sakura.ne.jp",
    "gender": "Female",
    "university": "Universidad Cientifica Latinoamericana de Hidalgo"
  }, {
    "first_name": "Naoma",
    "last_name": "Bithell",
    "email": "nbithell4@is.gd",
    "gender": "Female",
    "university": "Kashan University of Medical Sciences"
  }, {
    "first_name": "Adore",
    "last_name": "Spaldin",
    "email": "aspaldin5@wunderground.com",
    "gender": "Female",
    "university": "Canisius College"
  }]

  const columns = [
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Gender",
      dataIndex: "gender"
    },
    {
      title: "First Name",
      dataIndex: "first_name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
    },
    {
      title: "University",
      dataIndex: "university",
    }
  ]

  return (
    <div>
      <Row justify="center">
        <Col xs={24} sm={22} md={20} lg={16} xl={14} xxl={12}>
          <Table bordered columns={columns} dataSource={students} />
        </Col>
      </Row>
    </div>
  )
}

export default Antd;
