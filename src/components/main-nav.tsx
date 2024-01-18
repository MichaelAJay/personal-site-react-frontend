import { ContactsOutlined, HomeOutlined, RocketOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { ROUTES } from "../utils/constants/routes.constant";
import Navigator from "./navigator";

const items: MenuProps['items'] = [
    {
        label: 'Home',
        key: '',
        icon: <HomeOutlined />
    },
    {
        label: 'Oddities',
        key: ROUTES.ODDITIES.SIERPINSKI,
        icon: <RocketOutlined />
    },
    {
        label: 'Contact',
        key: ROUTES.CONTACT,
        icon: <ContactsOutlined />
    }
];

function MainNav({ onNavigate }: { onNavigate: any }) {
    return (
        <Navigator
            onNavigate={onNavigate}
            mode="horizontal"
            items={items}            
        />
    )
}

export default MainNav;