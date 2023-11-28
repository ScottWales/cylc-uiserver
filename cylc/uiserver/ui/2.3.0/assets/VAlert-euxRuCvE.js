import{e9 as L,bH as A,bI as D,bK as $,dt as z,bL as R,du as O,dv as w,bM as E,bO as F,bP as M,bQ as j,bR as H,m as s,bU as K,ea as N,eb as Q,dy as U,dz as q,dA as G,dB as J,dC as W,ec as X,b2 as Y,bS as Z,z as a,ed as p,cd as d,c5 as ee,b_ as te}from"./index-p5QwxXYb.js";const ae=L("v-alert-title"),le=["success","info","warning","error"],ne=A()({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:D,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>le.includes(e)},...$(),...z(),...R(),...O(),...w(),...E(),...F(),...M(),...j({variant:"flat"})},emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:t}=u;const n=H(e,"modelValue"),l=s(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),v=s(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:b}=K(e),{colorClasses:m,colorStyles:y,variantClasses:f}=N(v),{densityClasses:C}=Q(e),{dimensionStyles:P}=U(e),{elevationClasses:V}=q(e),{locationStyles:k}=G(e),{positionClasses:x}=J(e),{roundedClasses:S}=W(e),{textColorClasses:g,textColorStyles:_}=X(Y(e,"borderColor")),{t:B}=Z(),o=s(()=>({"aria-label":B(e.closeLabel),onClick(r){n.value=!1}}));return()=>{const r=!!(t.prepend||l.value),T=!!(t.title||e.title),h=!!(e.text||t.text),I=!!(t.close||e.closable);return n.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},b.value,m.value,C.value,V.value,x.value,S.value,f.value],style:[y.value,P.value,k.value],role:"alert"},{default:()=>{var i;return[p(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",g.value],style:_.value},null),r&&a(d,{key:"prepend",defaults:{VIcon:{density:e.density,icon:l.value,size:e.prominent?44:28}}},{default:()=>[a("div",{class:"v-alert__prepend"},[t.prepend?t.prepend():l.value&&a(ee,null,null)])]}),a("div",{class:"v-alert__content"},[T&&a(ae,{key:"title"},{default:()=>[t.title?t.title():e.title]}),h&&(t.text?t.text():e.text),(i=t.default)==null?void 0:i.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),I&&a(d,{key:"close",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var c;return[a("div",{class:"v-alert__close"},[((c=t.close)==null?void 0:c.call(t,{props:o.value}))??a(te,o.value,null)])]}})]}})}}});export{ne as V};
