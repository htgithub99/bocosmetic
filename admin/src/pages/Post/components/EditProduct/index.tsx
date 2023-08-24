import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { getByIdPost, updatePost } from "api/post";
import { QueryKey } from "constants/constant";
import { handleSuccessMessage } from "i18n";
import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

import styles from "./styles.module.scss";

interface IProps {
  postId: any;
  _onCloseModal: () => void;
  sizePage: any;
}

const EditProduct = ({ postId, _onCloseModal, sizePage }: IProps) => {
  const [form] = useForm();
  const queryClient = useQueryClient();

  const { data: detailPost, isLoading } = useQuery(
    [QueryKey.GET_BY_ID_PRODUCT, postId],
    () => getByIdPost(postId),
    {
      enabled: Boolean(postId),
    }
  );

  const { mutate: _onSubmit } = useMutation(
    async (payload: any) => {
      return updatePost(postId, {
        ...payload,
      });
    },
    {
      onSuccess: (data) => {
        handleSuccessMessage(data);
        form.resetFields();
        _onCloseModal();
      },
      onSettled: () => {
        queryClient.invalidateQueries([QueryKey.LIST_POST_KEY, sizePage]);
      },
    }
  );

  useEffect(() => {
    form.setFieldsValue(detailPost?.data);
    return () => form.resetFields();
  }, [detailPost]);

  return (
    <>
      <div className={styles.wrapEditProduct}>
        <Form form={form} layout="vertical" onFinish={_onSubmit}>
          <Form.Item
            label="Tiêu đề bài viết"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
            name="title"
          >
            <Input placeholder="Nhập tiêu đề bài viết" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Chỉnh sửa</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default EditProduct;
