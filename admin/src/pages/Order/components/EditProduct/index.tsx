import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { createOrder, getByIdOrder, updateOrder } from "api/order";
import ModalListProduct from "components/Modal/ModalListProduct";
import { QueryKey } from "constants/constant";
import { handleErrorMessage, handleSuccessMessage } from "i18n";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

import styles from "./styles.module.scss";

interface IProps {
  orderId: any;
  sizePage?: any;
  _onCloseModal: () => void;
}

const EditOrder = ({ orderId, sizePage, _onCloseModal }: IProps) => {
  const [form] = useForm();
  const queryClient = useQueryClient();
  const [payData, setPayData] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data: orderDetail, isLoading } = useQuery(
    [QueryKey.GET_BY_ID_ORDER, orderId],
    () => getByIdOrder(orderId),
    {
      enabled: Boolean(orderId),
    }
  );

  const { mutate: _onSubmit } = useMutation(
    (payload: any) =>
      updateOrder(orderId, {
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
    form.setFieldsValue(orderDetail?.data);
    setPayData(orderDetail?.data?.product);
    return () => form.resetFields();
  }, [orderDetail]);

  return (
    <>
      <div className={styles.wrapEditOrder}>
        <Form form={form} onFinish={_onSubmit} layout="vertical">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label="Tên khách hàng"
                name="customer_name"
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <Input placeholder="Nhập tên khách hàng" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Mã đơn hàng"
                name="code_order"
                rules={[
                  {
                    required: true,
                    message: "",
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
                name="creator_order"
                rules={[
                  {
                    required: true,
                    message: "",
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
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <InputNumber className="w-100" placeholder="Nhập khách phải trả" />
          </Form.Item>
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
        _onClose={() => _onClose()}
        quantityHas
        payData={payData}
        _setPayData={setPayData}
      />
    </>
  );
};

export default EditOrder;
