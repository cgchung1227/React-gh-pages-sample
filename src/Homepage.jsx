import { useState } from 'react'
import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';


function Homepage() {

  return (
    <>
    <div className="container">
      <div className="content">
        <h2>Hi,I'm Cindy Chung</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, inventore corrupti perspiciatis, maxime officiis qui unde voluptatem praesentium quisquam quibusdam placeat in accusamus deleniti eum laboriosam neque velit cupiditate error.</p>
        <button>下載履歷</button>
      </div>
      <img src="img/001.jpeg" className='myPhoto'></img>
    </div>     
    </>
  )
}

export default Homepage
