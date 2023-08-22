import { Button, Col, Form, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { OPTIONS_BRANCH, OPTIONS_STATUS_ORDER } from "constants/constant";

import styles from "./styles.module.scss";

interface IProps {
  items: any;
}

const EditPurchaseOrders = ({ items }: IProps) => {
  const [form] = useForm();

  return (
    <>
      <div className={styles.wrapEditPurchaseOrders}>
        <Form form={form} layout="vertical">
          <Form.Item label="Nhân viên tạo">
            <Select
              showSearch
              placeholder="Chọn nhân viên tạo"
              optionFilterProp="children"
              options={[
                {
                  value: "1",
                  label: "Nhân viên 1",
                },
                {
                  value: "2",
                  label: "Nhân viên 2",
                },
                {
                  value: "3",
                  label: "Nhân viên 3",
                },
                {
                  value: "4",
                  label: "Nhân viên 4",
                },
              ]}
            />
          </Form.Item>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item label="Trạng thái">
                <Select
                  showSearch
                  placeholder="Chọn trạng thái"
                  optionFilterProp="children"
                  options={OPTIONS_STATUS_ORDER}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Trạng thái nhập">
                <Select
                  showSearch
                  placeholder="Chọn trạng thái nhập"
                  optionFilterProp="children"
                  options={OPTIONS_STATUS_ORDER}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item label="Chi nhánh nhập">
                <Select
                  showSearch
                  placeholder="Chọn chi nhánh nhập"
                  optionFilterProp="children"
                  options={OPTIONS_BRANCH}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Nhà cung cấp">
                <Select
                  showSearch
                  placeholder="Chọn nhà cung cấp"
                  optionFilterProp="children"
                  options={OPTIONS_BRANCH}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button htmlType="submit">Chỉnh sửa</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default EditPurchaseOrders;
