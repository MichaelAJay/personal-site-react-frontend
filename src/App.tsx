import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SierpinksiTriangle from './pages/oddities/Sierpinski';
import { Layout } from 'antd';
import Home from './pages/home/home';
import { ROUTES } from './utils/constants/routes.constant';
import SiderNav from './components/SiderNav';
import OtherOddity from './pages/oddities/other-oddity';
import ContactForm from './pages/contact/ContactForm';
import { isSiderVisible } from './utils/functions/is-sider-visible.function';
import Login from './pages/auth/login';
import MessageViewer from './pages/admin/MessageViewer';
import CustomHeader from './components/CustomHeader';
import Signup from './pages/auth/signup';
const { Content } = Layout

function App() {
  const [currentPage, setCurrentPage] = useState('')

  return (
    <Router>
      <Layout className='App-layout'>
        <CustomHeader
          onNavigate={setCurrentPage}
        />
        <Layout>
          {isSiderVisible(currentPage) &&
            <SiderNav
              onNavigate={setCurrentPage}
              currentPage={currentPage}
            />          
          }

          <Layout className='App-layout-content'>
            <Content>
                <div>
                  <Routes>
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.ODDITIES.SIERPINSKI} element={<SierpinksiTriangle />} />
                    <Route path={ROUTES.ODDITIES.OTHER} element={<OtherOddity />} />
                    <Route path={ROUTES.CONTACT} element={<ContactForm />} />
                    <Route path={ROUTES.ADMIN.MESSAGES} element={<MessageViewer />} />
                    <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
                    <Route path={ROUTES.AUTH.SIGNUP} element={<Signup />} />
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
