import{s as lt,o as rt,i as mt,a as dt,b as ut,c as ct,d as ft,S as F,e as q,f as U,g as _,h as N,_ as A,u as g,j as f,k as y,l as w,w as m,m as o,V as z,n as pt,r as ht,p as k,t as gt,q as C,v as E,x as L,y as yt,z as Z,A as kt,B as bt,C as v,D as I,E as V,F as Q,G as O,H as x,I as b,T as H,J as P,K as Y,L as B,M as G,N as J,O as K,P as Tt,Q as wt,R as Ot,U as xt,W as vt,X as Vt,Y as Ct,Z as Pt,$ as At,a0 as St}from"./index-DSRpE5Rv.js";import{g as Dt}from"./graphql-B2keRYja.js";import{u as S,i as D,a as h}from"./initialOptions-qpNtWc_g.js";import{V as _t,a as Qt}from"./VDataTable-DeJrdP8M.js";import{V as W}from"./vue3-apexcharts.common-fVAFgZnd.js";import{V as Rt}from"./VPagination-DeW5L5cH.js";import{d as R}from"./debounce-yiAiFcv2.js";import{V as jt}from"./VCheckbox-DP4ATyok.js";function It(){}function Bt(t,e,i,s){for(var n=t.length,a=i+(s?1:-1);s?a--:++a<n;)if(e(t[a],a,t))return a;return-1}function Mt(t){return t!==t}function $t(t,e,i){for(var s=i-1,n=t.length;++s<n;)if(t[s]===e)return s;return-1}function Ft(t,e,i){return e===e?$t(t,e,i):Bt(t,Mt,i)}function X(t,e){var i=t==null?0:t.length;return!!i&&Ft(t,e,0)>-1}function tt(t,e){return lt(rt(t,e,mt),t+"")}function j(t){return dt(t)&&ut(t)}function et(t,e,i){for(var s=-1,n=t==null?0:t.length;++s<n;)if(i(e,t[s]))return!0;return!1}var qt=200;function Ut(t,e,i,s){var n=-1,a=X,r=!0,l=t.length,u=[],p=e.length;if(!l)return u;i&&(e=ct(e,ft(i))),s?(a=et,r=!1):e.length>=qt&&(a=q,r=!1,e=new F(e));t:for(;++n<l;){var c=t[n],d=i==null?c:i(c);if(c=s||c!==0?c:0,r&&d===d){for(var T=p;T--;)if(e[T]===d)continue t;u.push(c)}else a(e,d,s)||u.push(c)}return u}var Nt=tt(function(t,e){return j(t)?Ut(t,U(e,1,j,!0)):[]}),zt=1/0,Et=_&&1/N(new _([,-0]))[1]==zt?function(t){return new _(t)}:It,Lt=200;function st(t,e,i){var s=-1,n=X,a=t.length,r=!0,l=[],u=l;if(i)r=!1,n=et;else if(a>=Lt){var p=e?null:Et(t);if(p)return N(p);r=!1,n=q,u=new F}else u=e?[]:l;t:for(;++s<a;){var c=t[s],d=e?e(c):c;if(c=i||c!==0?c:0,r&&d===d){for(var T=u.length;T--;)if(u[T]===d)continue t;e&&u.push(d),l.push(c)}else n(u,d,i)||(u!==l&&u.push(d),l.push(c))}return l}var Zt=tt(function(t){return st(U(t,1,j,!0))});function Ht(t){return t&&t.length?st(t):[]}const Yt={name:"AnalysisTableComponent",emits:[S],props:{tasks:{type:Array,required:!0},timingOption:{type:String,required:!0},initialOptions:D},setup(t,{emit:e}){const i=h("tasksFilter",{props:t,emit:e},50),s=h("sortBy",{props:t,emit:e},[{key:"name",order:"asc"}]),n=h("page",{props:t,emit:e},1);return{itemsPerPage:i,sortBy:s,page:n}},data(){return{headers:[{title:"Task",key:"name"},{title:"Platform",key:"platform"},{title:"Count",key:"count"}]}},computed:{shownHeaders(){const t=g(this.timingOption),e=[{title:`Mean T-${t}`,key:`mean${t}Time`,formatter:f,allowZeros:!1},{title:`Std Dev T-${t}`,key:`stdDev${t}Time`,formatter:f,allowZeros:!0},{title:`Min T-${t}`,key:`min${t}Time`,formatter:f,allowZeros:!1},{title:`Q1 T-${t}`,key:`${t.toLowerCase()}Quartiles.0`,formatter:f,allowZeros:!1},{title:`Median T-${t}`,key:`${t.toLowerCase()}Quartiles.1`,formatter:f,allowZeros:!1},{title:`Q3 T-${t}`,key:`${t.toLowerCase()}Quartiles.2`,formatter:f,allowZeros:!1},{title:`Max T-${t}`,key:`max${t}Time`,formatter:f,allowZeros:!1}];return this.headers.concat(e)}},methods:{formatCell(t,e){const i=e.key.match(/^(.+)\.(\d+)$/),s=(i==null?void 0:i[1])??e.key;let n=t[s];if(i){const a=i[2];n=n[a]}return e.formatter?e.formatter(n,e.allowZeros):n}},itemsPerPageOptions:[{value:10,title:"10"},{value:20,title:"20"},{value:50,title:"50"},{value:100,title:"100"},{value:200,title:"200"},{value:-1,title:"All"}]};function Gt(t,e,i,s,n,a){return y(),w(E,{"no-gutters":"",class:"c-table flex-grow-1 position-relative"},{default:m(()=>[o(C,{cols:"12",class:"mh-100 position-relative"},{default:m(()=>[o(z,{fluid:"",class:"pa-0"},{default:m(()=>[o(_t,{headers:a.shownHeaders,items:i.tasks,"sort-by":s.sortBy,"onUpdate:sortBy":e[0]||(e[0]=r=>s.sortBy=r),density:"compact",page:s.page,"onUpdate:page":e[1]||(e[1]=r=>s.page=r),"items-per-page":s.itemsPerPage,"onUpdate:itemsPerPage":e[2]||(e[2]=r=>s.itemsPerPage=r)},pt({bottom:m(()=>[o(Qt,{itemsPerPageOptions:t.$options.itemsPerPageOptions},null,8,["itemsPerPageOptions"])]),_:2},[ht(a.shownHeaders,r=>({name:`item.${r.key}`,fn:m(({item:l})=>[k(gt(a.formatCell(l,r)),1)])}))]),1032,["headers","items","sort-by","page","items-per-page"])]),_:1})]),_:1})]),_:1})}const Jt=A(Yt,[["render",Gt]]),Kt={name:"BoxPlot",components:{VueApexCharts:W},emits:[S],props:{tasks:{type:Array,required:!0},timingOption:{type:String,required:!0},initialOptions:D,itemsPerPage:{type:Number,default:20},animate:{type:Boolean,default:!0},sortInputTeleportTarget:{type:String,default:null}},setup(t,{emit:e}){const i=h("sortBy",{props:t,emit:e},"name"),s=h("page",{props:t,emit:e},1),n=h("sortDesc",{props:t,emit:e},!1),a=L(),r=yt(()=>({chart:{animations:{enabled:a.value?!1:t.animate,easing:"easeinout",speed:300,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}},fontFamily:"inherit",toolbar:{tools:{download:`<svg class="w-100 h-100"><path d="${Z}"></path></svg>`}}},tooltip:{custom({seriesIndex:l,dataPointIndex:u,w:p}){const c=f(p.globals.seriesCandleC[l][u],!0),d=f(p.globals.seriesCandleL[l][u],!0),T=f(p.globals.seriesCandleM[l][u],!0),nt=f(p.globals.seriesCandleH[l][u],!0),ot=f(p.globals.seriesCandleO[l][u],!0);return`
            <div class="pa-2">
              <div>Maximum: ${c}</div>
              <div>Q3: ${d} </div>
              <div>Median: ${T}</div>
              <div>Q1: ${nt}</div>
              <div>Minimum: ${ot}</div>
            </div>
          `}},plotOptions:{bar:{horizontal:!0},boxPlot:{colors:{upper:"#6DD5C2",lower:"#6AA4F1"}}},xaxis:{title:{text:`${g(t.timingOption)} time`},labels:{formatter:l=>f(l,!0)}}}));return{sortBy:i,page:s,sortDesc:n,chartOptions:r}},errorCaptured(t,e,i){if(t.name==="TypeError"&&e.type==="boxPlot")return console.warn(t),!1},computed:{series(){const t=[...this.tasks].sort(this.compare),e=Math.max(0,this.itemsPerPage*(this.page-1)),i=Math.min(t.length,e+this.itemsPerPage),s=[];for(let n=e;n<i;n++)s.push({x:t[n].name,y:[t[n][`min${g(this.timingOption)}Time`],t[n][`${this.timingOption}Quartiles`][0],t[n][`${this.timingOption}Quartiles`][1],t[n][`${this.timingOption}Quartiles`][2],t[n][`max${g(this.timingOption)}Time`]]});return[{data:s}]},numPages(){return Math.ceil(this.tasks.length/this.itemsPerPage)||1},sortChoices(){return[{title:"Task name",value:"name"},{title:"Platform",value:"platform"},{title:"Count",value:"count"},{title:`Mean ${this.timingOption} time`,value:`mean${g(this.timingOption)}Time`},{title:`Median ${this.timingOption} time`,value:`median${g(this.timingOption)}Time`},{title:`Min ${this.timingOption} time`,value:`min${g(this.timingOption)}Time`},{title:`Max ${this.timingOption} time`,value:`max${g(this.timingOption)}Time`}]}},watch:{numPages(){this.page=Math.min(this.numPages,this.page)}},methods:{compare(t,e){const i=t[this.sortBy]<e[this.sortBy]?-1:1;return this.sortDesc?-i:i}},icons:{sortAsc:kt,sortDesc:bt}},Wt={class:"d-flex flex-grow-1 col-gap-1"};function Xt(t,e,i,s,n,a){const r=v("VueApexCharts");return y(),I(Y,null,[i.sortInputTeleportTarget?(y(),w(H,{key:0,to:`#${i.sortInputTeleportTarget}`},[V("div",Wt,[o(Q,{"data-cy":"box-plot-sort-select",items:a.sortChoices,modelValue:s.sortBy,"onUpdate:modelValue":e[0]||(e[0]=l=>s.sortBy=l),label:"Sort by",style:{"max-width":"250px"}},null,8,["items","modelValue"]),o(b,{onClick:e[1]||(e[1]=l=>s.sortDesc=!s.sortDesc),icon:"",variant:"text",size:"small","data-cy":"box-plot-sort"},{default:m(()=>[o(O,{icon:s.sortDesc?t.$options.icons.sortDesc:t.$options.icons.sortAsc},null,8,["icon"]),o(x,null,{default:m(()=>[k("Sort ascending/descending")]),_:1})]),_:1})])],8,["to"])):P("",!0),o(r,{type:"boxPlot",options:s.chartOptions,series:a.series,height:105+a.series[0].data.length*60,width:"95%",class:"d-flex justify-center"},null,8,["options","series","height"]),o(Rt,{modelValue:s.page,"onUpdate:modelValue":e[2]||(e[2]=l=>s.page=l),length:a.numPages,"total-visible":7,density:"comfortable"},null,8,["modelValue","length"])],64)}const te=A(Kt,[["render",Xt]]),it=["name","id","platform","cyclePoint","totalTime","queueTime","runTime","startedTime"],ee=B`
query analysisJobQuery ($workflows: [ID], $tasks: [ID]) {
  jobs(live: false, workflows: $workflows, tasks: $tasks) {
    ${it.join(`
`)}
  }
}
`,se=B`
query analysisTaskQuery ($workflows: [ID]) {
  tasks(live: false, workflows: $workflows) {
    name
  }
}
`;class M extends J{constructor(e){super(),this.jobs=e}add(e){this.jobs.push(...e.jobs.map(i=>K(i,it)))}onAdded(e,i,s){this.add(e)}onUpdated(e,i,s){this.add(e)}}const ie={name:"TimeSeries",components:{VueApexCharts:W},emits:[S],props:{workflowIDs:{type:Array,required:!0},timingOption:{type:String,required:!0},initialOptions:D,platformOption:{type:[String,Number],required:!0},animate:{type:Boolean,default:!0},sortInputTeleportTarget:{type:String,default:null}},setup(t,{emit:e}){const i=L(),s=h("displayedTasks",{props:t,emit:e},[]),n=h("showOrigin",{props:t,emit:e},!1);return{reducedAnimation:i,displayedTasks:s,showOrigin:n}},beforeMount(){this.taskNamesQuery()},mounted(){this.refreshData()},data(){const t=[];return{jobCallback:new M(t),jobs:t,taskNames:[],xRange:[void 0,void 0]}},watch:{displayedTasks(t,e){t.filter(s=>!e.includes(s)).length>0&&this.jobsQuery(t)}},computed:{cyclePoints(){return Ht(this.jobs.flatMap(e=>this.displayedTasks.includes(e.name)?e.cyclePoint:[])).sort()},series(){let t={},e;for(const i of this.displayedTasks){const s={};for(const n of this.cyclePoints)s[n]={x:n,y:null};t[i]={name:i,data:s}}for(const i of this.jobs)if(this.displayedTasks.includes(i.name)&&(this.platformOption===-1||i.platform===this.platformOption)){const s=t[i.name].data[i.cyclePoint].startedTime;(s===void 0||i.startedTime.localeCompare(s)===1)&&(e=i[`${this.timingOption}Time`],Object.assign(t[i.name].data[i.cyclePoint],{x:i.cyclePoint,y:e,platform:i.platform,startedTime:i.startedTime}))}t=Object.values(t);for(const i of t)i.data=Object.values(i.data);return t},chartOptions(){return{chart:{animations:{enabled:this.animate&&!this.reducedAnimation,easing:"easeinout",speed:300,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}},fontFamily:"inherit",toolbar:{autoSelected:"zoom",tools:{download:`<svg class="w-100 h-100"><path d="${Z}"></path></svg>`,selection:!1,zoom:!0,zoomin:!1,zoomout:!1,pan:!1,reset:!0}},zoom:{type:"y"}},stroke:{width:2},markers:{size:4},tooltip:{y:{formatter:(t,{series:e,seriesIndex:i,dataPointIndex:s,w:n})=>{if(!t)return null;const a=f(t,!0),r=this.series[i].data[s].platform;return`${a} (${r})`}}},xaxis:{title:{text:"Cycle point"},categories:this.cyclePoints,min:this.xRange[0],max:this.xRange[1]},yaxis:{forceNiceScale:!0,min:this.showOrigin?0:void 0,title:{text:g(this.timingOption)+" time"},labels:{formatter:function(t){return f(t,!0)}}}}},miniChartOptions(){return{chart:{animations:{enabled:this.animate&&!this.reducedAnimation,easing:"easeinout",speed:300,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}},selection:{enabled:!0,xaxis:{min:1,max:this.cyclePoints.length}},toolbar:{autoSelected:"selection",show:!1}},legend:{show:!1},markers:{size:3},stroke:{width:2},tooltip:{enabled:!1},xaxis:{categories:this.cyclePoints,tickAmount:4,labels:{rotate:0}},yaxis:{tickAmount:3,title:{text:g(this.timingOption)+" time"},labels:{formatter:function(t){return f(t,!0)}},min:this.showOrigin?0:void 0}}}},methods:{selectSearchResults:function(){const t=this.$refs.selectTasks.filteredItems.map(e=>e.value);this.displayedTasks=Zt(this.displayedTasks,t)},deselectSearchResults:function(){const t=this.$refs.selectTasks.filteredItems.map(e=>e.value);this.displayedTasks=Nt(this.displayedTasks,t)},jobsQuery:R(async function(t){if(t.length>0){this.jobs=[],this.jobCallback=new M(this.jobs);const e=await this.$workflowService.query2(ee,{workflows:this.workflowIDs,tasks:t});this.jobCallback.onAdded(e.data)}},200),taskNamesQuery:R(async function(){const t=await this.$workflowService.query2(se,{workflows:this.workflowIDs});this.taskNames=t.data.tasks.map(e=>e.name)},200),zoomMainChart:function(t,{xaxis:e}){this.xRange=[Math.ceil(e.min),Math.floor(e.max)]},refreshData:function(){this.taskNamesQuery(),this.jobsQuery(this.displayedTasks)}},icons:{mdiRefresh:G}},ae={class:"d-flex flex-grow-1 col-gap-1"},ne={id:"mainTimeSeries"},oe={id:"miniTimeSeries"};function le(t,e,i,s,n,a){const r=v("VueApexCharts");return y(),I(Y,null,[i.sortInputTeleportTarget?(y(),w(H,{key:0,to:`#${i.sortInputTeleportTarget}`},[V("div",ae,[o(Ot,{multiple:"",chips:"","closable-chips":"",clearable:"",placeholder:"Search",items:n.taskNames,modelValue:s.displayedTasks,"onUpdate:modelValue":e[0]||(e[0]=l=>s.displayedTasks=l),label:"Select tasks",ref:"selectTasks"},{"prepend-item":m(()=>[o(Tt,{class:"mt-n2"},{default:m(()=>[o(b,{onClick:a.selectSearchResults},{default:m(()=>[k(" Select all ")]),_:1},8,["onClick"]),o(b,{onClick:a.deselectSearchResults},{default:m(()=>[k(" Deselect all ")]),_:1},8,["onClick"])]),_:1}),o(wt)]),_:1},8,["items","modelValue"]),o(b,{onClick:e[1]||(e[1]=l=>a.refreshData()),"data-cy":"analysis-jobs-refresh-btn",icon:"",variant:"text"},{default:m(()=>[o(O,{icon:t.$options.icons.mdiRefresh},null,8,["icon"]),o(x,null,{default:m(()=>[k("Refresh data")]),_:1})]),_:1}),o(jt,{class:"ma-0 pa-0",modelValue:s.showOrigin,"onUpdate:modelValue":e[2]||(e[2]=l=>s.showOrigin=l),label:"Show origin",density:"compact","hide-details":"true",style:{"min-width":"120px"}},null,8,["modelValue"])])],8,["to"])):P("",!0),V("div",ne,[o(r,{type:"line",options:a.chartOptions,series:a.series,height:450,width:"95%",class:"d-flex justify-center"},null,8,["options","series"])]),V("div",oe,[o(r,{type:"line",options:a.miniChartOptions,series:a.series,height:"120",width:"95%",onSelection:a.zoomMainChart,class:"d-flex justify-center"},null,8,["options","series","onSelection"])])],64)}const re=A(ie,[["render",le]]);function me(t,e){var s,n,a;let i=!0;return(s=e.name)!=null&&s.trim()&&i&&(i=t.name.includes(e.name)),(a=(n=e.platformOption).trim)!=null&&a.call(n)&&i&&(i=t.platform===e.platformOption),i}function de(t){const e=[{value:-1,title:"All"}],i=[];for(const s of t)i.includes(s.platform)||(i.push(s.platform),e.push({value:s.platform,title:s.platform}));return e}const at=["name","platform","count","meanTotalTime","stdDevTotalTime","minTotalTime","totalQuartiles","maxTotalTime","meanRunTime","stdDevRunTime","minRunTime","runQuartiles","maxRunTime","meanQueueTime","stdDevQueueTime","minQueueTime","queueQuartiles","maxQueueTime"],ue=B`
query analysisTaskQuery ($workflows: [ID]) {
  tasks(live: false, workflows: $workflows) {
    ${at.join(`
`)}
  }
}
`;class $ extends J{constructor(e){super(),this.tasks=e}add(e){this.tasks.push(...e.tasks.map(i=>K(i,at)))}onAdded(e,i,s){this.add(e)}onUpdated(e,i,s){this.add(e)}before(){}after(){}onPruned(){}commit(){}tearDown(){}}const ce={name:"Analysis",mixins:[Dt],components:{AnalysisTable:Jt,BoxPlot:te,TimeSeries:re},beforeMount(){this.tasksQuery()},emits:[S],props:{initialOptions:D},setup(t,{emit:e}){const i=h("tasksFilter",{props:t,emit:e},{name:"",timingOption:"totalTimes",platformOption:-1}),s=h("chartType",{props:t,emit:e},"table"),n=xt(null),a=h("dataTableOptions",{props:t,emit:e}),r=h("boxPlotOptions",{props:t,emit:e}),l=h("timeseriesPlotOptions",{props:t,emit:e});return{tasksFilter:i,chartType:s,toolbar:n,dataTableOptions:a,boxPlotOptions:r,timeseriesPlotOptions:l}},data(){const t=[];return{callback:new $(t),tasks:t}},computed:{workflowIDs(){return[this.workflowId]},filteredTasks(){return this.tasks.filter(t=>me(t,this.tasksFilter))},platformOptions(){return de(this.tasks)},timingOption(){return this.tasksFilter.timingOption.replace(/Times/,"")}},methods:{tasksQuery:R(async function(){this.tasks=[],this.callback=new $(this.tasks);const t=await this.$workflowService.query2(ue,{workflows:this.workflowIDs});this.callback.onAdded(t.data)},200)},icons:{mdiChartTimeline:vt,mdiChartTimelineVariant:Vt,mdiRefresh:G,mdiTable:Ct},timingOptions:[{value:"totalTimes",title:"Total times"},{value:"runTimes",title:"Run times"},{value:"queueTimes",title:"Queue times"}]},fe={class:"c-analysis"},pe={ref:"toolbar",id:"analysis-toolbar",class:"d-flex align-center flex-wrap my-2 col-gap-2 row-gap-4"};function he(t,e,i,s,n,a){const r=v("AnalysisTable"),l=v("BoxPlot"),u=v("TimeSeries");return y(),I("div",fe,[o(z,{fluid:"",class:"pa-2"},{default:m(()=>{var p,c;return[o(E,{"no-gutters":""},{default:m(()=>[o(C,{cols:"12",md:"4",class:"pr-md-2 mb-2 mb-md-0"},{default:m(()=>[o(Pt,{id:"c-analysis-filter-task-name",clearable:"",placeholder:"Filter by task name",modelValue:s.tasksFilter.name,"onUpdate:modelValue":e[0]||(e[0]=d=>s.tasksFilter.name=d),modelModifiers:{trim:!0},ref:"filterNameInput",disabled:s.chartType==="timeSeries"},null,8,["modelValue","disabled"])]),_:1}),o(C,{cols:"12",md:"4",class:"mb-2 mb-md-0"},{default:m(()=>[o(Q,{id:"c-analysis-filter-task-timings",items:t.$options.timingOptions,prefix:"Displaying:",modelValue:s.tasksFilter.timingOption,"onUpdate:modelValue":e[1]||(e[1]=d=>s.tasksFilter.timingOption=d)},null,8,["items","modelValue"])]),_:1}),o(C,{cols:"12",md:"4",class:"pl-md-2 mb-2 mb-md-0"},{default:m(()=>[o(Q,{id:"c-analysis-filter-task-platforms",items:a.platformOptions,prefix:"Platform:",modelValue:s.tasksFilter.platformOption,"onUpdate:modelValue":e[2]||(e[2]=d=>s.tasksFilter.platformOption=d)},null,8,["items","modelValue"])]),_:1})]),_:1}),V("div",pe,[o(At,{defaults:{VBtn:{icon:!0,variant:"text"}}},{default:m(()=>[o(St,{modelValue:s.chartType,"onUpdate:modelValue":e[3]||(e[3]=d=>s.chartType=d),mandatory:"",variant:"outlined",color:"primary"},{default:m(()=>[o(b,{value:"table","data-cy":"table-toggle"},{default:m(()=>[o(O,{icon:t.$options.icons.mdiTable},null,8,["icon"]),o(x,null,{default:m(()=>[k("Table view")]),_:1})]),_:1}),o(b,{value:"box","data-cy":"box-plot-toggle"},{default:m(()=>[o(O,{icon:t.$options.icons.mdiChartTimeline},null,8,["icon"]),o(x,null,{default:m(()=>[k("Box & whiskers view")]),_:1})]),_:1}),o(b,{value:"timeSeries","data-cy":"time-series-toggle"},{default:m(()=>[o(O,{icon:t.$options.icons.mdiChartTimelineVariant},null,8,["icon"]),o(x,null,{default:m(()=>[k("Time series view")]),_:1})]),_:1})]),_:1},8,["modelValue"]),s.chartType==="table"||s.chartType==="box"?(y(),w(b,{key:0,onClick:a.tasksQuery,"data-cy":"analysis-refresh-btn"},{default:m(()=>[o(O,{icon:t.$options.icons.mdiRefresh},null,8,["icon"]),o(x,null,{default:m(()=>[k("Refresh data")]),_:1})]),_:1},8,["onClick"])):P("",!0)]),_:1})],512),s.chartType==="table"?(y(),w(r,{key:0,tasks:a.filteredTasks,"timing-option":a.timingOption,"initial-options":s.dataTableOptions,"onUpdate:initialOptions":e[4]||(e[4]=d=>s.dataTableOptions=d)},null,8,["tasks","timing-option","initial-options"])):s.chartType==="box"?(y(),w(l,{key:1,tasks:a.filteredTasks,"timing-option":a.timingOption,"sort-input-teleport-target":(p=s.toolbar)==null?void 0:p.id,"initial-options":s.boxPlotOptions,"onUpdate:initialOptions":e[5]||(e[5]=d=>s.boxPlotOptions=d)},null,8,["tasks","timing-option","sort-input-teleport-target","initial-options"])):s.chartType==="timeSeries"?(y(),w(u,{key:2,workflowIDs:a.workflowIDs,"platform-option":s.tasksFilter.platformOption,"timing-option":a.timingOption,"sort-input-teleport-target":(c=s.toolbar)==null?void 0:c.id,"initial-options":s.timeseriesPlotOptions,"onUpdate:initialOptions":e[6]||(e[6]=d=>s.timeseriesPlotOptions=d)},null,8,["workflowIDs","platform-option","timing-option","sort-input-teleport-target","initial-options"])):P("",!0)]}),_:1})])}const ve=A(ce,[["render",he]]);export{ve as default};
