"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[7136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={nav:{title:"\u5feb\u6377\u5bfc\u822a",order:1},order:1},s=void 0,c={unversionedId:"getting-started/usms",id:"getting-started/usms",title:"usms",description:"\u77ed\u4fe1\u670d\u52a1",source:"@site/docs/getting-started/usms.md",sourceDirName:"getting-started",slug:"/getting-started/usms",permalink:"/product/docs/getting-started/usms",draft:!1,editUrl:"https://github.com/UMCloud-FE/product/blob/main/docs/getting-started/usms.md",tags:[],version:"current",frontMatter:{nav:{title:"\u5feb\u6377\u5bfc\u822a",order:1},order:1}},i={},u=[{value:"\u77ed\u4fe1\u670d\u52a1",id:"\u77ed\u4fe1\u670d\u52a1",level:2}],l={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u77ed\u4fe1\u670d\u52a1"},"\u77ed\u4fe1\u670d\u52a1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\n\n// demo start\nclass GuideBox extends React.Component {\n  list = [\n    // { name: '\u4ea7\u54c1\u7b80\u4ecb', url: '/usms/introduction/summary' },\n    // { name: '\u5ba1\u6838\u6807\u51c6', url: '/usms/introduction/2005/2101' },\n    // { name: '\u4ea7\u54c1\u5b9a\u4ef7', url: '/usms/price/domestic' },\n    { name: '\u5feb\u901f\u5165\u95e8', url: '/docs/usms/guide/5001' },\n    { name: '\u56fd\u5185\u77ed\u4fe1', url: '/docs/usms/guide/5003/301' },\n    // { name: 'SDK\u6587\u6863', url: '/docs/usms/sdk_docs/7001' },\n    // { name: 'API\u6587\u6863', url: '/docs/usms/api_docs/9001' },\n    // { name: '\u5e38\u89c1\u95ee\u9898', url: '/docs/usms/faq/1109' },\n  ];\n\n  render() {\n    return (\n      <div className=\"docs-getting-started-container\">\n        {this.list.map((item, index) => {\n          return (\n            <a\n              key={index}\n              href={item.url}\n              className=\"docs-getting-started-item\"\n            >\n              {item.name}\n            </a>\n          );\n        })}\n      </div>\n    );\n  }\n}\n\nexport default GuideBox;\n")))}m.isMDXComponent=!0}}]);