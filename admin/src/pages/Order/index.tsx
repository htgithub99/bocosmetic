import { Button, Drawer, Image, Popconfirm, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { getOrder } from "api/order";
import MainContainer from "components/MainContainer";
import SearchHeaderTable from "components/SearchHeaderTable";
import { QueryKey } from "constants/constant";
import { useState } from "react";
import { useQuery } from "react-query";
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

  const columns: ColumnsType<DataType> = [
    {
      title: "Mã đơn hàng",
      dataIndex: "code_order",
      ellipsis: true,
      responsive: ["md"],
      align: "center",
      width: 150,
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Ngày tạo đơn",
      dataIndex: "create_at",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
    {
      title: "Tên khách hàng",
      dataIndex: "customer_name",
      ellipsis: true,
      responsive: ["md"],
      align: "left",
      render: (text: string) => text,
    },
    {
      title: "Trạng thái đơn hàng",
      dataIndex: "order_status",
      ellipsis: true,
      responsive: ["md"],
      align: "center",
      width: 150,
      render: (text: string) => text,
    },
    {
      title: "Trạng thái Thanh toán",
      dataIndex: "payment_status",
      ellipsis: true,
      responsive: ["md"],
      align: "center",
      width: 150,
      render: (text: string) => text,
    },
    {
      title: "Khách phải trả",
      dataIndex: "guest_must_pay",
      ellipsis: true,
      responsive: ["md"],
      align: "right",
      width: 150,
      render: (text: string) => text,
    },
    {
      title: "Tác vụ",
      dataIndex: "action",
      ellipsis: true,
      responsive: ["md"],
      align: "center",
      width: 250,
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="dashed"
            onClick={() => onClickUpdateOrder(record)}
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

  const data: DataType[] = orderData?.data?.map((item: any, index: number) => ({
    key: index,
    ...item,
    create_at: `19/02/2023 14:59`,
  }));

  //child table
  const childColumns: ColumnsType<any> = [
    {
      title: "STT",
      dataIndex: "stt",
      ellipsis: true,
      responsive: ["md"],
      width: 100,
      align: "center",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      ellipsis: true,
      responsive: ["md"],
      align: "center",
      width: 150,
      render: (url: string) => <Image src={url} alt={url} />,
    },
    {
      title: "Mã SKU",
      dataIndex: "barcode",
      ellipsis: true,
      responsive: ["md"],
      align: "center",
      width: 150,
      render: (text: string) => text,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name_product",
      ellipsis: true,
      responsive: ["md"],
      render: (text: string) => text,
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      ellipsis: true,
      responsive: ["md"],
      align: "center",
      width: 150,
      render: (text: string) => text,
    },
    {
      title: "Đơn giá",
      dataIndex: "unit_price",
      ellipsis: true,
      responsive: ["md"],
      align: "right",
      width: 150,
      render: (text: string) => text,
    },
    {
      title: "Thành tiền",
      dataIndex: "into_money",
      ellipsis: true,
      responsive: ["md"],
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

  const _onPaginationTable = (pageIndex: any) => {
    setSizePage({
      ...sizePage,
      pageIndex,
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
    <MainContainer>
      <div className={styles.wrapOrder}>
        <SearchHeaderTable _onCreate={() => setIsDrawerCreate(true)} />
        <div className={styles.wrapContent}>
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
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
              rowExpandable: (record) => record.code_order !== "Not Expandable",
            }}
            pagination={{
              total: orderData?.totalItems,
              showTotal: (total, range) =>
                `Từ ${orderData?.pageIndex || 1} đến ${total} trên tổng ${
                  orderData?.totalItems
                }`,
              defaultPageSize: orderData?.pageSize || 5,
              defaultCurrent: 1,
              onChange: (page) => _onPaginationTable(page),
            }}
          />
        </div>
      </div>
      {_renderDrawerCreate()}
      {_renderDrawerEdit()}
    </MainContainer>
  );
};

export default Order;
