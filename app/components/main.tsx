"use client"
import React from 'react';
import { Layout, Flex } from 'antd';
const { Header, Footer, Content } = Layout;
import HeaderContent from './header';
import CenterContent from './requestTest';

const App: React.FC = () => (
  <Flex gap="middle" wrap="wrap">
    <Layout className='main-layout' style={layoutStyle}>
      <Header style={headerStyle}><HeaderContent /></Header>
      <Content style={contentStyle}><CenterContent /></Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Flex>
);

export default App;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  padding: 0,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '60px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle = {
};