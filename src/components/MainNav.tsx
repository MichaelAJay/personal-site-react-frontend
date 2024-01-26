import { CommentOutlined, ExperimentOutlined, EyeOutlined, HomeOutlined, RocketOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { ROUTES } from "../utils/constants/routes.constant";
import { isUserAdmin } from "../utils/functions/is-user-admin.function";
import Navigator from './Navigator'

const itemsWithoutAdmin: MenuProps['items'] = [
    {
        label: 'Home',
        key: '',
        icon: <HomeOutlined />
    },
    {
        label: 'About',
        key: ROUTES.ABOUT,
        icon: <RocketOutlined />
    },
    {
        label: 'Contact',
        key: ROUTES.CONTACT,
        icon: <CommentOutlined />
    },
    {
        label: 'Oddities',
        key: ROUTES.ODDITIES.SIERPINSKI,
        icon: <ExperimentOutlined />
    },
];

const itemsWithAdmin = itemsWithoutAdmin.concat([
    {
        label: 'Admin',
        key: ROUTES.ADMIN.MESSAGES,
        icon: <EyeOutlined />
    }
])

function MainNav({ onNavigate }: { onNavigate: any }) {
    return (
        <Navigator
            onNavigate={onNavigate}
            mode="horizontal"
            items={isUserAdmin() ? itemsWithAdmin : itemsWithoutAdmin}            
        />
    )
}

export default MainNav;