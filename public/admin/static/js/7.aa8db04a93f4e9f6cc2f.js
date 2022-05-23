webpackJsonp([7],{"/wdL":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),o=a.n(i),r=a("NYxO"),n={props:["info"],computed:o()({},Object(r.d)({roleList:function(t){return t.role.roleList}})),data:function(){return{formData:{uid:"",roleid:"",username:"",password:"",status:""},rules:{roleid:{required:!0,message:"请选择角色",trigger:"blur"},username:{required:!0,message:"请输入用户名",trigger:"blur"},status:{required:!0,message:"请选择状态",trigger:"blur"}}}},methods:o()({},Object(r.b)("role",["getRoleListAction"]),{submitForm:function(){var t=this;this.$refs.adminForm.validate(function(e){if(e){var a=""!==t.formData.uid?"/useredit":"/useradd";t.$http.post(a,t.formData).then(function(e){200===e.code?(t.$success(e.msg),t.resetInfo(),t.$emit("updateList")):t.$error(e.msg)})}})},resetInfo:function(){this.formData={uid:"",roleid:"",username:"",password:"",status:""},this.info.isShow=!1},setInfo:function(t){this.formData=o()({},t),this.formData.password=""}}),created:function(){this.getRoleListAction()}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:""===t.formData.uid?"新增":"编辑",visible:t.info.isShow},on:{close:t.resetInfo,"update:visible":function(e){return t.$set(t.info,"isShow",e)}}},[a("el-form",{ref:"adminForm",attrs:{model:t.formData,rules:t.rules,"label-width":"60px"}},[a("el-form-item",{attrs:{label:"角色",prop:"roleid"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formData.roleid,callback:function(e){t.$set(t.formData,"roleid",e)},expression:"formData.roleid"}},[a("el-option",{attrs:{value:"",label:"请选择"}}),t._v(" "),t._l(t.roleList,function(t){return a("el-option",{key:t.id,attrs:{label:t.rolename,value:t.id}})})],2)],1),t._v(" "),a("el-form-item",{attrs:{label:"账号",prop:"username"}},[a("el-input",{attrs:{disabled:""!==t.formData.uid,placeholder:"请输入账号"},model:{value:t.formData.username,callback:function(e){t.$set(t.formData,"username",e)},expression:"formData.username"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-radio-group",{model:{value:t.formData.status,callback:function(e){t.$set(t.formData,"status",e)},expression:"formData.status"}},[a("el-radio",{attrs:{label:1}},[t._v("正常")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("禁用")])],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.info.isShow=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")])],1)],1)},staticRenderFns:[]};var l={components:{Dialog:a("VU/8")(n,s,!1,function(t){a("MRd+")},null,null).exports},data:function(){return{page:1,size:1,info:{isShow:!1}}},computed:o()({},Object(r.d)({adminList:function(t){return t.admin.adminList},adminTotal:function(t){return t.admin.adminTotal}})),methods:o()({},Object(r.b)("admin",["getAdminListAction","getAdminTotal"]),Object(r.c)("admin",["adminDel"]),{pageChange:function(t){this.page=t,this.getAdminListAction({page:t,size:this.size})},updateList:function(){this.getAdminListAction({page:this.page,size:this.size}),this.getAdminTotal()},edit:function(t){this.info.isShow=!0,this.$refs.dialog.setInfo(t)},del:function(t){var e=this;this.$myConfirm(function(){e.$http.post("userdelete",{uid:t}).then(function(a){if(200===a.code){e.$success(a.msg),e.updateList(),e.adminDel(t);var i=Math.ceil(e.adminTotal/e.size)===e.page?e.page-1:e.page;e.$refs.pager.$emit("current-change",i)}else e.$error(a.msg)})})}}),created:function(){this.updateList()}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",[a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(e){t.info.isShow=!0}}},[t._v("新增")]),t._v(" "),a("el-divider"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.adminList}},[a("el-table-column",{attrs:{prop:"id",label:"ID","min-width":"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"username",label:"账号","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"rolename",label:"角色","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.status?a("el-tag",{attrs:{type:"success"}},[t._v("正常")]):a("el-tag",{attrs:{type:"danger"}},[t._v("禁用")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"success",circle:"",icon:"el-icon-edit",size:"mini"},on:{click:function(a){return t.edit(e.row)}}}),t._v(" "),a("el-button",{attrs:{type:"danger",circle:"",icon:"el-icon-delete",size:"mini"},on:{click:function(a){return t.del(e.row.uid)}}})]}}])})],1),t._v(" "),a("el-pagination",{ref:"pager",attrs:{background:"",layout:"prev, pager, next",total:t.adminTotal,"page-size":t.size},on:{"current-change":t.pageChange}}),t._v(" "),a("Dialog",{ref:"dialog",attrs:{info:t.info},on:{updateList:t.updateList}})],1)},staticRenderFns:[]};var d=a("VU/8")(l,u,!1,function(t){a("WEIM")},null,null);e.default=d.exports},"MRd+":function(t,e){},WEIM:function(t,e){}});
//# sourceMappingURL=7.aa8db04a93f4e9f6cc2f.js.map