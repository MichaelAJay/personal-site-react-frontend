import { Menu, MenuProps } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type MenuMode = 'vertical' | 'horizontal' | 'inline'

function Navigator({mode, items, onNavigate}: {mode: MenuMode, items: Array<any>, onNavigate: any}) {
    const [current, setCurrent] = useState('')

    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        navigate(`/${e.key}`);
        onNavigate(e.key)
    }

    const pickStyle = (mode: MenuMode) => {
        let style: Record<string, any>;
        switch (mode) {
            case 'horizontal':
                style = { flex: 1, minWidth: 0 };
                break;
            case 'vertical':    
            case 'inline':
                style = { height: '100%', borderRight: 0 };
                break;
            default:
                console.error(`Invalid mode ${mode}`)
                style = { height: '100%', borderRight: 0 };
        }
        return style;
    }

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode={mode}
            items={items}
            style={pickStyle(mode)}
        />
    )
}

export default Navigator