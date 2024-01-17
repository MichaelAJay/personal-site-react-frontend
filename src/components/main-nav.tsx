import { useState } from "react";
import { HomeOutlined, RocketOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

const items: MenuProps['items'] = [
    {
        label: 'Home',
        key: '',
        icon: <HomeOutlined />
    },
    {
        label: 'Oddities',
        key: 'sierpinski',
        icon: <RocketOutlined />
    }
];

function MainNav({ onNavigate }: { onNavigate: any }) {
    const [current, setCurrent] = useState('');
    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        navigate(`/${e.key}`);
        onNavigate(e.key)
    }

    return (
        <Menu 
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            style={{ flex: 1, minWidth: 0 }}
        />
    )
}

export default MainNav;