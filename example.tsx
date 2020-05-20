import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import IconExample from './lib/icon/icon.example';
import IconDemo from './lib/icon/icon.demo';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import FormExample from './lib/form/form.example';
import Layout, { Aside, Content, Header, Footer } from './lib/layout/layout';
import './example.scss';

ReactDom.render(
  <Router>
    <Layout className="site-page">
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
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-content">
          <Switch>
            <Route path="/icon" component={IconDemo} />
            <Route path="/dialog" component={DialogExample} />
            <Route path="/layout" component={LayoutExample} />
            <Route path="/form" component={FormExample} />
            <Redirect to="/icon" />
          </Switch>
        </Content>
      </Layout>
      <Footer className="site-footer">&copy;&nbsp;Tuuu</Footer>
    </Layout>
  </Router>,
  document.getElementById('root')
);
