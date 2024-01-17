import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SierpinksiTriangle from './pages/oddities/sierpinski';
import MainNav from './components/main-nav';
import { Layout, Menu, MenuProps } from 'antd';
import Home from './pages/home/home';
const { Header, Content, Sider } = Layout

const siderItems: MenuProps['items'] = ['itm 1', 'itm 2', 'itm 3'].map((str, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    label: `subnav ${key}`,
  }
})

function App() {
  const [currentPage, setCurrentPage] = useState('')

  return (
    <Router>
      <Layout style={{ background: 'transparent' }}>
        <Header style={{ display: 'flex', alignItems: 'center', padding: 0, backgroundColor: '#c95d5d' }}>
          <div style={{ height: '62px', padding: '1px 0'}}>
            <img src="/sierpinski-logo.svg" alt="Logo - Sierpinski triangle" style={{ height: '62px' }}/>
          </div>
          <MainNav onNavigate={setCurrentPage} />
        </Header>
        <Layout>
          {currentPage !== '' &&
            <Sider width={200}>
              <Menu
                mode="inline"
                style={{ height: '100%', borderRight: 0 }}
                items={siderItems}
              />
            </Sider>          
          }

          <Layout style={{ padding: '0 24px 24px', background: 'transparent' }}>
            <Content>
                <div>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sierpinski" element={<SierpinksiTriangle />} />
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
