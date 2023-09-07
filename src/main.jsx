import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // 引入Routes
import Homepage from './Homepage';
import Portfolio from './Portfolio'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
        
          <Homepage/>
          <Link to="/portfolio">作品集介紹</Link>

    <Routes>
      <Route path="/" exact component={Homepage} />
      <Route path="/portfolio" component={Portfolio} />
    </Routes>
  </Router>
);
// React的環境建立在root的節點上，並進行渲染
// 所有檔案的進入點 