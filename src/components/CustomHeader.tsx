import './CustomHeader.css'
import { Button } from "antd"
import { Header } from "antd/es/layout/layout"
import { useNavigate } from "react-router-dom";
import MainNav from "./MainNav"

function CustomHeader({ onNavigate }: { onNavigate: any }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login')
  }

    return (
        <Header className='Header'>
          <div className='Header-logo'>
            <img src="/logo.png" alt="Logo - A mountain with a tree which suggests recursion" style={{ height: '62px' }}/>
          </div>
          <MainNav onNavigate={onNavigate} />
          <Button className='Header-login' onClick={handleLoginClick}>Login</Button>
        </Header>
    )
}

export default CustomHeader