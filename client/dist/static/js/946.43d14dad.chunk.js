"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[946],{3503:function(n,t,e){e.d(t,{zQ:function(){return s}});var r=e(1881),c=e.n(r),i={APP_ENV:"dev",API_DOMAIN:"http://14.225.255.230/api"},a=e(8507),o=function(){a.Z.remove("token"),a.Z.remove("refreshToken")},u=c().create({timeout:18e4,baseURL:i.API_DOMAIN});u.interceptors.request.use((function(n){var t=a.Z.get("token");return t&&(n.headers.Authorization="Bearer ".concat(t)),n}),(function(n){return Promise.reject(n)})),u.interceptors.response.use((function(n){return n}),(function(n){var t=n.config;if(401!==n.response.status)return Promise.reject(n);var e=a.Z.get("refreshToken");return e?c().post("".concat(i.API_DOMAIN,"/v1/app/auth/request-access-token"),{refreshToken:e}).then((function(e){if(200===e.status){var r=e.data.data;return a.Z.set("token",r.token),t.headers.Authorization="Bearer ".concat(r.token),c()(t)}return o(),Promise.reject(n)})).catch((function(){return o(),Promise.reject(n)})):(o(),Promise.reject(n))}));var s=function(n,t){return u.get(n,{params:t}).then((function(n){return n.data}))}},9854:function(n,t,e){e.d(t,{n:function(){return c}});var r=e(3503),c=function(n){return(0,r.zQ)("/category",n)}},6710:function(n,t,e){e.d(t,{Yb:function(){return o},gk:function(){return a},hZ:function(){return i},uP:function(){return c}});var r=e(3503),c=function(n){return(0,r.zQ)("/product/get-product-by-category",n)},i=function(n){return(0,r.zQ)("/product/get-product-top-page",n)},a=function(n){return(0,r.zQ)("/product/".concat(n))},o=function(n){return(0,r.zQ)("/product/get-filter-by-product",n)}},2377:function(n,t,e){e.d(t,{Z:function(){return d}});var r=e(1413),c=e(4925),i=e(6123),a=e.n(i),o=(e(7313),"styles_wrapButton__8Zxqh"),u=e(6417),s=["children"],d=function(n){var t=n.children,e=(0,c.Z)(n,s),i=e.classNameX,d=void 0===i?"":i,_=a()(o,d);return(0,u.jsx)("button",(0,r.Z)((0,r.Z)({},e),{},{className:_,children:t}))}},8982:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(6123),c=e.n(r),i="styles_wrapContainer__Y22d2",a=e(6417),o=function(n){var t=n.classW,e=n.children;return(0,a.jsx)("div",{className:c()(t,i),children:e})}},1145:function(n,t,e){e.d(t,{OV:function(){return i},Qy:function(){return u},kx:function(){return o},n:function(){return a}});var r=e(6031),c=e.n(r),i=function(n,t){return Math.round((n-t)/n*100)},a=function(n){var t=n.map((function(n){return(n.sale_price||n.price)*(n.quantity_order||1)}));return c().sum(t)},o=function(n){var t=n.map((function(n){return(n.sale_price||n.price)*(n.quantity_order||1)}));return c().sum(t)},u=function(n){return(n.sale_price||n.price)*(n.quantity_order||1)}},210:function(n,t,e){e.d(t,{NV:function(){return a},T4:function(){return i}});var r=e(1413),c=e(9841),i=function(n){return n.map((function(n,t){return(0,r.Z)((0,r.Z)({},n),{},{background:c.VP[t]})}))},a=function(n,t){return n.map((function(n){return n._id})).includes(t)}},1637:function(n,t,e){e.d(t,{l:function(){return r}});var r=function(n){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(n)}},7233:function(n,t,e){e.d(t,{d:function(){return c}});var r=e(3433),c=function(n,t,e){var c=n.quantity,i=n.quantity_order,a=void 0===i?1:i,o=n.price,u=n.product_name,s=n.sale_price,d=n._id,_=n.images,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;e(((null===t||void 0===t?void 0:t.map((function(n){return n._id})))||[]).includes(d)?null===t||void 0===t?void 0:t.map((function(n){return n._id===d&&a<=c&&(n.quantity_order=a+l),n})):[].concat((0,r.Z)(t),[{quantity:c,quantity_order:a,price:o,product_name:u,_id:d,sale_price:s,images:_}]))}},9841:function(n,t,e){e.d(t,{BH:function(){return u},DW:function(){return i},RH:function(){return a},VP:function(){return c},sR:function(){return o}});e(6114);var r=e(195),c=["#dcffd2","rgb(255, 237, 180)","rgb(223, 228, 255)","rgb(255, 234, 204)","rgb(255, 218, 224)","rgb(255, 243, 218)","rgb(255, 237, 180)","rgb(223, 228, 255)","rgb(255, 234, 204)","#dcffd2","rgb(255, 237, 180)","#dcffd2","rgb(255, 237, 180)","rgb(223, 228, 255)","rgb(255, 234, 204)","rgb(255, 218, 224)","rgb(255, 243, 218)","rgb(255, 237, 180)","rgb(223, 228, 255)","rgb(255, 234, 204)","#dcffd2","rgb(255, 237, 180)","#dcffd2","rgb(255, 237, 180)","rgb(223, 228, 255)","rgb(255, 234, 204)","rgb(255, 218, 224)","rgb(255, 243, 218)","rgb(255, 237, 180)","rgb(223, 228, 255)","rgb(255, 234, 204)","#dcffd2","rgb(255, 237, 180)","#dcffd2","rgb(255, 237, 180)","rgb(223, 228, 255)","rgb(255, 234, 204)","rgb(255, 218, 224)","rgb(255, 243, 218)","rgb(255, 237, 180)","rgb(223, 228, 255)","rgb(255, 234, 204)","#dcffd2","rgb(255, 237, 180)","#dcffd2","rgb(255, 237, 180)","rgb(223, 228, 255)","rgb(255, 234, 204)","rgb(255, 218, 224)","rgb(255, 243, 218)","rgb(255, 237, 180)","rgb(223, 228, 255)","rgb(255, 234, 204)","#dcffd2","rgb(255, 237, 180)","#dcffd2","rgb(255, 237, 180)","rgb(223, 228, 255)","rgb(255, 234, 204)","rgb(255, 218, 224)","rgb(255, 243, 218)","rgb(255, 237, 180)","rgb(223, 228, 255)","rgb(255, 234, 204)","#dcffd2","rgb(255, 237, 180)"],i=[{id:10,link_name:"Trang ch\u1ee7",href:r.h3.HOME_PAGE},{id:r.HS.parcentage_discount,link_name:"Khuy\u1ebfn m\xe3i",href:"".concat(r.h3.FLASH_SALE_PAGE,"/").concat(r.HS.parcentage_discount)},{id:r.HS.lipstick,link_name:"Son m\xf4i",href:"".concat(r.h3.LIPSTICK_PAGE,"/").concat(r.HS.lipstick)},{id:r.HS.perfume,link_name:"N\u01b0\u1edbc hoa",href:"".concat(r.h3.PERFUME_PAGE,"/").concat(r.HS.perfume)},{id:r.HS.sunscreen,link_name:"Ch\u1ed1ng n\u1eafng",href:"".concat(r.h3.SUNSCREEN_PAGE,"/").concat(r.HS.sunscreen)},{id:r.HS.facial_makeup,link_name:"Trang \u0111i\u1ec3m m\u1eb7t",href:"".concat(r.h3.FACIAL_MAKEUP_PAGE,"/").concat(r.HS.facial_makeup)},{id:r.HS.eye_makeup,link_name:"Trang \u0111i\u1ec3m m\u1eaft",href:"".concat(r.h3.EYE_MAKEUP_PAGE,"/").concat(r.HS.eye_makeup)},{id:r.HS.skin_care,link_name:"Ch\u0103m s\xf3c da",href:"".concat(r.h3.SKIN_CAKE_PAGE,"/").concat(r.HS.skin_care)},{id:r.HS.gift,link_name:"Qu\xe0 t\u1eb7ng",href:"".concat(r.h3.GIFT_PAGE,"/").concat(r.HS.gift)},{id:r.HS.others,link_name:"S\u1ea3n ph\u1ea9m kh\xe1c",href:"".concat(r.h3.OTHER_PAGE,"/").concat(r.HS.others)}],a=[{id:1,link_name:"Trang ch\u1ee7",href:r.h3.HOME_PAGE},{id:2,link_name:"Khuy\u1ebfn m\xe3i",href:"".concat(r.h3.FLASH_SALE_PAGE,"/").concat(r.HS.parcentage_discount)},{id:3,link_name:"N\u01b0\u1edbc hoa",href:"".concat(r.h3.PERFUME_PAGE,"/").concat(r.HS.perfume)},{id:4,link_name:"Son m\xf4i",href:"".concat(r.h3.PERFUME_PAGE,"/").concat(r.HS.lipstick)},{id:5,link_name:"Ch\u1ed1ng n\u1eafng",href:"".concat(r.h3.PERFUME_PAGE,"/").concat(r.HS.sunscreen)}],o=[{id:1,link_name:"Gi\u1edbi thi\u1ec7u",href:r.h3.CONTACT_PAGE},{id:2,link_name:"Li\xean h\u1ec7",href:"#"},{id:3,link_name:"H\u01b0\u1edbng d\u1eabn mua h\xe0ng",href:"#"},{id:4,link_name:"Theo d\xf5i \u0111\u01a1n h\xe0ng",href:"#"},{id:5,link_name:"Ch\xednh s\xe1ch v\u1eadn chuy\u1ec3n",href:"#"}],u=[{id:1,title:"Th\xf4ng tin li\xean h\u1ec7:",content:[{sub_title:"CS1:",sub_content:"Th\xe1i nguy\xean"},{sub_title:"Email:",sub_content:"bocosmetic@gmail.com"},{sub_title:"DT:",sub_content:"0123456789"},{sub_title:"Website:",sub_content:"www.bocosmetic.vn"}]},{id:2,title:"Th\xf4ng tin thanh to\xe1n:",content:[{sub_title:"CS1:",sub_content:"Th\xe1i nguy\xean"},{sub_title:"Email:",sub_content:"bocosmetic@gmail.com"},{sub_title:"DT:",sub_content:"0123456789"},{sub_title:"Website:",sub_content:"www.bocosmetic.vn"}]}]},7888:function(n,t,e){e.d(t,{e:function(){return c},x:function(){return r}});var r={TITLE_ADD_PRODUCT:"Th\xeam s\u1ea3n ph\u1ea9m",DESCRIPTION_ADD_PRODUCT:"Th\xeam s\u1ea3n ph\u1ea9m v\xe0o gi\u1ecf h\xe0ng th\xe0nh c\xf4ng!",TITLE_DELETE_PRODUCT:"X\xf3a s\u1ea3n ph\u1ea9m",DESCRIPTION_DELETE_PRODUCT:"X\xf3a s\u1ea3n ph\u1ea9m kh\u1ecfi gi\u1ecf h\xe0ng th\xe0nh c\xf4ng!"},c={EMPTY_TABLE_PRODUCT:"B\u1ea1n ch\u01b0a th\xeam s\u1ea3n ph\u1ea9m v\xe0o gi\u1ecf h\xe0ng"}},4077:function(n,t,e){e.d(t,{Z:function(){return D}});var r=e(1413),c=e(9439),i=e(1682),a=e(8197),o=e(9624),u=e(3220),s=e(2377),d=e(1145),_=e(195),l=e(1637),f=e(2135),h="styles_wrapProductCard__YhNtd",g="styles_productCard_price__qZ7bV",m="styles_price_lowPrice__eWIfG",b="styles_productCard_name__1+n6R",p="styles_productCard_img__5WPpL",v="styles_productCard_sale__504GR",E="styles_productCard_more__4W2wY",P="styles_more_star__PGJ+X",y="styles_more_slot__SN26C",k="styles_productCard_button__siSid",S=e(6417),T=function(n){var t=n.item,e=n.addProductToCart,r=t.images,c=t.sale_price,i=t.percentage_discount,a=t.quantity_sold,o=t.price,T=t.product_name,N=t._id,A=t.isDisabled;return(0,S.jsxs)("div",{className:h,children:[(0,S.jsx)("div",{className:p,children:(0,S.jsx)(f.rU,{to:"".concat(_.h3.PRODUCT_PAGE,"/").concat(N),children:(0,S.jsx)("img",{src:r[0],alt:r[0]})})}),(0,S.jsxs)("div",{className:"p-5",children:[(0,S.jsx)("div",{className:v,children:"Off ".concat(i||(0,d.OV)(o,c),"%")}),(0,S.jsxs)("div",{className:E,children:[(0,S.jsx)("div",{className:P,children:(0,S.jsx)(u.Z,{defaultValue:100,disabled:!0})}),(0,S.jsxs)("div",{className:y,children:["\u0110\xe3 b\xe1n ",a]})]}),(0,S.jsxs)("div",{className:g,children:[(0,l.l)(o),(0,S.jsx)("span",{className:m,children:(0,l.l)(c)})]}),(0,S.jsx)("div",{className:b,children:(0,S.jsx)(f.rU,{to:"".concat(_.h3.PRODUCT_PAGE,"/").concat(N),children:T})}),(0,S.jsx)(s.Z,{disabled:A,classNameX:k,onClick:function(){return e(t)},children:"Mua ngay"})]})]})},N=e(210),A=e(7233),C=e(7888),x=e(8602),j="styles_wrapListProduct__SvNFF",D=function(n){var t=n.data,e=(0,x._)(_.Fe.CART_TO_USER_KEY,[]),u=e.storedValue,s=e.setNewStoredValue,d=i.Z.useNotification(),l=(0,c.Z)(d,2),f=l[0],h=l[1];return(0,S.jsxs)("div",{className:j,children:[h,(0,S.jsx)(a.Z,{gutter:[16,16],children:!(null===t||void 0===t||!t.length)&&(null===t||void 0===t?void 0:t.map((function(n){return(0,S.jsx)(o.Z,{className:"gutter-row",xs:12,sm:12,md:12,lg:6,xl:6,children:(0,S.jsx)(T,{item:(0,r.Z)((0,r.Z)({},n),{},{isDisabled:(0,N.NV)(u,n._id)}),addProductToCart:function(n){var t;(0,A.d)(n,u,s,1),t="topRight",f.success({message:C.x.TITLE_ADD_PRODUCT,description:C.x.DESCRIPTION_ADD_PRODUCT,placement:t,duration:_.V1.SUCCESS,className:"bocosmetic-notification-success"})}})},n._id)})))})]})}},1559:function(n,t,e){e.d(t,{Z:function(){return g}});var r=e(4942),c=e(8197),i=e(9624),a=e(2135),o=e(6577),u=(e(3151),e(9946),e(1374),e(3882)),s="styles_wrapProductType__wcP-+",d="styles_productType__item__n8pNc",_="styles_productType__item___slider__4k1BG",l=e(6123),f=e.n(l),h=e(6417),g=function(n){var t=n.data,e=(null===t||void 0===t?void 0:t.length)>8,l=function(n){var t=n.category_name,c=(n._id,n.background);return(0,h.jsx)(a.rU,{to:"#",children:(0,h.jsx)("div",{className:f()(d,(0,r.Z)({},_,e)),style:{background:c},children:(0,h.jsx)("h4",{children:t})})})};return(0,h.jsx)("div",{className:s,style:e?{}:{padding:"5px 0"},children:e?(0,h.jsx)(u.tq,{navigation:!0,modules:[o.tl,o.W_],slidesPerView:4,spaceBetween:10,children:null===t||void 0===t?void 0:t.map((function(n){var t=n.category_name,e=n._id,r=n.background;return(0,h.jsx)(u.o5,{children:l({category_name:t,_id:e,background:r})},e)}))}):(0,h.jsx)(c.Z,{gutter:[16,16],children:null===t||void 0===t?void 0:t.map((function(n){var t=n.category_name,e=n._id,r=n.background;return(0,h.jsx)(i.Z,{className:"gutter-row",xs:24,sm:24,md:12,lg:12,xl:4,children:l({category_name:t,_id:e,background:r})},e)}))})})}},8602:function(n,t,e){e.d(t,{_:function(){return a}});var r=e(195),c=e(7313),i=e(56),a=function(n,t){var e=(0,i.useQueryClient)(),a=(0,i.useQuery)(r.FF.LOCAL_STRORAGE_KEY,(function(){try{var e=window.localStorage.getItem(n);return e?JSON.parse(e):(window.localStorage.setItem(n,JSON.stringify(t)),t)}catch(r){return t}}),{enabled:!0}),o=a.data,u=a.isLoading,s=(0,c.useCallback)((function(t){try{window.localStorage.setItem(n,JSON.stringify(t))}catch(c){}e.setQueryData(r.FF.LOCAL_STRORAGE_KEY,(function(){return t}))}),[e]);return{storedValue:u?t:o,setNewStoredValue:s}}},6114:function(n,t,e){n.exports=e.p+"static/media/blog-img.931018ed4ddbee8191e8.jpg"}}]);