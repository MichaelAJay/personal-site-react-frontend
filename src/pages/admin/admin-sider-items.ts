import { MenuProps } from "antd";
import { ROUTES } from "../../utils/constants/routes.constant";

export const adminSiderItems: MenuProps['items'] = [
    {
        label: 'View Messages',
        key: ROUTES.ADMIN.MESSAGES
    }
]