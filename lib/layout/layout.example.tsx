import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';

import './layout.example.scss';

export default () => {
  return (
    <div>
      <h1>第一个例子</h1>
      <Layout className="wrapper">
        <Header className="header">header</Header>
        <Content className="content">content</Content>
        <Footer className="footer">footer</Footer>
      </Layout>
      <h1>第二个例子</h1>
      <Layout className="wrapper">
        <Header className="header">header</Header>
        <Layout>
          <Aside className="aside">aside</Aside>
          <Content className="content">content</Content>
        </Layout>
        <Footer className="footer">footer</Footer>
      </Layout>
      <h1>第三个例子</h1>
      <Layout className="wrapper">
        <Header className="header">header</Header>
        <Layout>
          <Content className="content">content</Content>
          <Aside className="aside">aside</Aside>
        </Layout>
        <Footer className="footer">footer</Footer>
      </Layout>
      <h1>第四个例子</h1>
      <Layout className="wrapper">
        <Aside className="aside">aside</Aside>
        <Layout>
          <Header className="header">header</Header>
          <Content className="content">content</Content>
          <Footer className="footer">footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};
