import { Drawer, Image, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { deleteProduct, getListProduct } from "api/product";
import Button from "components/Button/Button";
import MainContainer from "components/MainContainer";
import ModalDelete from "components/Modal/ModalDelete";
import SearchHeaderTable from "components/SearchHeaderTable";
import { calculateWidthTable } from "constants/calculate";
import { HIEGHT_TABLE_SCROLL, QueryKey, TypeButton } from "constants/constant";
import { BreakpointsUp } from "constants/enum";
import { formatMoney } from "constants/format";
import { MESSAGE_MODAL } from "constants/message";
import { handleSuccessMessage, handleErrorMessage } from "i18n";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Link } from "react-router-dom";
import useViewport from "utils/hooks/useViewport";
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
  const { isMobile: isViewport767, width } = useViewport();
  const { isMobile: isViewport1023 } = useViewport(BreakpointsUp.LG);
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
  const [modalDelete, setModalDelete] = useState<{
    isModal: boolean;
    _id: string;
  }>({
    isModal: false,
    _id: "",
  });

  const {
    data: productData,
    isLoading: isLoadingProductData,
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

  const COLUMNS_VARIANTS: ColumnsType<DataType> = [
    {
      title: "Mã vạch",
      dataIndex: "barcode",
      align: "center",
      width: isViewport767 ? 125 : 170,
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Ảnh",
      dataIndex: "images",
      align: "center",
      width: isViewport767 ? 125 : 150,
      render: (item: string[]) =>
        item.length ? (
          <Image src={item[0]} alt={item[0]} />
        ) : (
          <span className="material-symbols-outlined">imagesmode</span>
        ),
    },
    {
      title: "Tồn kho",
      dataIndex: "quantity",
      align: "center",
      width: isViewport767 ? 125 : 170,
      render: (item: string) => item,
    },
    {
      title: "Giá bán lẻ",
      dataIndex: "price",
      align: "center",
      width: isViewport767 ? 125 : 170,
      render: (text: string) => text,
    },
    {
      title: "Tên phiên bản sản phẩm",
      dataIndex: "product_version_name",
      align: "left",
      width: isViewport767 ? 250 : 300,
      render: ({ product_name, barcode }) => {
        return (
          <div className={styles.productVersionName}>
            <Link to="#">{product_name}</Link>
            <p>{barcode}</p>
          </div>
        );
      },
    },
    {
      title: "Tác vụ",
      dataIndex: "action",
      width: isViewport767 ? 125 : 170,
      align: "center",
      fixed: "right",
      render: (_, item) => (
        <Space size="middle">
          <Button
            onClick={() => onClickUpdateProduct(item)}
            classNameT={TypeButton.EDIT}
          >
            Sửa
          </Button>
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

  const _onSearchField = (value: any) => {
    setSizePage({
      ...sizePage,
      name: value,
    });
  };

  const sourceData = () =>
    productData?.data?.map((item: any) => ({
      ...item,
      key: item._id,
      product_version_name: item,
      price: formatMoney(item?.price),
    })) as DataType[];

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
          size={isViewport767 ? "default" : "large"}
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
        _onSearchField={(value) => _onSearchField(value)}
        btnCreateHas={false}
      />
      <MainContainer classW="h-100">
        <div className={styles.wrapVariants}>
          <div className={styles.wrapContent}>
            <Table
              style={{
                width: calculateWidthTable(width, isViewport1023),
              }}
              rowSelection={{
                type: "checkbox",
                ...rowSelection,
              }}
              columns={COLUMNS_VARIANTS}
              dataSource={sourceData()}
              loading={isLoadingProductData}
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
        {_renderDrawerEdit()}
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

export default Variants;
