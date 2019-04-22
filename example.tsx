import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import IconExample from './lib/icon/icon.example';

ReactDom.render(
  <Router>
    <div>
      <header>
        <div className="logo">tui</div>
      </header>
    </div>
    <div>
      <aside>
        <h1>组件</h1>
        <ul>
          <li>
            <Link to="/icon">Icon</Link>
          </li>
          <li>
            <Link to="/button">Button</Link>
          </li>
        </ul>
      </aside>
      <main>
        <Route path="/icon" component={IconExample} />
      </main>
    </div>
  </Router>,
  document.getElementById('root'),
);
