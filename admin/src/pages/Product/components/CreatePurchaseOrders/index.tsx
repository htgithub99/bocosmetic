import { Button, Col, Form, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import ModalListProduct from "components/Modal/ModalListProduct";
import { OPTIONS_BRANCH, OPTIONS_STATUS_ORDER } from "constants/constant";
import { useState } from "react";

import styles from "./styles.module.scss";

const CreatePurchaseOrders = () => {
  const [form] = useForm();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const _onSubmit = () => {};

  const _onClose = () => setIsModalOpen(false);

  return (
    <>
      <div className={styles.wrapCreatePurchaseOrders}>
        <Form form={form} layout="vertical">
          {/* <Form.Item
            label="Mã đơn nhập"
            required
          >
            <Input placeholder="Nhập mã đơn nhập" />
          </Form.Item> */}
          <Form.Item label="Nhân viên tạo">
            <Select
              showSearch
              placeholder="Chọn nhân viên tạo"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
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
            <Button
              htmlType="button"
              className="w-100"
              onClick={() => setIsModalOpen(true)}
            >
              Chọn sản phẩm
            </Button>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Tạo mới</Button>
          </Form.Item>
        </Form>
      </div>
      <ModalListProduct
        isModalOpen={isModalOpen}
        _onSubmit={() => _onSubmit()}
        _onClose={() => _onClose()}
      />
    </>
  );
};

export default CreatePurchaseOrders;
