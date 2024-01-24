import { MenuProps } from "antd";
import { odditiesSiderItems } from "../pages/oddities/oddities-sider-items";
import Navigator from "./Navigator";
import { Layout } from "antd";
import { adminSiderItems } from "../pages/admin/admin-sider-items";
const { Sider } = Layout

const getItems = (currentPage: string) => {
    const pagePrefix = currentPage.split('/')[0];

    let items: MenuProps['items'] = [];
    switch (pagePrefix) {
        case 'oddities':
            items = odditiesSiderItems
            break;
        case 'admin':
            items = adminSiderItems
            break;
        default:
            console.error(`Invalid currentPage ${currentPage}`)
        }
    return items;
}

function SiderNav({ onNavigate, currentPage }: {
    onNavigate: any;
    currentPage: string
}) {
    return (
        <Sider>
            <Navigator
                onNavigate={onNavigate}
                mode="inline"
                items={getItems(currentPage)}            
            />
        </Sider>

    )
}

export default SiderNav;