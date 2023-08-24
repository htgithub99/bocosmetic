import {
  DownloadOutlined,
  PlusOutlined,
  SearchOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Input, Upload } from "antd";
import type { UploadProps } from "antd/es/upload/interface";
import { useState } from "react";
import useViewport from "utils/hooks/useViewport";
import styles from "./styles.module.scss";

interface IProps {
  _onCreate?: () => void;
  btnCreateHas?: boolean;
  btnHeaderImport?: boolean;
  onImportFile?: (excelData: any) => void;
  onExportFile?: () => void;
  _onSearchField?: (value: any) => void;
  placeholderInputSearch?: string;
  background?: string;
}

const SearchHeaderTable = ({
  _onCreate,
  btnCreateHas = true,
  btnHeaderImport = true,
  _onSearchField,
  placeholderInputSearch,
  onImportFile = () => {},
  onExportFile = () => {},
  background = "#f0f1f1",
}: IProps) => {
  const { isMobile } = useViewport();
  const [inputValue, setInputValue] = useState<string>("");

  const onChange: UploadProps["onChange"] = ({ file: fileI }) => {
    const file = fileI.originFileObj;
    const formData = new FormData();
    formData.append("file", file as any);
    onImportFile(formData);
  };

  return (
    <>
      <div className={styles.sticky__search}>
        {btnHeaderImport && (
          <div className={styles.wrapBtnHeaderTable}>
            <div className={styles.btn__import}>
              <Button
                icon={<DownloadOutlined />}
                htmlType="button"
                size={isMobile ? "middle" : "large"}
              >
                <Upload accept=".xlsx, .xls" fileList={[]} onChange={onChange}>
                  Nhập file
                </Upload>
              </Button>
              <Button
                onClick={() => onExportFile()}
                icon={<UploadOutlined />}
                htmlType="button"
                size={isMobile ? "middle" : "large"}
              >
                Xuất file
              </Button>
            </div>
            <div className={styles.btn_create}>
              {btnCreateHas && (
                <Button
                  icon={<PlusOutlined />}
                  htmlType="button"
                  size={isMobile ? "middle" : "large"}
                  onClick={() => _onCreate && _onCreate()}
                >
                  Tạo mới
                </Button>
              )}
            </div>
          </div>
        )}
        <div className={styles.wrapSearchHeaderTable}>
          <div className={styles.search_item}>
            <Input
              size={isMobile ? "middle" : "large"}
              placeholder={placeholderInputSearch}
              prefix={
                <SearchOutlined style={{ fontSize: "18px", color: "#08c" }} />
              }
              onChange={(event: any) => {
                setInputValue(event?.target?.value);
              }}
            />
          </div>
          <div className={styles.search_button}>
            <Button
              htmlType="button"
              size={isMobile ? "middle" : "large"}
              onClick={() => _onSearchField && _onSearchField(inputValue)}
            >
              Lưu bộ lọc
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchHeaderTable;
