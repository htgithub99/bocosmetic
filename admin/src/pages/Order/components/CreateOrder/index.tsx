import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { createOrder } from "api/order";
import ModalListProduct from "components/Modal/ModalListProduct";
import { QueryKey } from "constants/constant";
import { handleErrorMessage, handleSuccessMessage } from "i18n";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";

import styles from "./styles.module.scss";

interface IProps {
  sizePage?: any;
  _onCloseModal: () => void;
}

const CreateOrder = ({ sizePage, _onCloseModal }: IProps) => {
  const [form] = useForm();
  const queryClient = useQueryClient();
  const [payData, setPayData] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { mutate: _onSubmit } = useMutation(
    (payload: any) =>
      createOrder({
        ...payload,
        product: payData,
      }),
    {
      onSuccess: (data) => {
        queryClient?.invalidateQueries([QueryKey.LIST_ORDER_KEY, sizePage]);
        handleSuccessMessage(data);
        _onCloseModal();
      },
      onError: (error) => {
        handleErrorMessage(error);
      },
    }
  );

  const _onClose = () => setIsModalOpen(false);

  useEffect(() => {
    return () => {
      console.log('Run...')
      form.resetFields();
      setPayData([]);
    };
  }, []);

  return (
    <>
      <div className={styles.wrapCreateOrder}>
        <Form form={form} onFinish={_onSubmit} layout="vertical">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label="Tên khách hàng"
                required
                tooltip="Tên khách hàng không được để trống!"
                name="customer_name"
                rules={[
                  {
                    required: true,
                    message: "Tên khách hàng không được để trống!",
                  },
                ]}
              >
                <Input placeholder="Nhập tên khách hàng" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Mã đơn hàng"
                required
                tooltip="Mã đơn hàng không được để trống!"
                name="code_order"
                rules={[
                  {
                    required: true,
                    message: "Mã đơn hàng không được để trống!",
                  },
                ]}
              >
                <Input placeholder="Nhập mã đơn hàng" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label="Người tạo đơn"
                required
                tooltip="Người tạo đơn không được để trống!"
                name="creator_order"
                rules={[
                  {
                    required: true,
                    message: "Người tạo đơn không được để trống!",
                  },
                ]}
              >
                <Input placeholder="Nhập người tạo đơn" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="ordering_branch" label="Chi nhánh tạo đơn">
                <Select
                  showSearch
                  placeholder="Chi nhánh tạo đơn"
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
                      value: "Cơ sở 1",
                      label: "Cơ sở 1",
                    },
                    {
                      value: "Cơ sở 2",
                      label: "Cơ sở 2",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item name="order_status" label="Trạng thái đơn hàng">
                <Select
                  showSearch
                  placeholder="Chọn trạng thái đơn hàng"
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
                      value: "Đặt hàng",
                      label: "Đặt hàng",
                    },
                    {
                      value: "Đang giao dịch",
                      label: "Đang giao dịch",
                    },
                    {
                      value: "Hoàn thành",
                      label: "Hoàn thành",
                    },
                    {
                      value: "Đã hủy",
                      label: "Đã hủy",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="payment_status" label="Trạng thái Thanh toán">
                <Select
                  showSearch
                  placeholder="Chọn trạng thái Thanh toán"
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
                      value: "Chưa thanh toán",
                      label: "Chưa thanh toán",
                    },
                    {
                      value: "Thanh toán một phần",
                      label: "Thanh toán một phần",
                    },
                    {
                      value: "Thanh toán toàn bộ",
                      label: "Thanh toán toàn bộ",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label="Khách phải trả"
            name="guest_must_pay"
            required
            tooltip="Khách phải trả không được để trống!"
            rules={[
              {
                required: true,
                message: "Khách phải trả không được để trống!",
              },
            ]}
          >
            <InputNumber className="w-100" placeholder="Nhập khách phải trả" />
          </Form.Item>
          <Form.Item>
            <Button
              type="dashed"
              htmlType="button"
              className="w-100"
              onClick={() => setIsModalOpen(true)}
            >
              Chọn sản phẩm
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tạo mới
            </Button>
          </Form.Item>
        </Form>
      </div>
      <ModalListProduct
        isModalOpen={isModalOpen}
        _onClose={() => _onClose()}
        quantityHas
        payData={payData}
        _setPayData={setPayData}
      />
    </>
  );
};

export default CreateOrder;
