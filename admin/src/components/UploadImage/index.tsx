import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import React, { useLayoutEffect, useState } from "react";

import { getBase64 } from "constants/convert";
import styles from "./styles.module.scss";

interface IProps {
  getListImage: (list: UploadFile[]) => void;
  listDf?: UploadFile[];
  listTotal?: number;
  disabled?: boolean;
  isMultiple?: boolean
}
const LIST_IMAGE_LENGTH = 5;
const UploadImage: React.FC<IProps> = ({
  getListImage,
  listDf = [],
  listTotal = LIST_IMAGE_LENGTH,
  disabled = false,
  isMultiple = false
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>(listDf);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await getBase64(file.originFileObj as RcFile);
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  useLayoutEffect(() => {
    getListImage(fileList);
  }, [fileList]);

  return (
    <div className={styles.wrapUploadImage}>
      <ImgCrop
        rotationSlider
        modalTitle="Upload ảnh"
        modalOk="Xác nhận"
        modalCancel="Hủy"
        aspect={1 / 1}
      >
        <Upload
          accept="image/png, image/jpeg"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
          disabled={disabled}
          multiple={isMultiple}
        >
          {fileList.length < listTotal && "Chọn ảnh"}
        </Upload>
      </ImgCrop>
    </div>
  );
};

export default UploadImage;
