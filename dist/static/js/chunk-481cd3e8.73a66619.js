(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-481cd3e8"],{"013f":function(e,t,n){var a=n("4ce5"),i=n("224c"),o=n("008a"),r=n("eafa"),s=n("5dd2");e.exports=function(e,t){var n=1==e,l=2==e,c=3==e,u=4==e,d=6==e,f=5==e||d,p=t||s;return function(t,s,m){for(var g,h,v=o(t),y=i(v),b=a(s,m,3),w=r(y.length),_=0,k=n?p(t,w):l?p(t,0):void 0;w>_;_++)if((f||_ in y)&&(g=y[_],h=b(g,_,v),e))if(n)k[_]=h;else if(h)switch(e){case 3:return!0;case 5:return g;case 6:return _;case 2:k.push(g)}else if(u)return!1;return d?-1:c||u?u:k}}},"333d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];n("163d");Math.easeInOutQuad=function(e,t,n,a){return e/=a/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function r(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,n){var a=s(),i=e-a,l=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=l;var s=Math.easeInOutQuad(c,a,i,t);r(s),c<t?o(e):n&&"function"===typeof n&&n()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&l(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},u=c,d=(n("e498"),n("4023")),f=Object(d["a"])(u,a,i,!1,null,"6af373ef",null);t["a"]=f.exports},"5dd2":function(e,t,n){var a=n("81dc");e.exports=function(e,t){return new(a(e))(t)}},6724:function(e,t,n){"use strict";n("8d41");var a="@@wavesContext";function i(e,t){function n(n){var a=Object.assign({},t.value),i=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),o=i.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var r=o.getBoundingClientRect(),s=o.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(r.width,r.height)+"px",o.appendChild(s)),i.type){case"center":s.style.top=r.height/2-s.offsetHeight/2+"px",s.style.left=r.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(n.pageY-r.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(n.pageX-r.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=i.color,s.className="waves-ripple z-active",!1}}return e[a]?e[a].removeHandle=n:e[a]={removeHandle:n},n}var o={bind:function(e,t){e.addEventListener("click",i(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[a].removeHandle,!1),e.addEventListener("click",i(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[a].removeHandle,!1),e[a]=null,delete e[a]}},r=function(e){e.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(r)),o.install=r;t["a"]=o},"81dc":function(e,t,n){var a=n("fb68"),i=n("2346"),o=n("cb3d")("species");e.exports=function(e){var t;return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)||(t=void 0),a(t)&&(t=t[o],null===t&&(t=void 0))),void 0===t?Array:t}},"8d41":function(e,t,n){},e204:function(e,t,n){"use strict";var a=n("e46b"),i=n("013f")(6),o="findIndex",r=!0;o in[]&&Array(1)[o]((function(){r=!1})),a(a.P+a.F*r,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("0e8b")(o)},e35e:function(e,t,n){},e498:function(e,t,n){"use strict";var a=n("e35e"),i=n.n(a);i.a},f266:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}}),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("\n      查询\n    ")]),e._v(" "),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n      新增\n    ")])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.$index+1)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"创建时间",width:"250px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{staticClass:"el-icon-time"}),e._v(" "),n("span",[e._v(e._s(t.row.createTime))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"名字"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"分类",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.category)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{"class-name":"status-col",label:"状态",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:e._f("statusFilter")(t.row.status)}},[e._v(e._s(t.row.status))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Actions",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row,i=t.$index;return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(a)}}},[e._v("\n          修改\n        ")]),e._v(" "),"下架"!=a.status?n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleStatus(a,"下架")}}},[e._v("\n          下架\n        ")]):e._e(),e._v(" "),"正常"!=a.status?n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(t){return e.handleStatus(a,"正常")}}},[e._v("\n          正常\n        ")]):e._e(),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(a,i)}}},[e._v("\n          删除\n        ")])]}}])})],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),e._v(" "),n("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,center:""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.food,"label-position":"left","label-width":"80px"}},[n("el-form-item",{attrs:{label:"创建时间",prop:"createTime"}},[n("el-date-picker",{attrs:{type:"datetime",placeholder:"创建日期"},model:{value:e.food.createTime,callback:function(t){e.$set(e.food,"createTime",t)},expression:"food.createTime"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"分类",prop:"category"}},[n("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择分类"},model:{value:e.food.category,callback:function(t){e.$set(e.food,"category",t)},expression:"food.category"}},e._l(e.categoryOptions,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"名称",prop:"name"}},[n("el-input",{model:{value:e.food.name,callback:function(t){e.$set(e.food,"name",t)},expression:"food.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"状态",prop:"status"}},[n("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.food.status,callback:function(t){e.$set(e.food,"status",t)},expression:"food.status"}},e._l(e.statusOptions,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        取消\n      ")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n        确认\n      ")])],1)],1)],1)},i=[],o=(n("e204"),n("cc57"),n("f753"),n("b775"));function r(e){return Object(o["a"])({url:"/food/list",method:"get",params:e})}function s(e){return Object(o["a"])({url:"/food/create",method:"post",data:e})}function l(e){return Object(o["a"])({url:"/food/update",method:"post",data:e})}var c=n("6724"),u=n("ed08"),d=n("333d"),f={components:{Pagination:d["a"]},directives:{waves:c["a"]},filters:{statusFilter:function(e){var t={"正常":"success","下架":"danger"};return t[e]}},data:function(){return{list:null,listLoading:!0,total:0,listQuery:{page:1,name:void 0},categoryOptions:["甜食","饭类","粉类","烧烤","西餐类"],statusOptions:["正常","下架"],food:{id:void 0,name:"",status:"",createTime:new Date,categoryId:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"修改",create:"新增"},dialogPvVisible:!1,downloadLoading:!1,rules:{type:[{required:!0,message:"type is required",trigger:"change"}],category:[{required:!0,message:"请选择分类",trigger:"change"}],status:[{required:!0,message:"请选择状态",trigger:"change"}],createTime:[{type:"date",required:!0,message:"请选择创建时间",trigger:"change"}],name:[{required:!0,message:"请输入名称",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,r(this.listQuery.name).then((function(t){e.list=t.data.items,e.total=t.data.total,e.total=t.data.total,setTimeout((function(){e.listLoading=!1}),500)}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleDownload:function(){this.downloadLoading=!0,console.log("下载"),this.downloadLoading=!1},resetFood:function(){this.food={id:void 0,name:"",status:"",createTime:new Date,categoryId:""}},handleCreate:function(){var e=this;this.resetFood(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&(e.food.id=parseInt(100*Math.random())+1024,s(e.food).then((function(){e.food.createTime=Object(u["c"])(e.food.createTime,"{y}-{m}-{d} {h}:{i}:{s}"),e.list.unshift(e.food),e.dialogFormVisible=!1,e.$notify({title:"提示",message:"新增成功",type:"success",duration:1e3})})))}))},handleUpdate:function(e){var t=this;this.food=Object.assign({},e),this.food.createTime=new Date(this.food.createTime),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){var n=Object.assign({},e.food);e.food.createTime=Object(u["c"])(+new Date(n.createTime)),l(n).then((function(){var t=e.list.findIndex((function(t){return t.id===e.food.id}));e.list.splice(t,1,e.food),e.dialogFormVisible=!1,e.$notify({title:"提示",message:"修改成功",type:"success",duration:2e3})}))}}))},handleDelete:function(e,t){var n=this;this.$confirm("确定要删除<strong>"+e.name+"</strong>吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",dangerouslyUseHTMLString:!0,type:"warning"}).then((function(){n.$notify({title:"提示",message:"删除成功!",type:"success",duration:2e3}),n.list.splice(t,1)})).catch((function(){n.$notify({title:"提示",message:"已取消删除",type:"info",duration:2e3})}))},handleStatus:function(e,t){var n=this;this.$confirm("确定要修改<strong>"+e.name+"</strong>为"+t+"吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",dangerouslyUseHTMLString:!0,type:"warning"}).then((function(){n.$notify({title:"提示",message:"修改成功",type:"success",duration:2e3}),e.status=t})).catch((function(){}))}}},p=f,m=n("4023"),g=Object(m["a"])(p,a,i,!1,null,null,null);t["default"]=g.exports}}]);