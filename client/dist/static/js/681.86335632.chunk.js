"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[681],{8982:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(6123),a=n.n(r),s="styles_wrapContainer__Y22d2",i=n(6417),c=function(e){var t=e.classW,n=e.children;return(0,i.jsx)("div",{className:a()(t,s),children:n})}},1145:function(e,t,n){n.d(t,{OV:function(){return s},Qy:function(){return _},kx:function(){return c},n:function(){return i}});var r=n(6031),a=n.n(r),s=function(e,t){return Math.round((e-t)/e*100)},i=function(e){var t=e.map((function(e){return(e.sale_price||e.price)*(e.quantity_order||1)}));return a().sum(t)},c=function(e){var t=e.map((function(e){return(e.sale_price||e.price)*(e.quantity_order||1)}));return a().sum(t)},_=function(e){return(e.sale_price||e.price)*(e.quantity_order||1)}},1637:function(e,t,n){n.d(t,{l:function(){return r}});var r=function(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}},7888:function(e,t,n){n.d(t,{e:function(){return a},x:function(){return r}});var r={TITLE_ADD_PRODUCT:"Th\xeam s\u1ea3n ph\u1ea9m",DESCRIPTION_ADD_PRODUCT:"Th\xeam s\u1ea3n ph\u1ea9m v\xe0o gi\u1ecf h\xe0ng th\xe0nh c\xf4ng!",TITLE_DELETE_PRODUCT:"X\xf3a s\u1ea3n ph\u1ea9m",DESCRIPTION_DELETE_PRODUCT:"X\xf3a s\u1ea3n ph\u1ea9m kh\u1ecfi gi\u1ecf h\xe0ng th\xe0nh c\xf4ng!"},a={EMPTY_TABLE_PRODUCT:"B\u1ea1n ch\u01b0a th\xeam s\u1ea3n ph\u1ea9m v\xe0o gi\u1ecf h\xe0ng"}},3681:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r=n(8982),a=n(9439),s=n(6744),i=n(3729),c=n(7277),_="styles_wrapPaymentForm__LVGM+",l="styles_paymentForm_title__T2pWA",o="styles_paymentForm_form__dn2gJ",d=n(6417),u=function(){var e=s.Z.useForm(),t=(0,a.Z)(e,1)[0];return(0,d.jsxs)("div",{className:_,children:[(0,d.jsx)("div",{className:l,children:"Th\xf4ng tin thanh to\xe1n"}),(0,d.jsx)("div",{className:o,children:(0,d.jsxs)(s.Z,{form:t,onFinish:function(e){console.log("Success:",e)},autoComplete:"off",layout:"vertical",children:[(0,d.jsx)(s.Z.Item,{label:"H\u1ecd v\xe0 t\xean",name:"name",rules:[{required:!0,message:""}],children:(0,d.jsx)(i.Z,{placeholder:"Nh\u1eadp h\u1ecd v\xe0 t\xean c\u1ee7a b\u1ea1n"})}),(0,d.jsx)(s.Z.Item,{label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",name:"phone",rules:[{required:!0,message:""}],children:(0,d.jsx)(i.Z,{placeholder:"Nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i c\u1ee7a b\u1ea1n"})}),(0,d.jsx)(s.Z.Item,{label:"\u0110\u1ecba ch\u1ec9 email",name:"email",rules:[{required:!0,message:""}],children:(0,d.jsx)(i.Z,{placeholder:"Nh\u1eadp \u0111\u1ecba ch\u1ec9 email c\u1ee7a b\u1ea1n"})}),(0,d.jsx)(s.Z.Item,{label:"\u0110\u1ecba ch\u1ec9",name:"address",rules:[{required:!0,message:""}],children:(0,d.jsx)(i.Z,{placeholder:"Nh\u1eadp \u0111\u1ecba ch\u1ec9 giao h\xe0ng c\u1ee7a b\u1ea1n"})}),(0,d.jsx)(s.Z.Item,{label:"Ghi ch\xfa \u0111\u01a1n h\xe0ng",name:"note",children:(0,d.jsx)(i.Z.TextArea,{rows:4})}),(0,d.jsx)(s.Z.Item,{children:(0,d.jsx)(c.ZP,{type:"primary",htmlType:"submit",children:"\u0110\u1eb7t h\xe0ng"})})]})})]})},m=n(1413),h=n(2037),p=n(1145),y=n(195),f=n(1637),x=n(7888),j=n(2135),v=n(8602),T={wrapPaymentListProduct:"styles_wrapPaymentListProduct__CekLG",paymentListProduct_title:"styles_paymentListProduct_title__FyzP6",paymentListProduct_content:"styles_paymentListProduct_content__lnfVK",content__item:"styles_content__item__VSh90",item___price:"styles_item___price__pkGCM",paymentListProduct_cartTable:"styles_paymentListProduct_cartTable__wsKZR",cartTable__product:"styles_cartTable__product__5WMlh",product___info:"styles_product___info__TCL1R",info____name:"styles_info____name__dxZdS",info____price:"styles_info____price__PC0cc",cartTable__subtotal:"styles_cartTable__subtotal__VpAKn"},N=function(){var e=(0,v._)(y.Fe.CART_TO_USER_KEY,[]),t=e.storedValue,n=(e.setNewStoredValue,[{title:"S\u1ea3n ph\u1ea9m",dataIndex:"product",key:"product",width:500,render:function(e){return(0,d.jsx)("div",{className:T.cartTable__product,children:(0,d.jsxs)("div",{className:T.product___info,children:[(0,d.jsx)("div",{className:T.info____name,children:(0,d.jsx)(j.rU,{to:"#",children:e.product_name})}),(0,d.jsx)("div",{className:T.info____price,children:"x".concat(e.quantity_order)})]})})}},{title:"T\u1ea1m t\xednh",dataIndex:"subtotal",key:"subtotal",align:"right",render:function(e){return(0,d.jsx)("div",{className:T.cartTable__subtotal,children:(0,f.l)(e)})}}]),r=t.map((function(e){return(0,m.Z)((0,m.Z)({},e),{},{quantity:e,product:{product_name:e.product_name,price:e.sale_price||e.price,image:e.images[0],_id:e._id,quantity_order:e.quantity_order},key:e._id,subtotal:(0,p.Qy)(e)})}));return(0,d.jsxs)("div",{className:T.wrapPaymentListProduct,children:[(0,d.jsx)("div",{className:T.paymentListProduct_title,children:"\u0110\u01a1n h\xe0ng c\u1ee7a b\u1ea1n"}),(0,d.jsx)("div",{className:T.paymentListProduct_cartTable,children:(0,d.jsx)(h.Z,{locale:{emptyText:x.e.EMPTY_TABLE_PRODUCT},columns:n,dataSource:r,pagination:!1})}),(0,d.jsxs)("div",{className:T.paymentListProduct_content,children:[(0,d.jsxs)("div",{className:T.content__item,children:[(0,d.jsx)("div",{className:T.item___field,children:"T\u1ea1m t\xednh"}),(0,d.jsx)("div",{className:T.item___price,children:(0,f.l)((0,p.kx)(t))})]}),(0,d.jsxs)("div",{className:T.content__item,children:[(0,d.jsx)("div",{className:T.item___field,children:"Giao h\xe0ng"}),(0,d.jsx)("div",{className:T.item___price,children:"Giao h\xe0ng mi\u1ec5n ph\xed (\u0111\u01a1n \u2265 800k)"})]}),(0,d.jsxs)("div",{className:T.content__item,children:[(0,d.jsx)("div",{className:T.item___field,children:"T\u1ed5ng"}),(0,d.jsx)("div",{className:T.item___price,children:(0,f.l)((0,p.n)(t))})]})]})]})},g="styles_wrapPayment__LRjsc",b="styles_payment_form__40-yh",P="styles_payment_info__CgcQ+",L=function(){return(0,d.jsx)(r.Z,{children:(0,d.jsxs)("div",{className:g,children:[(0,d.jsx)("div",{className:b,children:(0,d.jsx)(u,{})}),(0,d.jsx)("div",{className:P,children:(0,d.jsx)(N,{})})]})})}},8602:function(e,t,n){n.d(t,{_:function(){return i}});var r=n(195),a=n(7313),s=n(56),i=function(e,t){var n=(0,s.useQueryClient)(),i=(0,s.useQuery)(r.FF.LOCAL_STRORAGE_KEY,(function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):(window.localStorage.setItem(e,JSON.stringify(t)),t)}catch(r){return t}}),{enabled:!0}),c=i.data,_=i.isLoading,l=(0,a.useCallback)((function(t){try{window.localStorage.setItem(e,JSON.stringify(t))}catch(a){}n.setQueryData(r.FF.LOCAL_STRORAGE_KEY,(function(){return t}))}),[n]);return{storedValue:_?t:c,setNewStoredValue:l}}}}]);