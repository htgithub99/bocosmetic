"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[917],{2339:function(e,t,n){n.d(t,{u:function(){return i},x:function(){return r}});var a=n(3503),r=function(e){return(0,a.zQ)("/post",e)},i=function(e){return(0,a.zQ)("/post/".concat(e))}},3294:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(195),r=n(2135),i="styles_wrapBlogCard__1NuJS",s="styles_blogCard_title__DqIyr",l="styles_blogCard_button__Y3fMZ",d=n(6417),o=function(e){var t=e.item;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:i,style:{backgroundImage:"url(".concat(t.image,") ")},children:[(0,d.jsx)("div",{className:s,children:(0,d.jsx)("h4",{children:t.title})}),(0,d.jsx)("div",{className:l,children:(0,d.jsx)(r.rU,{to:"".concat(a.h3.BLOG_PAGE,"/").concat(null===t||void 0===t?void 0:t._id),children:"Xem"})})]})})}},1917:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(8982),r=n(195),i=n(3294),s={},l=n(8197),d=n(9624),o=n(6417),u=function(e){var t=e.list;return(0,o.jsx)("div",{className:s.wrapListBlogItem,children:(0,o.jsx)(l.Z,{gutter:[16,16],children:!(null===t||void 0===t||!t.length)&&(null===t||void 0===t?void 0:t.map((function(e){return(0,o.jsx)(d.Z,{className:"gutter-row",xs:24,sm:12,md:12,lg:6,xl:6,children:(0,o.jsx)(i.Z,{item:e})},e._id)})))})})},c=n(2696),_=n(1413),m=n(9854),h=n(210),v=n(56);var f=n(7090),p=n(8122),x=n(4148),j=n(4077),y=n(1559),g=n(7277),b=n(7313),Z=n(6577),N=(n(3151),n(9946),n(1374),n(3882)),T="styles_wrapSliderBanner__3S7t7",E="styles_slide_item__8BmPs",P="styles_item__left__GE6EH",B="styles_item__right__9CQyd",F=function(e){var t=e.data;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(N.tq,{pagination:{dynamicBullets:!0},modules:[Z.tl,Z.W_],className:T,children:null===t||void 0===t?void 0:t.map((function(e){var t=e._id,n=e.image,a=e.title,r=e.content;return(0,o.jsx)(N.o5,{children:(0,o.jsxs)("div",{className:E,children:[(0,o.jsxs)("div",{className:P,children:[(0,o.jsx)("h1",{children:a}),(0,o.jsx)("p",{children:r}),(0,o.jsx)(g.ZP,{htmlType:"button",children:"BUY NOW"})]}),(0,o.jsx)("div",{className:B,children:(0,o.jsx)("img",{src:n,alt:n})})]})},t)}))})})},w=b.memo(F),G={wrapHome:"styles_wrapHome__tjFUy",home_productType:"styles_home_productType__iFRal",home_listProduct:"styles_home_listProduct__sn0De",home_listBlog:"styles_home_listBlog__GXSbT"},C=function(){var e,t,n=(0,p.Z)({payload:{type:r.ew.PARCENTAGE_DISCOUNT},enabled:!0}).data,i=(0,p.Z)({payload:{type:r.ew.QUANTITY_SOLD},enabled:!0}).data,s=(0,p.Z)({payload:{type:r.ew.NUMBER_OF_REVIEWS},enabled:!0}).data,l=(0,f.Z)({payload:{pageIndex:1,pageSize:8},enabled:!0}).data,d=(0,x.Z)({enabled:!0}).resourcesData,g=function(e){e.enabled;var t=e.payload,n=(0,v.useQuery)([r.FF.GET_CATEGORY_KEY,t],(function(){return(0,m.n)((0,_.Z)((0,_.Z)({},t),{},{pageSize:500})).then((function(e){var t=e.data;return(0,h.T4)(t)}))}));return{categoryData:n.data,refetchCategory:n.refetch}}({}),b=g.categoryData,Z=function(e,t,n){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Z,{title:t,sub_title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"}),(0,o.jsx)("div",{className:G.listProduct_topsale,children:(0,o.jsx)(j.Z,{data:e})})]})};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:G.wrapBanner,children:(0,o.jsx)(w,{data:null===d||void 0===d||null===(e=d.data)||void 0===e?void 0:e.banners})}),(0,o.jsx)(a.Z,{children:(0,o.jsxs)("div",{className:G.wrapHome,children:[(0,o.jsx)("div",{className:G.home_productType,children:(0,o.jsx)(y.Z,{data:(t=b||[],null===t||void 0===t?void 0:t.filter((function(e){return!e.parent_id})))})}),(0,o.jsx)("div",{className:G.home_listProduct,children:Z(null===n||void 0===n?void 0:n.data,"Top gi\u1ea3m gi\xe1")}),(0,o.jsx)("div",{className:G.home_listProduct,children:Z(null===i||void 0===i?void 0:i.data,"Top b\xe1n ch\u1ea1y")}),(0,o.jsx)("div",{className:G.home_listProduct,children:Z(null===s||void 0===s?void 0:s.data,"Top \u0111\xe1nh gi\xe1")}),(0,o.jsxs)("div",{className:G.home_listBlog,children:[(0,o.jsx)(c.Z,{title:"Blog & T\u01b0 v\u1ea5n",sub_title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"}),(0,o.jsx)("div",{className:G.listBlog_topBlog,children:(0,o.jsx)(u,{list:null===l||void 0===l?void 0:l.data})})]})]})})]})}},2696:function(e,t,n){n.d(t,{Z:function(){return i}});var a="styles_wrapListProductTitle__xuRMG",r=n(6417),i=function(e){var t=e.title,n=e.sub_title,i=e.url_img_sub_title;return(0,r.jsxs)("div",{className:a,children:[function(){if(t)return(0,r.jsx)("h2",{children:t})}(),function(){if(i)return(0,r.jsx)("img",{src:i,alt:i})}(),function(){if(n)return(0,r.jsx)("p",{children:n})}()]})}},7090:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(1413),r=n(2339),i=n(195),s=n(56);function l(e){var t=e.enabled,n=void 0!==t&&t,l=e.payload,d=(0,s.useQuery)([i.FF.GET_POST_KEY,l],(function(){return(0,r.x)((0,a.Z)({},l))}),{enabled:n});return{data:d.data,refetchGetPost:d.refetch}}},8122:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(1413),r=n(6710),i=n(195),s=n(56);function l(e){var t=e.enabled,n=void 0!==t&&t,l=e.payload,d=(0,s.useQuery)([i.FF.GET_PRODUCT_TOP_PAGE_KEY,l],(function(){return(0,r.hZ)((0,a.Z)({},l))}),{enabled:n});return{data:d.data,refetchProductTopPage:d.refetch}}},4148:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(1413),r=n(3503),i=function(e){return(0,r.zQ)("/resources",e)},s=n(195),l=n(56);function d(e){var t=e.enabled,n=void 0!==t&&t,r=e.payload,d=(0,l.useQuery)([s.FF.GET_RESOURCES_KEY],(function(){return i((0,a.Z)({},r))}),{enabled:n});return{resourcesData:d.data,refetchResources:d.refetch}}}}]);