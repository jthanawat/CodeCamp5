import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './Homepage.css'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Button type="primary" id="button">
          Primary
        </Button>
        <Layout>
          <Layout>
            <Header>
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
              >
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
          </Layout>

          <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>

        <h1> this is the Homepage </h1>
        <Link to="/"> Homepage </Link>
        <Link to="/resume"> Resume page </Link>
        <Link to="/app"> App </Link>
        <Link to="/facebook"> Facebook </Link>
        <Link to="/login"> Log-in </Link>

      </div >
    )
  }
}
