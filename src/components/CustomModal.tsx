import { Modal } from 'antd';

function CustomModal({
  title,
  visible,
  onOk,
  onCancel,
  children,
  width,
  isFooterNull
}: {
  title: string;
  visible: boolean;
  onOk: any;
  onCancel: any;
  children: any;
  width?: number | string;
  isFooterNull?: boolean; // Footer includes "Ok" and "Cancel" buttons
}) {

  const modalProps = {
    title,
    visible,
    onOk,
    onCancel,
    width,
    ...(isFooterNull ? { footer: null } : {})
  }

  return (
    <Modal {...modalProps}
      // title={title}
      // visible={visible}
      // onOk={onOk}
      // onCancel={onCancel}
      // width={width}
    >
      {children}
    </Modal>
  );
}

export default CustomModal;
