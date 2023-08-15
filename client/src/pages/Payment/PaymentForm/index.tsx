import { Button, Form, Input } from "antd";
import styles from "./styles.module.scss";
const PaymentForm = () => {
  const [form] = Form.useForm();

  return (
    <div className={styles.wrapPaymentForm}>
      <div className={styles.paymentForm_title}>Thông tin thanh toán</div>
      <div className={styles.paymentForm_form}>
        <Form form={form} layout="vertical">
          <Form.Item
            label="Họ và tên"
            rules={[
              { required: true, message: "Họ và tên là trường bắt buộc" },
            ]}
          >
            <Input placeholder="Nhập họ và tên của bạn" />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            rules={[
              { required: true, message: "Số điện thoại là trường bắt buộc" },
            ]}
          >
            <Input placeholder="Nhập số điện thoại của bạn" />
          </Form.Item>
          <Form.Item
            label="Địa chỉ email"
            rules={[
              { required: true, message: "Địa chỉ email là trường bắt buộc" },
            ]}
          >
            <Input placeholder="Nhập địa chỉ email của bạn" />
          </Form.Item>
          <Form.Item
            label="Địa chỉ"
            rules={[{ required: true, message: "Địa chỉ là trường bắt buộc" }]}
          >
            <Input placeholder="Nhập địa chỉ giao hàng của bạn" />
          </Form.Item>
          <Form.Item label="Ghi chú đơn hàng">
            <Input.TextArea rows={4}/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Đặt hàng</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PaymentForm;
