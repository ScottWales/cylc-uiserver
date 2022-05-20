(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d001a"],{"65af":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"justify-center":"",wrap:""}},[n("v-flex",{attrs:{md12:""}},[n("v-alert",{attrs:{icon:e.svgPath.table,prominent:"",color:"grey lighten-3"}},[n("h3",{staticClass:"headline"},[e._v(e._s(e.$t("Workflows.tableHeader")))])]),n("v-data-table",{attrs:{headers:e.headers,items:e.workflowsTable,loading:e.isLoading},scopedSlots:e._u([{key:"headerCell",fn:function(t){var o=t.header;return[n("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:e._s(o.text)}})]}},{key:"item",fn:function(t){var o=t.item;return[n("tr",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.viewWorkflow(o)}}},[n("td",[e._v(e._s(o.name))]),n("td",[e._v(e._s(o.owner))]),n("td",[e._v(e._s(o.host))]),n("td",[e._v(e._s(o.port))])])]}}])},[e.isLoading?e._e():n("template",{slot:"no-data"},[n("v-alert",{attrs:{value:!0,color:"error",icon:"warning"}},[n("p",{staticClass:"body-1"},[e._v("No workflows found for the current user")])])],1),n("v-progress-linear",{attrs:{slot:"progress",color:"green",indeterminate:""},slot:"progress"})],2)],1)],1)],1)},a=[],l=n("5530"),r=(n("07ac"),n("b0c0"),n("2f62")),s=n("12cb"),c=n("94ed"),i=n("1b62"),u=n("ebc4"),d=n("020d"),m=n("b4d2"),f=n("0306");function w(){var e="/home/runner/work/cylc-ui/cylc-ui/src/views/WorkflowsTable.vue",t="f5e45b2707088155fcdba21d4205217526445ab7",n=new Function("return this")(),o="__coverage__",a={path:"/home/runner/work/cylc-ui/cylc-ui/src/views/WorkflowsTable.vue",statementMap:{0:{start:{line:95,column:4},end:{line:97,column:5}},1:{start:{line:99,column:15},end:{line:133,column:3}},2:{start:{line:137,column:6},end:{line:137,column:42}},3:{start:{line:142,column:6},end:{line:142,column:64}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:94,column:2},end:{line:94,column:3}},loc:{start:{line:94,column:14},end:{line:98,column:3}},line:94},1:{name:"(anonymous_1)",decl:{start:{line:99,column:8},end:{line:99,column:9}},loc:{start:{line:99,column:15},end:{line:133,column:3}},line:99},2:{name:"(anonymous_2)",decl:{start:{line:136,column:4},end:{line:136,column:5}},loc:{start:{line:136,column:22},end:{line:138,column:5}},line:136},3:{name:"(anonymous_3)",decl:{start:{line:141,column:4},end:{line:141,column:5}},loc:{start:{line:141,column:28},end:{line:143,column:5}},line:141}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0,1:0,2:0,3:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f5e45b2707088155fcdba21d4205217526445ab7"},l=n[o]||(n[o]={});l[e]&&l[e].hash===t||(l[e]=a);var r=l[e];return w=function(){return r},r}w();var b={name:"WorkflowsTable",mixins:[i["a"],u["a"]],metaInfo:function(){return w().f[0]++,w().s[0]++,{title:this.getPageTitle("App.workflows")}},data:function(){return w().f[1]++,w().s[1]++,{query:new d["a"](f["c"],{},"root",[new m["a"]]),headers:[{sortable:!0,text:s["a"].t("Workflows.tableColumnName"),value:"name"},{sortable:!0,text:s["a"].t("Workflows.tableColumnOwner"),value:"owner"},{sortable:!0,text:s["a"].t("Workflows.tableColumnHost"),value:"host"},{sortable:!1,text:s["a"].t("Workflows.tableColumnPort"),value:"port"}],svgPath:{table:c["P"]}}},computed:Object(l["a"])(Object(l["a"])({},Object(r["e"])("workflows",["workflows"])),{},{workflowsTable:function(){return w().f[2]++,w().s[2]++,Object.values(this.workflows)}}),methods:{viewWorkflow:function(e){w().f[3]++,w().s[3]++,this.$router.push({path:"/workflows/".concat(e.name)})}}},h=b,v=n("2877"),p=n("6544"),k=n.n(p),_=n("0798"),g=n("a523"),y=n("8fea"),x=n("0e8f"),C=n("a722"),W=n("8e36"),P=Object(v["a"])(h,o,a,!1,null,null,null);t["default"]=P.exports;k()(P,{VAlert:_["a"],VContainer:g["a"],VDataTable:y["a"],VFlex:x["a"],VLayout:C["a"],VProgressLinear:W["a"]})}}]);