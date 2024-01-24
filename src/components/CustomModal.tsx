import { Modal } from "antd";

function CustomModal({title, visible, onOk, onCancel, children}: {
    title: string;
    visible: boolean;
    onOk: any;
    onCancel: any;
    children: any;
}) {
    return (
        <Modal
            title={title}
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
        >
            {children}
        </Modal>
    )
}

export default CustomModal