import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { getByIdProduct, updateProduct } from "api/product";
import { QueryKey } from "constants/constant";
import { handleSuccessMessage } from "i18n";
import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

import styles from "./styles.module.scss";

interface IProps {
  productId: any;
  _onCloseModal: () => void;
  sizePage: any;
}

const EditProduct = ({ productId, _onCloseModal, sizePage }: IProps) => {
  const [form] = useForm();
  const queryClient = useQueryClient();

  const { data: detailProduct, isLoading } = useQuery(
    [QueryKey.GET_BY_ID_PRODUCT, productId],
    () => getByIdProduct(productId),
    {
      enabled: Boolean(productId),
    }
  );

  const { mutate: _onSubmit } = useMutation(
    (payload) => updateProduct(productId, payload),
    {
      onSuccess: (data) => {
        handleSuccessMessage(data);
        form.resetFields();
        _onCloseModal();
      },
      onSettled: () => {
        queryClient.invalidateQueries([QueryKey.LIST_PRODUCT_KEY, sizePage]);
      },
    }
  );

  useEffect(() => {
    form.setFieldsValue(detailProduct?.data);
    return () => form.resetFields();
  }, [detailProduct]);

  return (
    <>
      <div className={styles.wrapEditProduct}>
        <Form form={form} layout="vertical" onFinish={_onSubmit}>
          <Form.Item
            label="Tên sản phẩm"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
            name="product_name"
          >
            <Input placeholder="Nhập tên sản phẩm" />
          </Form.Item>
          <Form.Item
            label="Giá nhập"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
            name="entry_price"
          >
            <InputNumber
              prefix="￥"
              className="w-100"
              placeholder="Nhập giá nhập"
            />
          </Form.Item>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label="Loại sản phẩm"
                name="product_type"
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <Select
                  showSearch
                  placeholder="Chọn loại sản phẩm"
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
                      value: "Nước hoa",
                      label: "Nước hoa",
                    },
                    {
                      value: "Dầu gội",
                      label: "Dầu gội",
                    },
                    {
                      value: "Phấn trang điểm",
                      label: "Phấn trang điểm",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Mã vạch"
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
                name="barcode"
              >
                <InputNumber className="w-100" placeholder="Nhập mã vạch" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label="Giá cộng tác viên"
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
                name="contributor_price"
              >
                <InputNumber
                  className="w-100"
                  prefix="￥"
                  placeholder="Nhập giá cộng tác viên"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Giá bán"
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
                name="price"
              >
                <InputNumber
                  className="w-100"
                  prefix="￥"
                  placeholder="Nhập giá bán"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label="Số lượng"
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
                name="quantity"
              >
                <InputNumber className="w-100" placeholder="Nhập số lượng" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Chi nhánh"
                name="branch"
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <Select
                  showSearch
                  placeholder="Chọn chi nhánh"
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
                      value: "Chi nhánh 1",
                      label: "Chi nhánh 1",
                    },
                    {
                      value: "Chi nhánh 2",
                      label: "Chi nhánh 2",
                    },
                  ]}
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

export default EditProduct;
