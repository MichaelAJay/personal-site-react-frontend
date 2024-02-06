import './CustomHeader.css';
import { Button } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import MainNav from './MainNav';

function CustomHeader({ onNavigate }: { onNavigate: any }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <Header className="header">
      {/* <Header> */}
      <div className="header-logo-container">
        <img
          className="header-logo"
          src={`${process.env.PUBLIC_URL}/app-logo-400w.png`}
          alt="Logo - A mountain with a tree which suggests recursion"
        />
      </div>
      <MainNav onNavigate={onNavigate} />
      <Button className="header-login" onClick={handleLoginClick}>
        Login
      </Button>
    </Header>
  );
}

export default CustomHeader;
