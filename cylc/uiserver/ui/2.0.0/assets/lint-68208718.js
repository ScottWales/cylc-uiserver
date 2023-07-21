import{X as d}from"./index-4d6c7840.js";import{a as S}from"./codemirror-ab5992a1.js";import{r as V}from"./index-7237f96f.js";function I(r,e){for(var n=0;n<e.length;n++){const a=e[n];if(typeof a!="string"&&!Array.isArray(a)){for(const t in a)if(t!=="default"&&!(t in r)){const o=Object.getOwnPropertyDescriptor(a,t);o&&Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:()=>a[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var M={},m={},$=d&&d.__extends||function(){var r=function(e,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(a[o]=t[o])},r(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");r(e,n);function a(){this.constructor=e}e.prototype=n===null?Object.create(n):(a.prototype=n.prototype,new a)}}();Object.defineProperty(m,"__esModule",{value:!0});m.JSONSyntaxError=void 0;function C(r){v=r,k=r.length,c=f=j=-1,u(),E();var e=D();return h("EOF"),e}m.default=C;var v,k,c,f,j,i,l;function D(){var r=c,e=[];if(h("{"),!x("}")){do e.push(H());while(x(","));h("}")}return{kind:"Object",start:r,end:j,members:e}}function H(){var r=c,e=l==="String"?Q():null;h("String"),h(":");var n=G();return{kind:"Member",start:r,end:j,key:e,value:n}}function U(){var r=c,e=[];if(h("["),!x("]")){do e.push(G());while(x(","));h("]")}return{kind:"Array",start:r,end:j,values:e}}function G(){switch(l){case"[":return U();case"{":return D();case"String":case"Number":case"Boolean":case"Null":var r=Q();return E(),r}h("Value")}function Q(){return{kind:l,start:c,end:f,value:JSON.parse(v.slice(c,f))}}function h(r){if(l===r){E();return}var e;if(l==="EOF")e="[end of file]";else if(f-c>1)e="`"+v.slice(c,f)+"`";else{var n=v.slice(c).match(/^.+?\b/);e="`"+(n?n[0]:v[c])+"`"}throw y("Expected ".concat(r," but found ").concat(e,"."))}var q=function(r){$(e,r);function e(n,a){var t=r.call(this,n)||this;return t.position=a,t}return e}(Error);m.JSONSyntaxError=q;function y(r){return new q(r,{start:c,end:f})}function x(r){if(l===r)return E(),!0}function u(){return f<k&&(f++,i=f===k?0:v.charCodeAt(f)),i}function E(){for(j=f;i===9||i===10||i===13||i===32;)u();if(i===0){l="EOF";return}switch(c=f,i){case 34:return l="String",z();case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return l="Number",X();case 102:if(v.slice(c,c+5)!=="false")break;f+=4,u(),l="Boolean";return;case 110:if(v.slice(c,c+4)!=="null")break;f+=3,u(),l="Null";return;case 116:if(v.slice(c,c+4)!=="true")break;f+=3,u(),l="Boolean";return}l=v[c],u()}function z(){for(u();i!==34&&i>31;)if(i===92)switch(i=u(),i){case 34:case 47:case 92:case 98:case 102:case 110:case 114:case 116:u();break;case 117:u(),w(),w(),w(),w();break;default:throw y("Bad character escape sequence.")}else{if(f===k)throw y("Unterminated string.");u()}if(i===34){u();return}throw y("Unterminated string.")}function w(){if(i>=48&&i<=57||i>=65&&i<=70||i>=97&&i<=102)return u();throw y("Expected hexadecimal digit.")}function X(){i===45&&u(),i===48?u():P(),i===46&&(u(),P()),(i===69||i===101)&&(i=u(),(i===43||i===45)&&u(),P())}function P(){if(i<48||i>57)throw y("Expected decimal digit.");do u();while(i>=48&&i<=57)}var K=d&&d.__createBinding||(Object.create?function(r,e,n,a){a===void 0&&(a=n);var t=Object.getOwnPropertyDescriptor(e,n);(!t||("get"in t?!e.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(r,a,t)}:function(r,e,n,a){a===void 0&&(a=n),r[a]=e[n]}),R=d&&d.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),W=d&&d.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var n in r)n!=="default"&&Object.prototype.hasOwnProperty.call(r,n)&&K(e,r,n);return R(e,r),e},Y=d&&d.__read||function(r,e){var n=typeof Symbol=="function"&&r[Symbol.iterator];if(!n)return r;var a=n.call(r),t,o=[],s;try{for(;(e===void 0||e-- >0)&&!(t=a.next()).done;)o.push(t.value)}catch(p){s={error:p}}finally{try{t&&!t.done&&(n=a.return)&&n.call(a)}finally{if(s)throw s.error}}return o},Z=d&&d.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(M,"__esModule",{value:!0});var T=Z(S),b=V,F=W(m);T.default.registerHelper("lint","graphql-variables",function(r,e,n){if(!r)return[];var a;try{a=(0,F.default)(r)}catch(o){if(o instanceof F.JSONSyntaxError)return[B(n,o.position,o.message)];throw o}var t=e.variableToType;return t?A(n,t,a):[]});function A(r,e,n){var a=[];return n.members.forEach(function(t){var o;if(t){var s=(o=t.key)===null||o===void 0?void 0:o.value,p=e[s];p?O(p,t.value).forEach(function(g){var _=Y(g,2),N=_[0],J=_[1];a.push(B(r,N,J))}):a.push(B(r,t.key,'Variable "$'.concat(s,'" does not appear in any GraphQL query.')))}}),a}function O(r,e){if(!r||!e)return[];if(r instanceof b.GraphQLNonNull)return e.kind==="Null"?[[e,'Type "'.concat(r,'" is non-nullable and cannot be null.')]]:O(r.ofType,e);if(e.kind==="Null")return[];if(r instanceof b.GraphQLList){var n=r.ofType;if(e.kind==="Array"){var a=e.values||[];return L(a,function(s){return O(n,s)})}return O(n,e)}if(r instanceof b.GraphQLInputObjectType){if(e.kind!=="Object")return[[e,'Type "'.concat(r,'" must be an Object.')]];var t=Object.create(null),o=L(e.members,function(s){var p,g=(p=s==null?void 0:s.key)===null||p===void 0?void 0:p.value;t[g]=!0;var _=r.getFields()[g];if(!_)return[[s.key,'Type "'.concat(r,'" does not have a field "').concat(g,'".')]];var N=_?_.type:void 0;return O(N,s.value)});return Object.keys(r.getFields()).forEach(function(s){if(!t[s]){var p=r.getFields()[s].type;p instanceof b.GraphQLNonNull&&o.push([e,'Object of type "'.concat(r,'" is missing required field "').concat(s,'".')])}}),o}return r.name==="Boolean"&&e.kind!=="Boolean"||r.name==="String"&&e.kind!=="String"||r.name==="ID"&&e.kind!=="Number"&&e.kind!=="String"||r.name==="Float"&&e.kind!=="Number"||r.name==="Int"&&(e.kind!=="Number"||(e.value|0)!==e.value)?[[e,'Expected value of type "'.concat(r,'".')]]:(r instanceof b.GraphQLEnumType||r instanceof b.GraphQLScalarType)&&(e.kind!=="String"&&e.kind!=="Number"&&e.kind!=="Boolean"&&e.kind!=="Null"||rr(r.parseValue(e.value)))?[[e,'Expected value of type "'.concat(r,'".')]]:[]}function B(r,e,n){return{message:n,severity:"error",type:"validation",from:r.posFromIndex(e.start),to:r.posFromIndex(e.end)}}function rr(r){return r==null||r!==r}function L(r,e){return Array.prototype.concat.apply([],r.map(e))}const ar=I({__proto__:null,default:M},[M]);export{ar as l};
