import { Checkbox, Divider, Input, List, Modal, Image } from "antd";
import { getListProduct } from "api/product";
import userDefault from "assets/images/user.jpg";
import classNames from "classnames";
import SearchHeaderTable from "components/SearchHeaderTable";
import { QueryKey } from "constants/constant";
import { convertDataQueryInfinite } from "constants/convert";
import { formatMoney } from "constants/format";
import { handleErrorMessage } from "i18n";
import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery, useQueryClient } from "react-query";

import styles from "./styles.module.scss";

interface IProps {
  isModalOpen: boolean;
  quantityHas?: boolean;
  _onSubmit?: () => void;
  _onClose: () => void;
  _setPayData?: (payData: any) => void;
  payData?: any;
}

const ModalListProduct = ({
  isModalOpen,
  _onSubmit,
  _setPayData,
  payData,
  _onClose,
  quantityHas = false,
}: IProps) => {
  const queryClient = useQueryClient();
  const defaultQuantity = 1;
  const [sizePage] = useState<any>({
    name: null,
  });

  const {
    data: productData,
    hasNextPage: hasNextProduct,
    fetchNextPage: fetchNextProduct,
    isLoading: isLoadingProduct,
  } = useInfiniteQuery(
    [QueryKey.LIST_PRODUCT_CREATE_KEY, sizePage],
    ({ pageParam }) => getListProduct({ ...sizePage, pageIndex: pageParam }),
    {
      onError: (error) => handleErrorMessage(error),
      getNextPageParam: (lastPage) => {
        if (lastPage?.data?.length === 0) return false;
        return lastPage?.pageIndex + 1;
      },
      enabled: isModalOpen,
    }
  );
  const stylesImage = {
    borderRadius: "5px",
  };

  const _renderQuantity = (item: any) => {
    const onChangeQuantity = (value: number) => {
      item.quantity = +value;
    };

    if (quantityHas)
      return (
        <div className={classNames(styles.detailProduct__entryPrice, "d-flex")}>
          Số lượng:{" "}
          <Input
            defaultValue={defaultQuantity}
            onChange={(event: any) => onChangeQuantity(event?.target?.value)}
          />
        </div>
      );
    return null;
  };

  const onChangeChecked = useCallback(
    (checked: boolean, item: any) => {
      if (!_setPayData || !payData) return;
      _setPayData(
        checked
          ? [...payData, item]
          : payData.filter((f: any) => f._id !== item._id)
      );
    },
    [_setPayData, payData]
  );

  const _onOkModal = () => {
    if (!_onClose) return;
    _onClose();
  };

  const _onCancelModal = () => {
    if (!_onClose || !_setPayData) return;
    _setPayData([]);
    _onClose();
  };

  useEffect(() => {
    return () => {
      queryClient.removeQueries([QueryKey.LIST_PRODUCT_CREATE_KEY, sizePage]);
    };
  }, [isModalOpen]);

  return (
    <Modal
      title="Chọn sản phẩm"
      centered
      width={800}
      open={isModalOpen}
      okText="Xác nhận"
      cancelText="Thoát"
      onOk={_onOkModal}
      onCancel={_onCancelModal}
      className={styles.wrapModalListProduct}
    >
      <div className={styles.wrapHeader}>
        <SearchHeaderTable
          btnHeaderImport={false}
          background="none"
          placeholderInputSearch="Tìm kiếm theo tên sản phẩm..."
        />
      </div>
      <div className={styles.wrapContent}>
        <div className={styles.content_title}>
          <Checkbox defaultChecked={false}>
            Đã chọn {payData?.length} sản phẩm
          </Checkbox>
        </div>
        <div className={styles.content_data} id="scrollable-list-product-modal">
          <InfiniteScroll
            dataLength={productData?.pages?.length || 0}
            next={fetchNextProduct}
            hasMore={Boolean(hasNextProduct)}
            loader={null}
            endMessage={
              <Divider plain>Đó là tất cả, không có gì hơn 🤐</Divider>
            }
            scrollableTarget="scrollable-list-product-modal"
          >
            <List
              dataSource={convertDataQueryInfinite(productData)}
              renderItem={(item: any) => (
                <List.Item
                  key={item._id}
                  className={classNames(
                    styles.wrapListMeta,
                    "custom-ant-image-mask"
                  )}
                >
                  <Checkbox
                    onChange={(event) =>
                      onChangeChecked(event?.target?.checked, item)
                    }
                  />
                  <List.Item.Meta
                    avatar={
                      <Image
                        style={{ ...stylesImage }}
                        src={item?.images[0] || userDefault}
                        width={70}
                      />
                    }
                    title={
                      <a href="https://ant.design">{item?.product_name}</a>
                    }
                    description={item?.barcode}
                  />
                  <div className={styles.wrapDetailProduct}>
                    <div className={styles.detailProduct__entryPrice}>
                      Giá nhập:{" "}
                      <span className={styles.priceEntry}>
                        {formatMoney(item?.intial_price)}
                      </span>
                    </div>
                    <div className={styles.detailProduct__entryPrice}>
                      Tồn: <span>{item?.quantity}</span> | Có thể bán:{" "}
                      <span>{item?.quantity}</span>
                    </div>
                    {_renderQuantity(item)}
                  </div>
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div>
      </div>
    </Modal>
  );
};

export default ModalListProduct;
