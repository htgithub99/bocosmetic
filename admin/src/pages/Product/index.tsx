import { Button, Drawer, Popconfirm, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { deleteProduct, getListProduct } from "api/product";
import MainContainer from "components/MainContainer";
import SearchHeaderTable from "components/SearchHeaderTable";
import { QueryKey } from "constants/constant";
import { formatMoney } from "constants/format";
import { handleErrorMessage, handleSuccessMessage } from "i18n";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import CreateProduct from "./components/CreateProduct";
import styles from "./styles.module.scss";

interface DataType {
  key: React.Key;
  name: string;
  type: string;
  total: number;
  price: number;
}

const Product = () => {
  const queryClient = useQueryClient();
  const [isDrawerCreate, setIsDrawerCreate] = useState<boolean>(false);

  const [sizePage, setSizePage] = useState<any>({
    name: null,
  });

  const { data: productData, isLoading: isLoadingProduct } = useQuery(
    [QueryKey.LIST_PRODUCT_KEY, sizePage],
    () => getListProduct(sizePage),
    {}
  );

  const { mutate: onDeleteProduct } = useMutation(
    ({ _id }: any) => deleteProduct(_id),
    {
      onSuccess: (data) => {
        handleSuccessMessage(data);
      },
      onError: (error) => handleErrorMessage(error),
      onSettled: () =>
        queryClient.invalidateQueries([QueryKey.LIST_PRODUCT_KEY, sizePage]),
    }
  );

  const _onSearchField = (value: any) => {
    setSizePage({
      ...sizePage,
      name: value,
    });
  };

  const _onPaginationTable = (pageIndex: any) => {
    setSizePage({
      ...sizePage,
      pageIndex,
    });
  };

  const COLUMNS_PRODUCT: ColumnsType<DataType> = [
    {
      title: "Tên sản phẩm",
      dataIndex: "product_name",
      ellipsis: true,
      responsive: ["md"],
      align: "left",
      render: (text: string) => <a>{text}</a>,
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
          <Popconfirm
            title="Xóa sản phẩm"
            placement="topLeft"
            description="Bạn chắc chắn muốn xóa?"
            onConfirm={() => onDeleteProduct(record)}
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

  const data: DataType[] = productData?.data?.map((item: any) => ({
    ...item,
    key: item._id,
    price: formatMoney(item?.price),
  }));

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {},
    getCheckboxProps: (record: DataType) => ({
      disabled: false, // Column configuration not to be checked
      name: record.name,
    }),
  };

  const _onCloseDrawerCreate = () => setIsDrawerCreate(false);

  const _renderDrawerCreate = () => {
    if (isDrawerCreate)
      return (
        <Drawer
          title="Tạo sản phẩm"
          placement="right"
          onClose={_onCloseDrawerCreate}
          open={isDrawerCreate}
        >
          <CreateProduct
            _onCloseModal={() => _onCloseDrawerCreate()}
            sizePage={sizePage}
          />
        </Drawer>
      );
    return null;
  };

  return (
    <MainContainer classW="h-100">
      <div className={styles.wrapProduct}>
        <SearchHeaderTable
          _onSearchField={(value) => _onSearchField(value)}
          _onCreate={() => setIsDrawerCreate(true)}
          placeholderInputSearch="Tìm kiếm theo tên sản phẩm..."
        />
        <div className={styles.wrapContent}>
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            columns={COLUMNS_PRODUCT}
            dataSource={data}
            loading={isLoadingProduct}
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
      {_renderDrawerCreate()}
    </MainContainer>
  );
};

export default Product;
