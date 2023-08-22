import { Drawer, Dropdown, Image, MenuProps, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import MainContainer from "components/MainContainer";
import SearchHeaderTable from "components/SearchHeaderTable";
import { calculateWidthTable } from "constants/calculate";
import { HIEGHT_TABLE_SCROLL } from "constants/constant";
import { BreakpointsUp } from "constants/enum";
import { useState } from "react";
import useViewport from "utils/hooks/useViewport";
import CreatePurchaseOrders from "./components/CreatePurchaseOrders";
import EditPurchaseOrders from "./components/EditPurchaseOrders";
import styles from "./styles.module.scss";

interface DataType {
  key: React.Key;
  code_stock: string;
  Create_at: string;
  status: string;
  status_stock: string;
  branch_stock: string;
  supplier: string;
  staff_create: string;
}

const PurchaseOrders = () => {
  const { isMobile: isViewport767, width } = useViewport();
  const { isMobile: isViewport1023 } = useViewport(BreakpointsUp.LG);
  const [isDrawerCreate, setIsDrawerCreate] = useState<boolean>(false);
  const [isDrawerEdit, setIsDrawerEdit] = useState<boolean>(false);
  const [updateDrawer, setUpdateDrawer] = useState<{
    orderId: number | null;
    modalHas: boolean;
  }>({
    orderId: null,
    modalHas: false,
  });

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <div className="disabled-div">Sửa</div>,
      onClick: ({ item, key, keyPath, domEvent }) => _onClickUpdateOrder(item),
    },
    {
      key: "2",
      label: <div>Xóa</div>,
      onClick: ({ item, key, keyPath, domEvent }) => {
        console.log({ item, key, keyPath, domEvent });
      },
    },
  ];

  const COLUMNS_PURCHASE_ORDER: ColumnsType<DataType> = [
    {
      title: "Mã đơn nhập",
      dataIndex: "code_stock",
      align: "center",
      width: isViewport767 ? 125 : 170,
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Ngày nhập",
      dataIndex: "Create_at",
      align: "center",
      width: isViewport767 ? 125 : 170,
      render: (text: string) => text,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      align: "center",
      width: isViewport767 ? 125 : 170,
      render: (text: string) => text,
    },
    {
      title: "Trạng thái nhập",
      dataIndex: "status_stock",
      align: "center",
      width: isViewport767 ? 125 : 200,
      render: (text: string) => text,
    },
    {
      title: "Chi nhánh nhập",
      dataIndex: "branch_stock",
      align: "center",
      width: isViewport767 ? 125 : 200,
      render: (text: string) => text,
    },
    {
      title: "Nhà cung cấp",
      dataIndex: "supplier",
      align: "center",
      width: isViewport767 ? 125 : 200,
      render: (text: string) => text,
    },
    {
      title: "Nhân viên tạo",
      dataIndex: "staff_create",
      align: "center",
      width: isViewport767 ? 125 : 200,
      render: (text: string) => text,
    },
    {
      title: "Tác vụ",
      dataIndex: "action",
      fixed: "right",
      width: 100,
      align: "center",
      render: (text: string) => (
        <div className={styles.wrapAction}>
          <Dropdown menu={{ items }} placement="topCenter" arrow>
            <span className="material-symbols-outlined">more_vert</span>
          </Dropdown>
        </div>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "2",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "3",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "4",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "5",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "6",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "7",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "8",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "9",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "10",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "11",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "12",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "13",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "14",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
    {
      key: "15",
      code_stock: "8809471816521",
      Create_at: "18/02/2023 17:02",
      status: "Hoàn thành",
      status_stock: "Hoàn thành",
      branch_stock: "Chi nhánh mặc định",
      supplier: "Mỹ phẩm giá gốc",
      staff_create: "Đặng mỹ Linh",
    },
  ];

  //child table
  const CHILD_COLUMNS_ORDER: ColumnsType<any> = [
    {
      title: "STT",
      dataIndex: "id",
      width: isViewport767 ? 85 : 100,
      align: "center",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      align: "center",
      width: isViewport767 ? 125 : 150,
      render: (url: string) => <Image src={url} alt={url} />,
    },
    {
      title: "Mã SKU",
      dataIndex: "code_sku",
      align: "center",
      width: isViewport767 ? 125 : 170,
      render: (text: string) => text,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name_product",
      width: isViewport767 ? 250 : 300,
      render: (text: string) => text,
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      align: "center",
      width: isViewport767 ? 125 : 150,
      render: (text: string) => text,
    },
    {
      title: "Đơn giá",
      dataIndex: "unit_price",
      align: "center",
      width: isViewport767 ? 125 : 170,
      render: (text: string) => text,
    },
    {
      title: "Thành tiền",
      dataIndex: "into_money",
      align: "center",
      width: isViewport767 ? 125 : 170,
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
      code_stock: record.code_stock,
    }),
  };

  const _onCloseDrawerCreate = () => setIsDrawerCreate(false);

  const _onClickUpdateOrder = ({ _id }: any) => {
    setUpdateDrawer({
      orderId: _id,
      modalHas: true,
    });
  };

  const _onCloseDrawerEdit = () =>
    setUpdateDrawer({
      orderId: null,
      modalHas: false,
    });

  const _renderDrawerCreate = () => {
    if (isDrawerCreate)
      return (
        <Drawer
          title="Tạo đơn nhập hàng"
          placement="right"
          onClose={_onCloseDrawerCreate}
          open={isDrawerCreate}
          size={isViewport767 ? "default" : "large"}
        >
          <CreatePurchaseOrders />
        </Drawer>
      );
    return null;
  };

  const _renderDrawerEdit = () => {
    if (updateDrawer?.modalHas)
      return (
        <Drawer
          title="Sửa đơn nhập hàng"
          placement="right"
          onClose={_onCloseDrawerEdit}
          open={isDrawerEdit}
          size={isViewport767 ? "default" : "large"}
        >
          <EditPurchaseOrders items={items} />
        </Drawer>
      );
    return null;
  };

  return (
    <>
      <SearchHeaderTable _onCreate={() => setIsDrawerCreate(true)} />
      <MainContainer>
        <div className={styles.wrapPurchaseOrders}>
          <div className={styles.wrapContent}>
            <Table
              style={{
                width: calculateWidthTable(width, isViewport1023),
              }}
              rowSelection={{
                type: "checkbox",
                ...rowSelection,
              }}
              columns={COLUMNS_PURCHASE_ORDER}
              dataSource={data}
              expandable={{
                expandedRowRender: (record) => (
                  <Table
                    columns={CHILD_COLUMNS_ORDER}
                    dataSource={childData}
                    loading={false}
                    pagination={false}
                  />
                ),
                rowExpandable: (record) =>
                  record.code_stock !== "Not Expandable",
              }}
              loading={false}
              scroll={{ y: HIEGHT_TABLE_SCROLL }}
              // pagination={{
              //   total: 85,
              //   showTotal: (total, range) =>
              //     `${range[0]}-${range[1]} of ${total} items`,
              //   defaultPageSize: 20,
              //   defaultCurrent: 1,
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

export default PurchaseOrders;
