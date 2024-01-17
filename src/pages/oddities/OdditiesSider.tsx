import { Layout, MenuProps } from "antd";

const { Sider } = Layout

const items: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `sider ${key}`
}))

function OdditiesSider() {
    return (
        <Sider>

        </Sider>
    )
}