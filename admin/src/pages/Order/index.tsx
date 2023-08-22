import { Drawer, Image, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { getOrder } from "api/order";
import Button from "components/Button/Button";
import MainContainer from "components/MainContainer";
import SearchHeaderTable from "components/SearchHeaderTable";
import { calculateWidthTable } from "constants/calculate";
import { HIEGHT_TABLE_SCROLL, QueryKey, TypeButton } from "constants/constant";
import { BreakpointsUp } from "constants/enum";
import { useState } from "react";
import { useQuery } from "react-query";
import useViewport from "utils/hooks/useViewport";
import CreateOrder from "./components/CreateOrder";
import EditOrder from "./components/EditProduct";
import styles from "./styles.module.scss";

interface DataType {
  key: React.Key;
  code_order: string;
  create_at: string;
  name_customer: string;
  status_order: string;
  status_pay: string;
  guest_must_pay: number;
}

const Order = () => {
  const [isDrawerCreate, setIsDrawerCreate] = useState<boolean>(false);
  const { isMobile: isViewport767, width } = useViewport();
  const { isMobile: isViewport1023 } = useViewport(BreakpointsUp.LG);
  const [updateDrawer, setUpdateDrawer] = useState<{
    orderId: number | null;
    modalHas: boolean;
  }>({
    orderId: null,
    modalHas: false,
  });
  const [sizePage, setSizePage] = useState<any>({
    name: null,
  });

  const { data: orderData, isLoading: isLoadingOrder } = useQuery(
    [QueryKey.LIST_ORDER_KEY, sizePage],
    () => getOrder(sizePage)
  );

  const onClickUpdateOrder = ({ _id }: any) => {
    setUpdateDrawer({
      orderId: _id,
      modalHas: true,
    });
  };

  const COLUMNS_ORDER: ColumnsType<DataType> = [
    {
      title: "Mã đơn hàng",
      dataIndex: "code_order",
      align: "center",
      width: isViewport767 ? 125 : 170,
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Ngày tạo đơn",
      dataIndex: "create_at",
      align: "center",
      width: isViewport767 ? 125 : 170,
      render: (text: string) => text,
    },
    {
      title: "Tên khách hàng",
      dataIndex: "customer_name",
      align: "left",
      width: 300,
      render: (text: string) => text,
    },
    {
      title: "Trạng thái đơn hàng",
      dataIndex: "order_status",
      align: "center",
      width: isViewport767 ? 165 : 200,
      render: (text: string) => text,
    },
    {
      title: "Trạng thái thanh toán",
      dataIndex: "payment_status",
      align: "center",
      width: isViewport767 ? 165 : 200,
      render: (text: string) => text,
    },
    {
      title: "Khách phải trả",
      dataIndex: "guest_must_pay",
      align: "center",
      width: isViewport767 ? 125 : 150,
      render: (text: string) => text,
    },
    {
      title: "Tác vụ",
      dataIndex: "action",
      align: "center",
      width: isViewport767 ? 125 : 200,
      fixed: "right",
      render: (_, record) => (
        <Space size="small">
          <Button
            onClick={() => onClickUpdateOrder(record)}
            classNameT={TypeButton.EDIT}
          >
            Sửa
          </Button>
          <Button classNameT={TypeButton.DELETE}>Xóa</Button>
        </Space>
      ),
    },
  ];

  const DATA_ORDER = () =>
    orderData?.data?.map((item: any, index: number) => ({
      key: index,
      ...item,
      create_at: `19/02/2023 14:59`,
    })) as DataType[];

  //child table
  const childColumns: ColumnsType<any> = [
    {
      title: "STT",
      dataIndex: "stt",
      width: 100,
      align: "center",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      align: "center",
      width: 150,
      render: (url: string) => <Image src={url} alt={url} />,
    },
    {
      title: "Mã SKU",
      dataIndex: "barcode",
      align: "center",
      width: 150,
      render: (text: string) => text,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name_product",
      render: (text: string) => text,
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      align: "center",
      width: 150,
      render: (text: string) => text,
    },
    {
      title: "Đơn giá",
      dataIndex: "unit_price",
      align: "right",
      width: 150,
      render: (text: string) => text,
    },
    {
      title: "Thành tiền",
      dataIndex: "into_money",
      align: "right",
      width: 150,
      render: (text: string) => text,
    },
  ];

  const childData: any[] = [
    {
      key: "1",
      id: 1,
      image: "https://htmldemo.net/brancy/brancy/assets/images/shop/1.webp",
      code_sku: "PVN1139",
      name_product: "Bông tẩy trang pháp 500 miếng",
      quantity: 4,
      unit_price: 90000,
      into_money: 360000,
    },
    {
      key: "2",
      id: 2,
      image: "https://htmldemo.net/brancy/brancy/assets/images/shop/1.webp",
      code_sku: "PVN1139",
      name_product: "Bông tẩy trang pháp 500 miếng",
      quantity: 4,
      unit_price: 90000,
      into_money: 360000,
    },
    {
      key: "3",
      id: 3,
      image: "https://htmldemo.net/brancy/brancy/assets/images/shop/1.webp",
      code_sku: "PVN1139",
      name_product: "Bông tẩy trang pháp 500 miếng",
      quantity: 4,
      unit_price: 90000,
      into_money: 360000,
    },
    {
      key: "4",
      id: 4,
      image: "https://htmldemo.net/brancy/brancy/assets/images/shop/1.webp",
      code_sku: "PVN1139",
      name_product: "Bông tẩy trang pháp 500 miếng",
      quantity: 4,
      unit_price: 90000,
      into_money: 360000,
    },
    {
      key: "5",
      id: 5,
      image: "https://htmldemo.net/brancy/brancy/assets/images/shop/1.webp",
      code_sku: "PVN1139",
      name_product: "Bông tẩy trang pháp 500 miếng",
      quantity: 4,
      unit_price: 90000,
      into_money: 360000,
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {},
    getCheckboxProps: (record: DataType) => ({
      disabled: false, // Column configuration not to be checked
      code_order: record.code_order,
    }),
  };

  const _onCloseDrawerCreate = () => setIsDrawerCreate(false);

  const _onCloseDrawerEdit = () =>
    setUpdateDrawer({
      orderId: null,
      modalHas: false,
    });

  // const _onPaginationTable = (pageIndex: any) => {
  //   setSizePage({
  //     ...sizePage,
  //     pageIndex,
  //   });
  // };

  const _onSearchField = (value: any) => {
    setSizePage({
      ...sizePage,
      name: value,
    });
  };

  const _renderDrawerCreate = () => {
    if (isDrawerCreate)
      return (
        <Drawer
          title="Tạo đơn hàng"
          placement="right"
          onClose={_onCloseDrawerCreate}
          open={isDrawerCreate}
          size={isViewport767 ? "default" : "large"}
        >
          <CreateOrder
            _onCloseModal={() => _onCloseDrawerCreate()}
            sizePage={sizePage}
          />
        </Drawer>
      );
    return null;
  };

  const _renderDrawerEdit = () => {
    if (updateDrawer?.modalHas)
      return (
        <Drawer
          title="Sửa đơn hàng"
          placement="right"
          onClose={_onCloseDrawerEdit}
          open={updateDrawer?.modalHas}
          size={isViewport767 ? "default" : "large"}
        >
          <EditOrder
            _onCloseModal={() => _onCloseDrawerEdit()}
            orderId={updateDrawer?.orderId}
            sizePage={sizePage}
          />
        </Drawer>
      );
    return null;
  };

  return (
    <>
      <SearchHeaderTable
        _onSearchField={(value) => _onSearchField(value)}
        _onCreate={() => setIsDrawerCreate(true)}
      />
      <MainContainer>
        <div className={styles.wrapOrder}>
          <div className={styles.wrapContent}>
            <Table
              style={{
                width: calculateWidthTable(width, isViewport1023),
              }}
              rowSelection={{
                type: "checkbox",
                ...rowSelection,
              }}
              columns={COLUMNS_ORDER}
              dataSource={DATA_ORDER()}
              loading={isLoadingOrder}
              expandable={{
                expandedRowRender: (record: any) => {
                  console.log(record);
                  return (
                    <Table
                      columns={childColumns}
                      dataSource={record?.product?.map(
                        (item: any, index: number) => ({
                          key: index,
                          stt: index + 1,
                          ...item,
                        })
                      )}
                      loading={false}
                      pagination={false}
                    />
                  );
                },
                rowExpandable: (record) =>
                  record.code_order !== "Not Expandable",
              }}
              scroll={{ y: HIEGHT_TABLE_SCROLL }}
              // pagination={{
              //   total: orderData?.totalItems,
              //   showTotal: (total, range) =>
              //     `Từ ${orderData?.pageIndex || 1} đến ${total} trên tổng ${
              //       orderData?.totalItems
              //     }`,
              //   defaultPageSize: orderData?.pageSize || 5,
              //   defaultCurrent: 1,
              //   onChange: (page) => _onPaginationTable(page),
              // }}
            />
          </div>
        </div>
        {_renderDrawerCreate()}
        {_renderDrawerEdit()}
      </MainContainer>
    </>
  );
};

export default Order;
