import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import{Layout,Typography,Space} from 'antd';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Cryptocurrencies from './components/Cryptocurrencies';
import Exchanges from './components/Exchanges';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';
import 'antd/dist/antd.css';


function App() {
  return (
    <div className='app'>
      <div className='navbar'>
          <Navbar/>
      </div>
      <div className='main'>
          <Layout>
              <div className='routes'>
                <Routes>
                  <Route exact path='/'
                    element={<Homepage/>}>
                  </Route>
                  <Route exact path='/cryptocurrencies'
                    element={<Cryptocurrencies/>}>
                  </Route>
                  <Route exact path='/exchanges'
                    element={<Exchanges/>}>
                  </Route>
                  <Route exact path='/crypto/:coinId'
                    element={<CryptoDetails/>}>
                  </Route>
                  <Route exact path='/news'
                    element={<News/>}>
                  </Route>
                </Routes>
              </div>
          </Layout>
      {/* </div> */}
      <div className='footer' level={5} style={{color:'white',textAlign:'center'}}>
          <Typography.Title>
            Cryptoverse<br/>
            All rights reserved

          </Typography.Title>
          <Space>
              <Link to='/'>Home</Link>
              <Link to='/exchanges'>Exchanges</Link>
              <Link to='/news'>News</Link>
          </Space>
          </div>
      </div>
    </div>
  );
}

export default App;

