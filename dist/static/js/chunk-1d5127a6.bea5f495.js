(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d5127a6"],{"003c":function(t,n,o){},"20e6":function(t,n,o){},7910:function(t,n,o){"use strict";var e=o("20e6"),i=o.n(e);i.a},8300:function(t,n,o){"use strict";var e=o("003c"),i=o.n(e);i.a},"8d76":function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("el-container",[o("el-header",[o("div",{staticClass:"tip"},[o("span",[t._v("使用的是")]),t._v(" "),o("el-link",{attrs:{type:"primary",href:"https://dafrok.github.io/vue-baidu-map/#/"}},[t._v("vue-baidu-map")])],1)]),t._v(" "),o("el-main",[o("baidu-map",{staticClass:"bm-view",attrs:{center:t.center,zoom:t.zoom,"scroll-wheel-zoom":!0},on:{ready:t.handler}},[o("bm-scale",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_LEFT"}}),t._v(" "),o("bm-navigation",{attrs:{anchor:"BMAP_ANCHOR_TOP_RIGHT"}}),t._v(" "),o("bm-city-list",{attrs:{anchor:"BMAP_ANCHOR_TOP_LEFT"}}),t._v(" "),o("bm-info-window",{attrs:{position:{lng:108.328802,lat:22.818446},title:"今天天气不错",show:t.infoWindow.show},on:{close:t.infoWindowClose}},[o("p",{domProps:{textContent:t._s(t.infoWindow.contents)}}),t._v(" "),o("button",{on:{click:t.getIt}},[t._v("收到")])])],1)],1)],1)],1)},i=[],s={data:function(){return{center:{lng:108.328802,lat:22.818446},zoom:17,infoWindow:{show:!0,contents:"小老弟不来尝尝美食吗？"}}},methods:{handler:function(t){var n=t.BMap,o=t.map;console.log(n,o)},infoWindowClose:function(t){this.$notify({title:"",message:"只要998¥,超值自助餐带回家",type:"success"}),this.infoWindow.show=!1},getIt:function(){this.$notify({title:"",message:"好的",type:"success"})}}},a=s,c=(o("8300"),o("7910"),o("4023")),r=Object(c["a"])(a,e,i,!1,null,"175bbdeb",null);n["default"]=r.exports}}]);