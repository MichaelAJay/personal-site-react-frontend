import { HomeOutlined, RocketOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { odditiesSiderItems } from "../pages/oddities/oddities-sider-items";
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


const getItems = (currentPage: string) => {
    let items: MenuProps['items'] = [];
    switch (currentPage) {
        // I want to use the keys here
        // This one should be changed because the base key of the Oddities page shouldn't be 'sierpinski'
        case 'oddities':
        case 'sierpinski':
            items = odditiesSiderItems
            break;
        default:
            console.error(`Invalid currentPage ${currentPage}`)

        return items;
    }
}

function SiderNav({ onNavigate, currentPage }: {
    onNavigate: any;
    currentPage: string
}) {
    return (
        <Navigator
            onNavigate={onNavigate}
            mode="horizontal"
            items={getItems(currentPage)}            
        />
    )
}

export default SiderNav;