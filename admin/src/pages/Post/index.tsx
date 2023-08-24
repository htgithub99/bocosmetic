import { Drawer, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { deletePost, getListPost } from "api/post";
import Button from "components/Button/Button";
import MainContainer from "components/MainContainer";
import ModalDelete from "components/Modal/ModalDelete";
import SearchHeaderTable from "components/SearchHeaderTable";
import { HIEGHT_TABLE_SCROLL, QueryKey, TypeButton } from "constants/constant";
import { MESSAGE_MODAL } from "constants/message";
import { handleErrorMessage, handleSuccessMessage } from "i18n";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import useViewport from "utils/hooks/useViewport";
import CreateProduct from "./components/CreatePost";
import styles from "./styles.module.scss";

interface DataType {
  key: React.Key;
  name: string;
  type: string;
  total: number;
  price: number;
}

const Post = () => {
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
    data: postData,
    isLoading: isLoadingPost,
    refetch: refetchPost,
  } = useQuery(
    [QueryKey.LIST_POST_KEY, sizePage],
    () => getListPost(sizePage),
    {}
  );

  const { mutate: onDeletePost } = useMutation(
    (_id: string) => deletePost(_id),
    {
      onSuccess: (data) => {
        handleSuccessMessage(data);
      },
      onError: (error) => handleErrorMessage(error),
      onSettled: () => refetchPost(),
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

  const COLUMNS_POST: ColumnsType<DataType> = [
    {
      title: "Tiêu đề bài viết",
      dataIndex: "title",
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
    postData?.data?.map((item: any) => ({
      ...item,
      key: item._id,
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
          title="Tạo bài viết"
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
    onDeletePost(modalDelete._id);
    _onCloseModalDelete();
  };

  return (
    <>
      <SearchHeaderTable
        _onSearchField={(value) => _onSearchField(value)}
        _onCreate={() => setIsDrawerCreate(true)}
        placeholderInputSearch="Tìm kiếm theo tên bài viết..."
      />
      <MainContainer classW="h-100">
        <div className={styles.wrapPost}>
          <div className={styles.wrapContent}>
            <Table
              rowSelection={{
                type: "checkbox",
                ...rowSelection,
              }}
              columns={COLUMNS_POST}
              dataSource={sourceData()}
              loading={isLoadingPost}
              scroll={{ y: HIEGHT_TABLE_SCROLL }}
              pagination={{
                total: postData?.totalItems,
                // showTotal: (total, range) =>
                //   `Từ ${postData?.pageIndex || 1} đến ${total} trên tổng ${
                //     postData?.totalItems
                //   }`,
                defaultPageSize: postData?.pageSize || 5,
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
        title={MESSAGE_MODAL.MESSAGE_MODAL_DELETE_POST_TITLE}
        descriptions={MESSAGE_MODAL.MESSAGE_MODAL_DELETE_POST_DESCRIPTION}
      />
    </>
  );
};

export default Post;
