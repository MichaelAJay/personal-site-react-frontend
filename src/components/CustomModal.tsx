import { Modal } from 'antd';
import './CustomModal.css';

function CustomModal({
  title,
  open,
  onOk,
  onCancel,
  children,
  width,
  isFooterNull,
}: {
  title: string;
  open: boolean;
  onOk: any;
  onCancel: any;
  children: any;
  width?: number | string;
  isFooterNull?: boolean; // Footer includes "Ok" and "Cancel" buttons
}) {
  const modalProps = {
    title,
    open,
    onOk,
    onCancel,
    width,
    ...(isFooterNull ? { footer: null } : {}),
  };

  return <Modal className='modal-container' {...modalProps}>{children}</Modal>;
}

export default CustomModal;
