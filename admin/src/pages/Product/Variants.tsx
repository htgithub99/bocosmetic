import { Button, Drawer, Image, Popconfirm, Space, Table } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { getListProduct } from "api/product";
import MainContainer from "components/MainContainer";
import SearchHeaderTable from "components/SearchHeaderTable";
import { QueryKey } from "constants/constant";
import { formatMoney } from "constants/format";
import { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import EditProduct from "./components/EditProduct";
import styles from "./styles.module.scss";

interface DataType {
  key: React.Key;
  barcode: string;
  image: string;
  quantity: number;
  retail_price: number;
  product_version_name: number;
}

const Variants = () => {
  const [sizePage, setSizePage] = useState<any>({
    name: null,
  });
  const [updateDrawer, setUpdateDrawer] = useState<{
    productId: number | null;
    modalHas: boolean;
  }>({
    productId: null,
    modalHas: false,
  });

  const { data: productData, isLoading: isLoadingProductData } = useQuery(
    [QueryKey.LIST_PRODUCT_KEY, sizePage],
    () => getListProduct(sizePage),
    {}
  );

  const columns: ColumnsType<DataType> = [
    {
      title: "Mã vạch",
      dataIndex: "barcode",
      ellipsis: true,
      responsive: ["md"],
      align: "left",
      width: 150,
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      ellipsis: true,
      responsive: ["md"],
      align: "center",
      width: 150,
      render: (url: string) =>
        url ? (
          <Image src={url} alt={url} />
        ) : (
          <span className="material-symbols-outlined">imagesmode</span>
        ),
    },
    {
      title: "Tồn kho",
      dataIndex: "quantity",
      ellipsis: true,
      responsive: ["md"],
      align: "center",
      width: 150,
      render: (text: string) => text,
    },
    {
      title: "Giá bán lẻ",
      dataIndex: "price",
      ellipsis: true,
      responsive: ["md"],
      align: "right",
      width: 150,
      render: (text: string) => text,
    },
    {
      title: "Tên phiên bản sản phẩm",
      dataIndex: "product_version_name",
      ellipsis: true,
      responsive: ["md"],
      align: "left",
      render: (_, record) => {
        return (
          <div className={styles.productVersionName}>
            <Link to="#">Nước hoa hồng Sắc Ngọc Khang 195ml</Link>
            <p>8809471816521</p>
          </div>
        );
      },
    },
    {
      title: "Tác vụ",
      dataIndex: "action",
      ellipsis: true,
      responsive: ["md"],
      width: 200,
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="dashed"
            onClick={() => onClickUpdateProduct(record)}
            htmlType="button"
            size="small"
          >
            Chỉnh sửa
          </Button>
          <Popconfirm
            title="Xóa phiên bản"
            placement="topLeft"
            description="Bạn chắc chắn muốn xóa?"
            onConfirm={() => {}}
            okText="Xác nhận"
            cancelText="Hủy"
          >
            <Button type="dashed" htmlType="button" size="small">
              Xóa
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const _onPaginationTable = (pageIndex: any) => {
    setSizePage({
      ...sizePage,
      pageIndex,
    });
  };

  const onClickUpdateProduct = ({ _id }: any) => {
    setUpdateDrawer({
      productId: _id,
      modalHas: true,
    });
  };

  const _onCloseDrawerEdit = () =>
    setUpdateDrawer({
      productId: null,
      modalHas: false,
    });

  const data: DataType[] = productData?.data?.map((item: any) => ({
    ...item,
    key: item._id,
    price: formatMoney(item?.price),
  }));

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {},
    getCheckboxProps: (record: DataType) => ({
      disabled: false,
      barcode: record.barcode,
    }),
  };

  const _renderDrawerEdit = () => {
    if (updateDrawer.modalHas)
      return (
        <Drawer
          title="Sửa sản phẩm"
          placement="right"
          onClose={_onCloseDrawerEdit}
          open={updateDrawer.modalHas}
        >
          <EditProduct
            productId={updateDrawer.productId}
            _onCloseModal={() => _onCloseDrawerEdit()}
            sizePage={sizePage}
          />
        </Drawer>
      );
    return null;
  };
  return (
    <MainContainer classW="h-100">
      <div className={styles.wrapVariants}>
        <SearchHeaderTable btnCreateHas={false} />
        <div className={styles.wrapContent}>
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            loading={isLoadingProductData}
            pagination={{
              total: productData?.totalItems,
              showTotal: (total, range) =>
                `Từ ${productData?.pageIndex || 1} đến ${total} trên tổng ${
                  productData?.totalItems
                }`,
              defaultPageSize: productData?.pageSize || 5,
              defaultCurrent: 1,
              onChange: (page) => _onPaginationTable(page),
            }}
          />
        </div>
      </div>
      {_renderDrawerEdit()}
    </MainContainer>
  );
};

export default Variants;
