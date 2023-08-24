import { Drawer, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { deleteProduct, getListProduct, importProduct } from "api/product";
import Button from "components/Button/Button";
import MainContainer from "components/MainContainer";
import ModalDelete from "components/Modal/ModalDelete";
import SearchHeaderTable from "components/SearchHeaderTable";
import { HIEGHT_TABLE_SCROLL, QueryKey, TypeButton } from "constants/constant";
import { formatMoney } from "constants/format";
import { MESSAGE_MODAL } from "constants/message";
import { handleErrorMessage, handleSuccessMessage } from "i18n";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import useViewport from "utils/hooks/useViewport";
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
  const [isDrawerCreate, setIsDrawerCreate] = useState<boolean>(false);
  const { isMobile: isViewport767, width } = useViewport();
  const [sizePage, setSizePage] = useState<any>({
    name: null,
  });
  const [modalDelete, setModalDelete] = useState<{
    isModal: boolean;
    _id: string;
  }>({
    isModal: false,
    _id: "",
  });

  const {
    data: productData,
    isLoading: isLoadingProduct,
    refetch: refetchProduct,
  } = useQuery(
    [QueryKey.LIST_PRODUCT_KEY, sizePage],
    () => getListProduct(sizePage),
    {}
  );

  const { mutate: onDeleteProduct } = useMutation(
    (_id: string) => deleteProduct(_id),
    {
      onSuccess: (data) => {
        handleSuccessMessage(data);
      },
      onError: (error) => handleErrorMessage(error),
      onSettled: () => refetchProduct(),
    }
  );

  const _onSearchField = (value: any) => {
    setSizePage({
      ...sizePage,
      name: value,
    });
  };

  const { mutate: onImportFile } = useMutation(
    (file: any) => importProduct(file),
    {
      onSuccess: (data) => {
        handleSuccessMessage(data);
      },
      onError: (error) => handleErrorMessage(error),
      onSettled: () => refetchProduct(),
    }
  );

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
      align: "left",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Tác vụ",
      dataIndex: "action",
      width: isViewport767 ? 95 : 200,
      align: "center",
      fixed: "right",
      render: (_, item) => (
        <Space size="middle">
          <Button
            onClick={() =>
              setModalDelete({ isModal: true, _id: (item as any)._id })
            }
            classNameT={TypeButton.DELETE}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  const sourceData = () =>
    productData?.data?.map((item: any) => ({
      ...item,
      key: item._id,
      price: formatMoney(item?.price),
    })) as DataType[];

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
          size={isViewport767 ? "default" : "large"}
        >
          <CreateProduct
            _onCloseModal={() => _onCloseDrawerCreate()}
            sizePage={sizePage}
          />
        </Drawer>
      );
    return null;
  };

  const _onCloseModalDelete = () => {
    setModalDelete({ isModal: false, _id: "" });
  };

  const _onSubmitModalDelete = () => {
    onDeleteProduct(modalDelete._id);
    _onCloseModalDelete();
  };

  return (
    <>
      <SearchHeaderTable
        onImportFile={onImportFile}
        _onSearchField={(value) => _onSearchField(value)}
        _onCreate={() => setIsDrawerCreate(true)}
        placeholderInputSearch="Tìm kiếm theo tên sản phẩm..."
      />
      <MainContainer classW="h-100">
        <div className={styles.wrapProduct}>
          <div className={styles.wrapContent}>
            <Table
              rowSelection={{
                type: "checkbox",
                ...rowSelection,
              }}
              columns={COLUMNS_PRODUCT}
              dataSource={sourceData()}
              loading={isLoadingProduct}
              scroll={{ y: HIEGHT_TABLE_SCROLL }}
              pagination={{
                total: productData?.totalItems,
                // showTotal: (total, range) =>
                //   `Từ ${productData?.pageIndex || 1} đến ${total} trên tổng ${
                //     productData?.totalItems
                //   }`,
                defaultPageSize: productData?.pageSize || 5,
                defaultCurrent: 1,
                onChange: (page) => _onPaginationTable(page),
              }}
            />
          </div>
        </div>
        {_renderDrawerCreate()}
      </MainContainer>
      <ModalDelete
        isModalOpen={modalDelete.isModal}
        _onClose={_onCloseModalDelete}
        _onSubmit={_onSubmitModalDelete}
        title={MESSAGE_MODAL.MESSAGE_MODAL_DELETE_PRODUCT_TITLE}
        descriptions={MESSAGE_MODAL.MESSAGE_MODAL_DELETE_PRODUCT_DESCRIPTION}
      />
    </>
  );
};

export default Product;
