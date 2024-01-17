import { HomeOutlined, RocketOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import Navigator from "./navigator";

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

function SiderNav({ onNavigate }: { onNavigate: any }) {
    return (
        <Navigator
            onNavigate={onNavigate}
            mode="horizontal"
            items={items}            
        />
    )
}

export default SiderNav;