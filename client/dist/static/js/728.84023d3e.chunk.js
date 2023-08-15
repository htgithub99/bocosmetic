"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[728],{3503:function(e,t,n){n.d(t,{zQ:function(){return l}});var _=n(1881),i=n.n(_),r={APP_ENV:"dev",API_DOMAIN:"http://14.225.255.230/api"},s=n(8507),a=function(){s.Z.remove("token"),s.Z.remove("refreshToken")},o=i().create({timeout:18e4,baseURL:r.API_DOMAIN});o.interceptors.request.use((function(e){var t=s.Z.get("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return e}),(function(e){var t=e.config;if(401!==e.response.status)return Promise.reject(e);var n=s.Z.get("refreshToken");return n?i().post("".concat(r.API_DOMAIN,"/v1/app/auth/request-access-token"),{refreshToken:n}).then((function(n){if(200===n.status){var _=n.data.data;return s.Z.set("token",_.token),t.headers.Authorization="Bearer ".concat(_.token),i()(t)}return a(),Promise.reject(e)})).catch((function(){return a(),Promise.reject(e)})):(a(),Promise.reject(e))}));var l=function(e,t){return o.get(e,{params:t}).then((function(e){return e.data}))}},6710:function(e,t,n){n.d(t,{Yb:function(){return a},gk:function(){return s},hZ:function(){return r},uP:function(){return i}});var _=n(3503),i=function(e){return(0,_.zQ)("/product/get-product-by-category",e)},r=function(e){return(0,_.zQ)("/product/get-product-top-page",e)},s=function(e){return(0,_.zQ)("/product/".concat(e))},a=function(e){return(0,_.zQ)("/product/get-filter-by-product",e)}},2377:function(e,t,n){n.d(t,{Z:function(){return c}});var _=n(1413),i=n(4925),r=n(6123),s=n.n(r),a=(n(7313),"styles_wrapButton__8Zxqh"),o=n(6417),l=["children"],c=function(e){var t=e.children,n=(0,i.Z)(e,l),r=n.classNameX,c=void 0===r?"":r,u=s()(a,c);return(0,o.jsx)("button",(0,_.Z)((0,_.Z)({},n),{},{className:u,children:t}))}},8982:function(e,t,n){n.d(t,{Z:function(){return a}});var _=n(6123),i=n.n(_),r="styles_wrapContainer__Y22d2",s=n(6417),a=function(e){var t=e.classW,n=e.children;return(0,s.jsx)("div",{className:i()(t,r),children:n})}},1637:function(e,t,n){n.d(t,{l:function(){return _}});var _=function(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}},7233:function(e,t,n){n.d(t,{d:function(){return i}});var _=n(3433),i=function(e,t,n){var i=e.quantity,r=e.quantity_order,s=void 0===r?1:r,a=e.price,o=e.product_name,l=e.sale_price,c=e._id,u=e.images,d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;n(((null===t||void 0===t?void 0:t.map((function(e){return e._id})))||[]).includes(c)?null===t||void 0===t?void 0:t.map((function(e){return e._id===c&&s<=i&&(e.quantity_order=s+d),e})):[].concat((0,_.Z)(t),[{quantity:i,quantity_order:s,price:a,product_name:o,_id:c,sale_price:l,images:u}]))}},6407:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var _=n(1413),i=n(9439),r=n(5347),s=n(3220),a=n(7648),o=n(6710),l=n(2377),c=n(8982),u=n(195),d=n(1637),m=n(7233),v="styles_wrapProductCardSideNav__VybOj",p="styles_category_title__TKAed",f="styles_category_content__trL-V",h="styles_content__item__2fo3g",y="styles_item___image__BUkkg",j="styles_item___right__SBeN+",x="styles_right____name__LFLMX",N="styles_right____price__wlIwK",g="styles_price_____lowPrice__E+FwS",w=n(2135),b=n(6417),S=function(e){var t=e.item;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("div",{className:v,children:function(){var e;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:p,children:t.title}),(0,b.jsx)("div",{className:f,children:null===t||void 0===t||null===(e=t.items)||void 0===e?void 0:e.map((function(e){return(0,b.jsxs)("div",{className:h,children:[(0,b.jsx)("div",{className:y,children:(0,b.jsx)("img",{src:null===e||void 0===e?void 0:e.images[0],alt:null===e||void 0===e?void 0:e.images[0]})}),(0,b.jsxs)("div",{className:j,children:[(0,b.jsx)("div",{className:x,children:(0,b.jsx)(w.rU,{to:"".concat(u.h3.PRODUCT_PAGE,"/").concat(null===e||void 0===e?void 0:e._id),children:null===e||void 0===e?void 0:e.product_name})}),(0,b.jsxs)("div",{className:N,children:[(0,d.l)(e.price),(0,b.jsx)("span",{className:g,children:(0,d.l)(e.sale_price)})]})]})]},null===e||void 0===e?void 0:e._id)}))})]})}()})})},P=n(7313),Z={},q=function(e){var t=e.items,n=e.title;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("div",{className:Z.wrapProductSideNav,children:(0,b.jsx)(S,{item:{title:n,items:t}})})})},k=n(56),C=n(8467),T=n(8602),E=n(8122),O=n(3882),A=(n(3151),n(7163),n(9946),n(9794),{productSlidersWrap:"styles_productSlidersWrap__lrgqM",mySwiperMain:"styles_mySwiperMain__ZdOpc"}),D=n(6426),I=n(6577),F=function(e){var t=e.images,n=(0,P.useState)(null),_=(0,i.Z)(n,2),r=_[0],s=_[1],a=function(e,t){return e.map((function(e,n){return(0,b.jsx)(O.o5,{children:(0,b.jsx)(D.Z,{src:e,preview:t})},n)}))};return(0,b.jsxs)("div",{className:A.productSlidersWrap,children:[(0,b.jsx)(O.tq,{spaceBetween:0,navigation:!0,thumbs:{swiper:r&&!r.destroyed?r:null},modules:[I.Rv,I.W_,I.o3],className:A.mySwiperMain,children:a(t,!0)}),(0,b.jsx)(O.tq,{onSwiper:s,spaceBetween:5,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,modules:[I.Rv,I.W_,I.o3],className:A.mySwiperStep,children:a(t,!1)})]})},L=(0,P.memo)(F),R={wrapProductDetail:"styles_wrapProductDetail__OEDC3",productDetail_content:"styles_productDetail_content__4OBBB",wrapContentTop:"styles_wrapContentTop__GRpU8",contentTop_listSale:"styles_contentTop_listSale__sGJpX",contentTop__top:"styles_contentTop__top__eVRE7",top___images:"styles_top___images__nPFer",top___info:"styles_top___info__JWmqn",info____collection:"styles_info____collection__yfCbL",info____name:"styles_info____name__+H5JS",info____more:"styles_info____more__yKv54",more_____star:"styles_more_____star__+Ok0L",more_____slot:"styles_more_____slot__3R4Zv",info____price:"styles_info____price__I+n7Y",price_____low:"styles_price_____low__hufr4",info____type:"styles_info____type__itaGk",info____qty:"styles_info____qty__3yjt7",qty_____main:"styles_qty_____main__A9fyI",main______BtnDec:"styles_main______BtnDec__+nN7C",main______btnInc:"styles_main______btnInc__krhIZ",qty_____slot:"styles_qty_____slot__EQeJE",content__bottom:"styles_content__bottom__tGsy1",bottom___description:"styles_bottom___description__lLBWU",info____btn:"styles_info____btn__9hV1O"},M=function(){var e,t,n,v,p,f,h,y,j,x=(0,C.UO)().id,N=(0,T._)(u.Fe.CART_TO_USER_KEY,[]),g=N.storedValue,w=N.setNewStoredValue,S=(0,E.Z)({payload:{type:u.ew.PARCENTAGE_DISCOUNT,pageSize:5},enabled:!0}).data,Z=(0,k.useQuery)([u.FF.GET_PRODUCT_DETAIL_KEY,x],(function(){return(0,o.gk)(x||"")})).data,O=(0,P.useState)(1),A=(0,i.Z)(O,2),D=A[0],I=A[1],F=(0,P.useState)(1),M=(0,i.Z)(F,2),B=M[0],G=M[1],V=(0,P.useCallback)((function(e){I(e.target.value)}),[D]),Q=(0,P.useCallback)((function(){var e;B<(null===Z||void 0===Z||null===(e=Z.data)||void 0===e?void 0:e.quantity)&&G(B+1)}),[B,null===Z||void 0===Z||null===(e=Z.data)||void 0===e?void 0:e.quantity]),U=(0,P.useCallback)((function(){B>1&&G(B-1)}),[B,null===Z||void 0===Z||null===(t=Z.data)||void 0===t?void 0:t.quantity]),z=null===(n=u.k1.find((function(e){var t;return e.category_id===(null===Z||void 0===Z||null===(t=Z.data)||void 0===t?void 0:t.category_id)})))||void 0===n?void 0:n.category_name;return(0,P.useLayoutEffect)((function(){if(g.length){var e=g.find((function(e){return e._id===x}));G((null===e||void 0===e?void 0:e.quantity_order)||1)}}),[x,g]),(0,b.jsxs)("div",{className:R.wrapProductDetail,children:[(0,b.jsx)("div",{className:"product-detail-breakcum",children:(0,b.jsx)(r.Z,{items:[{title:u.Ny.home,href:u.h3.HOME_PAGE},{title:z}]})}),(0,b.jsx)(c.Z,{children:(0,b.jsxs)("div",{className:R.productDetail_content,children:[(0,b.jsxs)("div",{className:R.wrapContentTop,children:[(0,b.jsx)("div",{className:R.contentTop_listSale,children:(0,b.jsx)(q,{items:null===S||void 0===S?void 0:S.data,title:"Top khuy\u1ebfn m\xe3i"})}),(0,b.jsxs)("div",{className:R.contentTop__top,children:[(0,b.jsx)("div",{className:R.top___images,children:(0,b.jsx)(L,{images:(null===Z||void 0===Z||null===(v=Z.data)||void 0===v?void 0:v.images)||[]})}),(0,b.jsxs)("div",{className:R.top___info,children:[(0,b.jsx)("div",{className:R.info____collection,children:(0,b.jsx)("button",{children:z})}),(0,b.jsx)("h3",{className:R.info____name,children:null===Z||void 0===Z||null===(p=Z.data)||void 0===p?void 0:p.product_name}),(0,b.jsxs)("div",{className:R.info____more,children:[(0,b.jsx)("div",{className:R.more_____star,children:(0,b.jsx)(s.Z,{defaultValue:100})}),(0,b.jsxs)("div",{className:R.more_____slot,children:["\u0110\xe3 b\xe1n ",null===Z||void 0===Z||null===(f=Z.data)||void 0===f?void 0:f.percentage_discount]})]}),(0,b.jsxs)("div",{className:R.info____price,children:[(0,d.l)(null===Z||void 0===Z||null===(h=Z.data)||void 0===h?void 0:h.price),(0,b.jsx)("span",{className:R.price_____low,children:(0,d.l)(null===Z||void 0===Z||null===(y=Z.data)||void 0===y?void 0:y.sale_price)})]}),(0,b.jsxs)("div",{className:R.info____type,children:[(0,b.jsx)("h5",{children:"Lo\u1ea1i s\u1ea3n ph\u1ea9m"}),(0,b.jsxs)(a.ZP.Group,{buttonStyle:"solid",onChange:V,value:D,size:"large",children:[(0,b.jsx)(a.ZP,{value:1,children:"M\xe0u h\u1ed3ng"}),(0,b.jsx)(a.ZP,{value:2,children:"M\xe0u xanh \u0111\u1eadm"}),(0,b.jsx)("br",{}),(0,b.jsx)(a.ZP,{value:3,children:"M\xe0u cam"}),(0,b.jsx)(a.ZP,{value:4,children:"M\xe0u xanh nh\u1ea1t"})]})]}),(0,b.jsxs)("div",{className:R.info____qty,children:[(0,b.jsx)("h5",{children:"S\u1ed1 l\u01b0\u1ee3ng"}),(0,b.jsxs)("div",{className:R.qty_____main,children:[(0,b.jsx)("input",{type:"text",title:"Quantity",value:B}),(0,b.jsx)("div",{className:R.main______BtnDec,onClick:U,children:"-"}),(0,b.jsx)("div",{className:R.main______btnInc,onClick:Q,children:"+"})]}),(0,b.jsx)("span",{className:R.qty_____slot,children:"C\xf3 s\u1eb5n ".concat(null===Z||void 0===Z||null===(j=Z.data)||void 0===j?void 0:j.quantity," s\u1ea3n ph\u1ea9m")})]}),(0,b.jsx)(l.Z,{classNameX:R.info____btn,onClick:function(){return(0,m.d)((0,_.Z)((0,_.Z)({},null===Z||void 0===Z?void 0:Z.data),{},{quantity_order:B}),g,w)},children:"Mua ngay"})]})]})]}),(0,b.jsxs)("div",{className:R.content__bottom,children:[(0,b.jsx)("div",{className:R.bottom___description,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius velit corporis quo voluptate culpa soluta, esse accusamus, sunt quia omnis amet temporibus sapiente harum quam itaque libero tempore. Ipsum, ducimus. lorem"}),(0,b.jsx)("div",{className:R.bottom___review})]})]})})]})}},8602:function(e,t,n){n.d(t,{_:function(){return s}});var _=n(195),i=n(7313),r=n(56),s=function(e,t){var n=(0,r.useQueryClient)(),s=(0,r.useQuery)(_.FF.LOCAL_STRORAGE_KEY,(function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):(window.localStorage.setItem(e,JSON.stringify(t)),t)}catch(_){return t}}),{enabled:!0}),a=s.data,o=s.isLoading,l=(0,i.useCallback)((function(t){try{window.localStorage.setItem(e,JSON.stringify(t))}catch(i){}n.setQueryData(_.FF.LOCAL_STRORAGE_KEY,(function(){return t}))}),[n]);return{storedValue:o?t:a,setNewStoredValue:l}}},8122:function(e,t,n){n.d(t,{Z:function(){return a}});var _=n(1413),i=n(6710),r=n(195),s=n(56);function a(e){var t=e.enabled,n=void 0!==t&&t,a=e.payload,o=(0,s.useQuery)([r.FF.GET_PRODUCT_TOP_PAGE_KEY,a],(function(){return(0,i.hZ)((0,_.Z)({},a))}),{enabled:n});return{data:o.data,refetchProductTopPage:o.refetch}}}}]);