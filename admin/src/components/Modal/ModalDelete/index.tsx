import { Descriptions, Modal } from "antd";
import styles from "./styles.module.scss";

interface IProps {
  isModalOpen: boolean;
  _onSubmit?: () => void;
  _onClose: () => void;
  title?: string;
  descriptions?: string;
}

const ModalDelete = ({
  isModalOpen,
  _onSubmit,
  _onClose,
  title = "Modal xóa",
  descriptions = "Bạn có chắc chắn muốn xóa?",
}: IProps) => {
  return (
    <Modal
      title={title}
      centered
      // width={800}
      open={isModalOpen}
      okText="Xác nhận"
      cancelText="Thoát"
      onOk={_onSubmit}
      onCancel={_onClose}
    >
      <div className={styles.wrapModalDelete}>
        <div className={styles.modalDelete_content}>
          <p>{descriptions}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDelete;
