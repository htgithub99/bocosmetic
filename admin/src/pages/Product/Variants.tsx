import { Drawer, Image, Popconfirm, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { getListProduct } from "api/product";
import Button from "components/Button/Button";
import MainContainer from "components/MainContainer";
import SearchHeaderTable from "components/SearchHeaderTable";
import { QueryKey, TypeButton } from "constants/constant";
import { BreakpointsUp } from "constants/enum";
import { formatMoney } from "constants/format";
import { useState } from "react";
import { useQuery } from "react-query";
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

  const { data: productData, isLoading: isLoadingProductData } = useQuery(
    [QueryKey.LIST_PRODUCT_KEY, sizePage],
    () => getListProduct(sizePage),
    {}
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
      dataIndex: "image",
      align: "center",
      width: isViewport767 ? 125 : 150,
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
      align: "center",
      width: isViewport767 ? 125 : 170,
      render: (text: string) => text,
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
      width: isViewport767 ? 125 : 200,
      align: "center",
      fixed: "right",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => onClickUpdateProduct(record)}
            classNameT={TypeButton.EDIT}
          >
            Sửa
          </Button>
          <Button classNameT={TypeButton.DELETE}>Xóa</Button>
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
  return (
    <>
      <SearchHeaderTable btnCreateHas={false} />
      <MainContainer classW="h-100">
        <div className={styles.wrapVariants}>
          <div className={styles.wrapContent}>
            <Table
              style={{
                width: isViewport1023 ? width - 30 : width - (60 + 250),
                overflow: "scroll",
              }}
              rowSelection={{
                type: "checkbox",
                ...rowSelection,
              }}
              columns={COLUMNS_VARIANTS}
              dataSource={data}
              loading={isLoadingProductData}
              scroll={{ y: 325 }}
              // pagination={{
              //   total: productData?.totalItems,
              //   showTotal: (total, range) =>
              //     `Từ ${productData?.pageIndex || 1} đến ${total} trên tổng ${
              //       productData?.totalItems
              //     }`,
              //   defaultPageSize: productData?.pageSize || 5,
              //   defaultCurrent: 1,
              //   onChange: (page) => _onPaginationTable(page),
              // }}
            />
          </div>
        </div>
        {_renderDrawerEdit()}
      </MainContainer>
    </>
  );
};

export default Variants;
