"use strict";(self.webpackChunkworld_of_cats=self.webpackChunkworld_of_cats||[]).push([[273],{8273:function(e,a,n){n.r(a),n.d(a,{default:function(){return N}});var i=n(2982),r=n(885),l=n(3040),t=n(9354),m=n(4942),o=n(1413),s=n(2791),d=n(501),c=n(5365),u="GalleryFilterBar_formWrap__3N0tT",h="GalleryFilterBar_filterForm__AzdTY",b="GalleryFilterBar_selectLabel__NkNTV",f="GalleryFilterBar_labelTextWrap__BAFLJ",p="GalleryFilterBar_formSelect__lVFqn",g="GalleryFilterBar_refetchButton__gEtm2",x=n(184),v=function(e){var a=e.refetch,n=(0,d.lr)(),l=(0,r.Z)(n,2),t=l[0],v=l[1],j=(0,s.useMemo)((function(){return Object.fromEntries((0,i.Z)(t))}),[t]),y=function(e,a){v((0,o.Z)((0,o.Z)({},j),{},(0,m.Z)({},e,a)))},N=[5,10,15,20].map((function(e){return{value:e.toString(),label:"".concat(e," items per page")}}));return(0,x.jsxs)("div",{className:u,children:[(0,x.jsxs)("form",{className:h,children:[(0,x.jsxs)("label",{className:b,htmlFor:"order",children:[(0,x.jsx)("span",{className:f,children:"order"}),(0,x.jsx)("select",{className:p,id:"order",onChange:function(e){return y("order",e.target.value)},children:[{value:"RAND",label:"Random"},{value:"DESC",label:"Desc"},{value:"ASC",label:"Asc"}].map((function(e){return(0,x.jsx)("option",{value:e.value,children:e.label},e.value)}))})]}),(0,x.jsxs)("label",{className:b,htmlFor:"type",children:[(0,x.jsx)("span",{className:f,children:"type"}),(0,x.jsx)("select",{className:p,id:"type",onChange:function(e){return y("type",e.target.value)},children:[{value:"jpg,gif,png",label:"All"},{value:"jpg,png",label:"Static"},{value:"gif",label:"Animated"}].map((function(e){return(0,x.jsx)("option",{value:e.value,children:e.label},e.value)}))})]}),(0,x.jsxs)("label",{className:b,htmlFor:"breed",children:[(0,x.jsx)("span",{className:f,children:"breed"}),(0,x.jsxs)("select",{className:p,id:"breed",onChange:function(e){return y("breed",e.target.value)},children:[(0,x.jsx)("option",{value:"none",children:"None"}),c.o.map((function(e){var a=e.name,n=e.id;return(0,x.jsx)("option",{value:n,children:a},n)}))]})]}),(0,x.jsxs)("label",{className:b,htmlFor:"limit",children:[(0,x.jsx)("span",{className:f,children:"limit"}),(0,x.jsx)("select",{className:p,id:"limit",onChange:function(e){return y("limit",e.target.value)},children:N.map((function(e){return(0,x.jsx)("option",{value:e.value,children:e.label},e.value)}))})]})]}),(0,x.jsx)("button",{type:"button",className:g,onClick:function(){a()}})]})},j=n(9938),y=n(5655),N=function(e){var a=(0,d.lr)(),n=(0,r.Z)(a,2),m=n[0],o=n[1],c=(0,s.useMemo)((function(){return Object.fromEntries((0,i.Z)(m))}),[m]);(0,s.useEffect)((function(){!c.limit&&o({order:"RAND",type:"jpg,gif,png",breed:"none",limit:5})}),[o,c]);var u=(0,y.l$)(c),h=u.data,b=u.isFetching,f=u.refetch;return(0,x.jsxs)("section",{children:[(0,x.jsx)(t.g,{categoryName:"gallery",location:"/"}),(0,x.jsx)(v,{refetch:f}),b&&(0,x.jsx)(j.a,{}),h&&!b&&(0,x.jsx)(l.P,{data:h,isFetching:b})]})}},5365:function(e,a,n){n.d(a,{o:function(){return i}});var i=[{id:"abys",name:"Abyssinian"},{id:"aege",name:"Aegean"},{id:"abob",name:"American Bobtail"},{id:"acur",name:"American Curl"},{id:"asho",name:"American Shorthair"},{id:"awir",name:"American Wirehair"},{id:"amau",name:"Arabian Mau"},{id:"amis",name:"Australian Mist"},{id:"bali",name:"Balinese"},{id:"bamb",name:"Bambino"},{id:"beng",name:"Bengal"},{id:"birm",name:"Birman"},{id:"bomb",name:"Bombay"},{id:"bslo",name:"British Longhair"},{id:"bsho",name:"British Shorthair"},{id:"bure",name:"Burmese"},{id:"buri",name:"Burmilla"},{id:"cspa",name:"California Spangled"},{id:"ctif",name:"Chantilly-Tiffany"},{id:"char",name:"Chartreux"},{id:"chau",name:"Chausie"},{id:"chee",name:"Cheetoh"},{id:"csho",name:"Colorpoint Shorthair"},{id:"crex",name:"Cornish Rex"},{id:"cymr",name:"Cymric"},{id:"cypr",name:"Cyprus"},{id:"drex",name:"Devon Rex"},{id:"dons",name:"Donskoy"},{id:"lihu",name:"Dragon Li"},{id:"emau",name:"Egyptian Mau"},{id:"ebur",name:"European Burmese"},{id:"esho",name:"Exotic Shorthair"},{id:"hbro",name:"Havana Brown"},{id:"hima",name:"Himalayan"},{id:"jbob",name:"Japanese Bobtail"},{id:"java",name:"Javanese"},{id:"khao",name:"Khao Manee"},{id:"kora",name:"Korat"},{id:"kuri",name:"Kurilian"},{id:"lape",name:"LaPerm"},{id:"mcoo",name:"Maine Coon"},{id:"mala",name:"Malayan"},{id:"manx",name:"Manx"},{id:"munc",name:"Munchkin"},{id:"nebe",name:"Nebelung"},{id:"norw",name:"Norwegian Forest Cat"},{id:"ocic",name:"Ocicat"},{id:"orie",name:"Oriental"},{id:"pers",name:"Persian"},{id:"pixi",name:"Pixie-bob"},{id:"raga",name:"Ragamuffin"},{id:"ragd",name:"Ragdoll"},{id:"rblu",name:"Russian Blue"},{id:"sava",name:"Savannah"},{id:"sfol",name:"Scottish Fold"},{id:"srex",name:"Selkirk Rex"},{id:"siam",name:"Siamese"},{id:"sibe",name:"Siberian"},{id:"sing",name:"Singapura"},{id:"snow",name:"Snowshoe"},{id:"soma",name:"Somali"},{id:"sphy",name:"Sphynx"},{id:"tonk",name:"Tonkinese"},{id:"toyg",name:"Toyger"},{id:"tang",name:"Turkish Angora"},{id:"tvan",name:"Turkish Van"},{id:"ycho",name:"York Chocolate"}]}}]);
//# sourceMappingURL=273.98f6dd58.chunk.js.map