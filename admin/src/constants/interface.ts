export interface interfaces {}

export interface ICardProduct {
  item: {
    url?: string;
    star?: number;
    name?: string;
    price?: number;
    promotion?: number;
  };
}

export interface interfaces {}

export interface IProductCard {
  _id: string;
  product_name: string;
  trade_mark: string;
  quantity: number;
  quantity_sold: number;
  percentage_discount: number;
  number_of_reviews?: Number;
  category_id: number;
  price: number;
  sale_price: number;
  images: string[];
  made_in: string;
  quantity_order?: number;
  createdAt: string;
  updatedAt: string;
  isDisabled?: boolean;
}

export interface IListBlogCard {
  _id: number;
  title: string;
  image: string;
  content?: string;
}

export interface IMenu {
  id: number;
  link_name: string;
  href: string;
}
export interface IParamCategory {
  pageIndex?: number;
  pageSize?: number;
  parentId?: number | null | string;
}

export interface IParamPost {
  pageIndex?: number;
  pageSize?: number;
}

export interface IParamProductByCategory {
  pageIndex?: number;
  pageSize?: number;
  categoryId?: number | string | null;
  name?: null | string;
  filter?: {
    value?: string | null;
    field?: string | null;
  };
}

export interface IParamProductTopPage {
  type: number;
  pageIndex?: number;
  pageSize?: number;
}

export interface ICategory {
  _id: string;
  category_name: string;
  parent_id?: number;
}

export interface IParamResources {}

export interface IProductCart {
  product_name: string;
  price: number;
  _id?: string;
  image?: string;
  quantity_order?: number;
}

