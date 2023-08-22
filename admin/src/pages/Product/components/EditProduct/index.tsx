import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { getByIdProduct, updateProduct } from "api/product";
import { OPTIONS_BRANCH, QueryKey } from "constants/constant";
import { convertDataCategoryToOptions } from "constants/convert";
import { handleSuccessMessage } from "i18n";
import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import useCategory from "utils/hooks/useCategory";

import styles from "./styles.module.scss";

interface IProps {
  productId: any;
  _onCloseModal: () => void;
  sizePage: any;
}

const EditProduct = ({ productId, _onCloseModal, sizePage }: IProps) => {
  const [form] = useForm();
  const queryClient = useQueryClient();
  const { categoryData } = useCategory({});

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
            name="intial_price"
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
                label="Danh mục sản phẩm"
                name="category_id"
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <Select
                  showSearch
                  placeholder="Chọn danh mục sản phẩm"
                  optionFilterProp="children"
                  options={convertDataCategoryToOptions(categoryData?.data)}
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
                <Input className="w-100" placeholder="Nhập mã vạch" />
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
                name="vendor_price"
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

export default EditProduct;
