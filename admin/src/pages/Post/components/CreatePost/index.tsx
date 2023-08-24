import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { createPost } from "api/post";
import { upload } from "api/upload";
import TextEditor from "components/TextEditor";
import UploadImage from "components/UploadImage";
import configs from "constants/config";
import { QueryKey } from "constants/constant";
import { handleErrorMessage, handleSuccessMessage } from "i18n";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

import styles from "./styles.module.scss";

interface IProps {
  _onCloseModal: () => void;
  sizePage: any;
}

const CreatePost = ({ _onCloseModal, sizePage }: IProps) => {
  const [form] = useForm();
  const [fileImages, setFileImages] = useState<any>([]);
  const queryClient = useQueryClient();

  const { mutate: _onSubmit } = useMutation(
    async (payload: any) => {
      const images = new FormData();
      fileImages.forEach((file: any) => {
        images.append("file", file);
      });
      const { data } = await upload(images);
      return createPost({
        ...payload,
        image: `${configs.API_UPLOAD_DOMAIN}${data.url}`,
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
        queryClient.invalidateQueries([QueryKey.LIST_POST_KEY, sizePage]);
      },
    }
  );
  console.log("______________________ fileImages", fileImages);
  return (
    <>
      <div className={styles.wrapCreatePost}>
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
          <Form.Item
            label="Nội dung"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
            name="content"
          >
            <TextEditor onChange={() => {}} />
          </Form.Item>
          <Form.Item label="Ảnh sản phẩm" name="images">
            <UploadImage
              getListImage={(images) =>
                setFileImages(images.map((item) => item.originFileObj))
              }
              listTotal={1}
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

export default CreatePost;
