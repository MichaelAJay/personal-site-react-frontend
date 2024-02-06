import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Affix, Layout } from 'antd';
import { ROUTES } from './utils/constants/routes.constant';
import SiderNav from './components/SiderNav';
import OtherOddity from './pages/oddities/OtherOddity';
import Login from './pages/auth/login';
import MessageViewer from './pages/admin/MessageViewer';
import CustomHeader from './components/CustomHeader';
import Signup from './pages/auth/signup';
import { isUserAdmin } from './utils/functions/is-user-admin.function';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import SierpinksiTriangle from './pages/oddities/Sierpinski';
import { getEnvVar } from './utils/functions/get-env-var.function';
const { Content } = Layout;

function App() {
  const [currentPage, setCurrentPage] = useState('');
  console.log('REACT_APP_ENV', getEnvVar('REACT_APP_ENV'))
  console.log('REACT_APP_ENV is local', getEnvVar('REACT_APP_ENV') === 'local')
  console.log('publicUrl', process.env.PUBLIC_URL)
  const basename = getEnvVar('REACT_APP_ENV') === 'local' ? '' : process.env.PUBLIC_URL;
  console.log('basename', basename)

  return (
    <Router basename={basename}>
      <Layout className="App-layout">
        <Affix>
          <CustomHeader onNavigate={setCurrentPage} />
        </Affix>
        <Layout>
          <SiderNav onNavigate={setCurrentPage} currentPage={currentPage} />

          <Layout className="App-layout-content">
            <Content className="app-content">
              <div>
                <Routes>
                  <Route path={ROUTES.HOME} element={<Home />} />
                  <Route path={ROUTES.ABOUT} element={<About />} />
                  <Route
                    path={ROUTES.ODDITIES.SIERPINSKI}
                    element={<SierpinksiTriangle />}
                  />
                  <Route
                    path={ROUTES.ODDITIES.OTHER}
                    element={<OtherOddity />}
                  />
                  <Route path={ROUTES.CONTACT} element={<Contact />} />
                  {isUserAdmin() && (
                    <Route
                      path={ROUTES.ADMIN.MESSAGES}
                      element={<MessageViewer />}
                    />
                  )}
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
