import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { createProduct } from "api/product";
import { uploadMultiple } from "api/upload";
import UploadImage from "components/UploadImage";
import configs from "constants/config";
import { OPTIONS_BRANCH, QueryKey } from "constants/constant";
import { convertDataCategoryToOptions } from "constants/convert";
import { handleErrorMessage, handleSuccessMessage } from "i18n";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import useCategory from "utils/hooks/useCategory";

import styles from "./styles.module.scss";

interface IProps {
  _onCloseModal: () => void;
  sizePage: any;
}

const CreateProduct = ({ _onCloseModal, sizePage }: IProps) => {
  const [form] = useForm();
  const { categoryData } = useCategory({});
  const queryClient = useQueryClient();
  const [fileImages, setFileImages] = useState<any>([]);

  const { mutate: _onSubmit } = useMutation(
    async (payload: any) => {
      const images = new FormData();
      fileImages.forEach((file: any) => {
        images.append("file", file);
      });
      const response = await uploadMultiple(images);
      return createProduct({
        ...payload,
        images: response?.data?.urls.map(
          (item: any) => `${configs.API_UPLOAD_DOMAIN}${item.path}`
        ),
      });
    },
    {
      onSuccess: (data) => {
        handleSuccessMessage(data);
        form.resetFields();
        _onCloseModal();
      },
      onError: (error) => {
        handleErrorMessage(error);
      },
      onSettled: () => {
        queryClient.invalidateQueries([QueryKey.LIST_PRODUCT_KEY, sizePage]);
      },
    }
  );

  return (
    <>
      <div className={styles.wrapCreateProduct}>
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
          <Row gutter={[16, 16]}>
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
            <Col span={12}>
              <Form.Item
                label="Giá Sale"
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
                name="sale_price"
              >
                <InputNumber
                  className="w-100"
                  prefix="￥"
                  placeholder="Nhập giá sale"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label="Loại sản phẩm"
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
                  placeholder="Chọn loại sản phẩm"
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
          <Form.Item label="Ảnh sản phẩm" name="images">
            <UploadImage
              getListImage={(images) =>
                setFileImages(images.map((item) => item.originFileObj))
              }
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Tạo mới</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default CreateProduct;
