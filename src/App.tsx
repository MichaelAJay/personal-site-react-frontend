import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SierpinksiTriangle from './pages/oddities/sierpinski';
import MainNav from './components/main-nav';
import { Layout } from 'antd';
import Home from './pages/home/home';
import { ROUTES } from './utils/constants/routes.constant';
import SiderNav from './components/sider-nav';
import OtherOddity from './pages/oddities/other-oddity';
import ContactForm from './pages/contact/contact-form';
import { isSiderVisible } from './utils/functions/is-sider-visible.function';
const { Header, Content } = Layout

function App() {
  const [currentPage, setCurrentPage] = useState('')



  return (
    <Router>
      <Layout style={{ background: 'transparent' }}>
        <Header style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
          <div style={{ height: '62px'}}>
            <img src="/logo.png" alt="Logo - A mountain with a tree which suggests recursion" style={{ height: '62px' }}/>
          </div>
          <MainNav onNavigate={setCurrentPage} />
        </Header>
        <Layout>
          {isSiderVisible(currentPage) &&
            <SiderNav
              onNavigate={setCurrentPage}
              currentPage={currentPage}
            />          
          }

          <Layout style={{ padding: '0 24px 24px', background: 'transparent' }}>
            <Content>
                <div>
                  <Routes>
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.ODDITIES.SIERPINSKI} element={<SierpinksiTriangle />} />
                    <Route path={ROUTES.ODDITIES.OTHER} element={<OtherOddity />} />
                    <Route path={ROUTES.CONTACT} element={<ContactForm />} />
                  </Routes>
                </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
