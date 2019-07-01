import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';

export default () => {
  return (
    <div>
      <h1>第一个例子</h1>
      <Layout className='hi'>
        <Header>header</Header>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Layout>
    </div>
  );
};