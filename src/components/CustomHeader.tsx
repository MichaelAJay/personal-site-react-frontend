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
        <Header style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
        <div style={{ height: '62px'}}>
          <img src="/logo.png" alt="Logo - A mountain with a tree which suggests recursion" style={{ height: '62px' }}/>
        </div>
        <MainNav onNavigate={onNavigate} />
        <Button onClick={handleLoginClick}>Login</Button>
      </Header>
    )
}

export default CustomHeader