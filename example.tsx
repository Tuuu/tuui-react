import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import Layout, { Aside, Content, Header, Footer } from './lib/layout/layout';
import './example.scss';

ReactDom.render(
  <Router>
    <Layout>
      <Header className="site-header">
        <div className="logo">tui</div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h1>组件</h1>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">布局</NavLink>
            </li>
          </ul>
        </Aside>
        <Content>
          <Route path="/icon" component={IconExample} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
        </Content>
      </Layout>
      <Footer className="site-footer">&copy;&nbsp;Tuuu</Footer>
    </Layout>
  </Router>,
  document.getElementById('root')
);
