import { Modal } from "antd";

function CustomModal({title, visible, onOk, onCancel, children, width}: {
    title: string;
    visible: boolean;
    onOk: any;
    onCancel: any;
    children: any;
    width?: number | string; // px
}) {
    return (
        <Modal
            title={title}
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
            width={width}
        >
            {children}
        </Modal>
    )
}

export default CustomModal