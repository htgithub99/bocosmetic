import { Button, Form, Input } from "antd";
import styles from "./styles.module.scss";
const PaymentForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <div className={styles.wrapPaymentForm}>
      <div className={styles.paymentForm_title}>Thông tin thanh toán</div>
      <div className={styles.paymentForm_form}>
        <Form
          form={form}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Họ và tên"
            name="name"
            rules={[
              { required: true, message: "" },
            ]}
          >
            <Input placeholder="Nhập họ và tên của bạn" />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[
              { required: true, message: "" },
            ]}
          >
            <Input placeholder="Nhập số điện thoại của bạn" />
          </Form.Item>
          <Form.Item
            label="Địa chỉ email"
            name="email"
            rules={[
              { required: true, message: "" },
            ]}
          >
            <Input placeholder="Nhập địa chỉ email của bạn" />
          </Form.Item>
          <Form.Item
            label="Địa chỉ"
            name="address"
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="Nhập địa chỉ giao hàng của bạn" />
          </Form.Item>
          <Form.Item label="Ghi chú đơn hàng" name="note">
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Đặt hàng
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PaymentForm;
