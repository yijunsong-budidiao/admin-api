webpackJsonp([3],{Afxa:function(t,e){},haI7:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Xxa5"),a=s.n(i),r=s("exGp"),n=s.n(r),o=s("Dd8w"),c=s.n(o),l={props:["info"],data:function(){var t=this;return{specsData:{id:"",specsname:"",attrs:"",status:""},rules:{specsname:{required:!0,message:"请输入属性名",trigger:"blur"},status:{required:!0,message:"请选择状态",trigger:"blur"},attrs:{validator:function(e,s,i){var a=!0;if(t.specsArr.forEach(function(t){""===t&&(a=!1)}),!a)return i(new Error("请输入规格属性"));i()},trigger:"blur"}},specsArr:[""]}},methods:{addAttr:function(){if(this.specsArr.length>=5)return this.$error("最多只能添加5个属性值"),!1;this.specsArr.push("")},submitForm:function(){var t=this;this.$refs.specsForm.validate(function(e){if(e){t.specsData.attrs=t.specsArr.join(",");var s=t.specsData.id>0?"/specsedit":"/specsadd";t.$http.post(s,t.specsData).then(function(e){200===e.code?(t.$success(e.msg),t.resetInfo(),t.$emit("updateList")):t.$error(e.msg)})}})},setInfo:function(t){this.specsData=c()({},t),this.specsArr=t.attrs},resetInfo:function(){this.specsData={specsname:"",status:"",attrs:""},this.specsArr=[""],this.info.isShow=!1}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-dialog",{attrs:{title:t.specsData.id>0?"编辑":"新增",visible:t.info.isShow},on:{close:t.resetInfo,"update:visible":function(e){return t.$set(t.info,"isShow",e)}}},[s("el-form",{ref:"specsForm",attrs:{model:t.specsData,rules:t.rules,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"属性名",prop:"specsname"}},[s("el-input",{attrs:{placeholder:"请输入属性名"},model:{value:t.specsData.specsname,callback:function(e){t.$set(t.specsData,"specsname","string"==typeof e?e.trim():e)},expression:"specsData.specsname"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"属性值",prop:"attrs"}},t._l(t.specsArr,function(e,i){return s("div",{key:i,staticClass:"item"},[s("el-input",{attrs:{placeholder:"请输入属性值"},model:{value:t.specsArr[i],callback:function(e){t.$set(t.specsArr,i,"string"==typeof e?e.trim():e)},expression:"specsArr[index]"}}),t._v(" "),0===i?s("el-button",{attrs:{type:"success",size:"mini"},on:{click:t.addAttr}},[t._v("添加")]):s("el-button",{attrs:{type:"danger",size:"mini"}},[t._v("删除")])],1)}),0),t._v(" "),s("el-form-item",{attrs:{label:"状态",prop:"status"}},[s("el-radio-group",{model:{value:t.specsData.status,callback:function(e){t.$set(t.specsData,"status",e)},expression:"specsData.status"}},[s("el-radio",{attrs:{label:1}},[t._v("正常")]),t._v(" "),s("el-radio",{attrs:{label:2}},[t._v("禁用")])],1)],1)],1),t._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.info.isShow=!1}}},[t._v("取 消")]),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")])],1)],1)},staticRenderFns:[]};var u=s("VU/8")(l,p,!1,function(t){s("l/iI")},"data-v-f1db0534",null).exports,d=s("NYxO"),f={components:{Dialog:u},data:function(){return{info:{isShow:!1},page:1,size:1}},computed:c()({},Object(d.d)({specsList:function(t){return t.specs.specsList},specsTotal:function(t){return t.specs.specsTotal}})),methods:c()({},Object(d.b)("specs",["getSpecsListAction","getSpecsTotalAction"]),{pageChange:function(t){this.page=t,this.getSpecsListAction({page:this.page,size:this.size})},updateList:function(){this.getSpecsListAction({page:this.page,size:this.size}),this.getSpecsTotalAction()},edit:function(t){this.$refs.dialog.setInfo(t),this.info.isShow=!0},del:function(t){var e=this;this.$myConfirm(n()(a.a.mark(function s(){var i;return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.$http.post("/specsdelete",{id:t});case 2:if(200!==(i=s.sent).code){s.next=8;break}return e.$success(i.msg),e.getSpecsListAction({page:e.page,size:e.size}),e.getSpecsTotalAction(),s.abrupt("return");case 8:e.$error(i.msg);case 9:case"end":return s.stop()}},s,e)})))}}),created:function(){this.getSpecsListAction({page:this.page,size:this.size}),this.getSpecsTotalAction()}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-card",[s("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(e){t.info.isShow=!0}}},[t._v("新增")]),t._v(" "),s("el-divider"),t._v(" "),s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.specsList}},[s("el-table-column",{attrs:{prop:"id",label:"ID","min-width":"80"}}),t._v(" "),s("el-table-column",{attrs:{prop:"specsname",label:"规格名称","min-width":"180"}}),t._v(" "),s("el-table-column",{attrs:{prop:"attrs",label:"规格可选值","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.attrs,function(e,i){return s("el-tag",{key:i,attrs:{type:"success"}},[t._v(t._s(e))])})}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.status?s("el-tag",{attrs:{type:"success"}},[t._v("正常")]):s("el-tag",{attrs:{type:"danger"}},[t._v("正常")])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"操作","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{type:"success",circle:"",size:"mini",icon:"el-icon-edit"},on:{click:function(s){return t.edit(e.row)}}}),t._v(" "),s("el-button",{attrs:{type:"danger",circle:"",size:"mini",icon:"el-icon-delete"},on:{click:function(s){return t.del(e.row.id)}}})]}}])})],1),t._v(" "),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.specsTotal,"page-size":t.size},on:{"current-change":t.pageChange}}),t._v(" "),s("Dialog",{ref:"dialog",attrs:{info:t.info},on:{updateList:t.updateList}})],1)},staticRenderFns:[]};var h=s("VU/8")(f,m,!1,function(t){s("Afxa")},"data-v-91be5a98",null);e.default=h.exports},"l/iI":function(t,e){}});
//# sourceMappingURL=3.b2900dc52ffe43080705.js.map