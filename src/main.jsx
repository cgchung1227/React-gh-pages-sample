import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Portfolio from './Portfolio'; // 作品集介紹頁面

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">首頁</Link>
        </li>
        <li>
          <Link to="/portfolio">作品集介紹</Link>
        </li>
      </ul>
    </nav>

    <Route path="/" exact component={Homepage} />
    <Route path="/portfolio" component={Portfolio} />
  </Router>
);
// React的環境建立在root的節點上，並進行渲染
// 所有檔案的進入點 