"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[4988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={},o="Python SDK",p={unversionedId:"usms/sdk_docs/7003",id:"usms/sdk_docs/7003",title:"Python SDK",description:"\u4e00\u3001\u51c6\u5907\u5de5\u4f5c",source:"@site/docs/usms/sdk_docs/7003.md",sourceDirName:"usms/sdk_docs",slug:"/usms/sdk_docs/7003",permalink:"/product/docs/usms/sdk_docs/7003",draft:!1,editUrl:"https://github.com/UMCloud-FE/product/blob/main/docs/docs/usms/sdk_docs/7003.md",tags:[],version:"current",frontMatter:{}},i={},s=[{value:"\u4e00\u3001\u51c6\u5907\u5de5\u4f5c",id:"\u4e00\u51c6\u5907\u5de5\u4f5c",level:2},{value:"1\uff09\u83b7\u53d6 SDK \u5bc6\u94a5\u4fe1\u606f",id:"1\u83b7\u53d6-sdk-\u5bc6\u94a5\u4fe1\u606f",level:3},{value:"2\uff09\u83b7\u53d6\u670d\u52a1\u8d26\u53f7 ID",id:"2\u83b7\u53d6\u670d\u52a1\u8d26\u53f7-id",level:3},{value:"3\uff09\u7533\u8bf7\u77ed\u4fe1\u7b7e\u540d",id:"3\u7533\u8bf7\u77ed\u4fe1\u7b7e\u540d",level:3},{value:"4\uff09\u7533\u8bf7\u77ed\u4fe1\u6a21\u677f",id:"4\u7533\u8bf7\u77ed\u4fe1\u6a21\u677f",level:3},{value:"\u4e8c\u3001\u914d\u7f6e SDK",id:"\u4e8c\u914d\u7f6e-sdk",level:2},{value:"1\uff09\u5b89\u88c5 SDK",id:"1\u5b89\u88c5-sdk",level:3},{value:"2\uff09\u53c2\u6570\u8bf4\u660e",id:"2\u53c2\u6570\u8bf4\u660e",level:3},{value:"3\uff09\u76f8\u5173\u9650\u5236",id:"3\u76f8\u5173\u9650\u5236",level:3},{value:"\u4e09\u3001\u5b8c\u6574\u793a\u4f8b",id:"\u4e09\u5b8c\u6574\u793a\u4f8b",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python-sdk"},"Python SDK"),(0,a.kt)("h2",{id:"\u4e00\u51c6\u5907\u5de5\u4f5c"},"\u4e00\u3001\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("h3",{id:"1\u83b7\u53d6-sdk-\u5bc6\u94a5\u4fe1\u606f"},"1\uff09\u83b7\u53d6 SDK \u5bc6\u94a5\u4fe1\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6 SDK \u5bc6\u94a5\u4fe1\u606f\uff0c\u4e5f\u5373\u516c\u94a5\uff08\u4e5f\u5373 PublicKey\uff09\u3001\u79c1\u94a5\uff08\u4e5f\u5373\nPrivateKey\uff09\uff0c\u53ef\u4ece ",(0,a.kt)("a",{parentName:"li",href:"https://console.ucloud.cn/uapi/apikey"},"API \u4ea7\u54c1/API \u5bc6\u94a5")," \u83b7\u53d6\uff0c\u83b7\u53d6\u6b65\u9aa4\u8be6\u89c1\uff1a",(0,a.kt)("a",{parentName:"li",href:"/usms/faq/1109"},"\u5982\u4f55\u83b7\u53d6\u516c\u94a5\u3001\u79c1\u94a5"),"\u3002")),(0,a.kt)("h3",{id:"2\u83b7\u53d6\u670d\u52a1\u8d26\u53f7-id"},"2\uff09\u83b7\u53d6\u670d\u52a1\u8d26\u53f7 ID"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6307\u5f53\u524d\u8d26\u53f7\u7684\u5728\u7528\u7684\u670d\u52a1\u8d26\u53f7 ID\uff0c\u53ef\u4ece",(0,a.kt)("a",{parentName:"li",href:"https://console.ucloud.cn/dashboard"},"\u4ea7\u54c1\u6982\u89c8\u9875"),"\u83b7\u53d6\u5f53\u524d\u7684\u670d\u52a1\u8d26\u53f7 ID")),(0,a.kt)("h3",{id:"3\u7533\u8bf7\u77ed\u4fe1\u7b7e\u540d"},"3\uff09\u7533\u8bf7\u77ed\u4fe1\u7b7e\u540d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u77ed\u4fe1"),"\uff1a\u77ed\u4fe1\u53d1\u9001\u7684\u5185\u5bb9\u7531\u77ed\u4fe1\u7b7e\u540d\u3001\u77ed\u4fe1\u6b63\u6587\u4e24\u90e8\u5206\u7ec4\u6210\uff1b\u60a8\u53ef\u5728",(0,a.kt)("a",{parentName:"li",href:"https://console.ucloud.cn/usms"},"\u77ed\u4fe1\u670d\u52a1-\u63a7\u5236\u53f0"),"\u7684",(0,a.kt)("strong",{parentName:"li"},"\u77ed\u4fe1/\u77ed\u4fe1\u7b7e\u540d"),"\u6a21\u5757\uff0c\u81ea\u52a9\u7533\u8bf7\u77ed\u4fe1\u7b7e\u540d\uff1b\u8be6\u7ec6\u7533\u8bf7\u6b65\u9aa4\u8be6\u89c1\uff1a",(0,a.kt)("a",{parentName:"li",href:"/usms/guide/5003/303"},"\u5982\u4f55\u7533\u8bf7\u77ed\u4fe1\u7b7e\u540d"))),(0,a.kt)("h3",{id:"4\u7533\u8bf7\u77ed\u4fe1\u6a21\u677f"},"4\uff09\u7533\u8bf7\u77ed\u4fe1\u6a21\u677f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u77ed\u4fe1"),"\uff1a\u77ed\u4fe1\u53d1\u9001\u7684\u5185\u5bb9\u7531\u77ed\u4fe1\u7b7e\u540d\u3001\u77ed\u4fe1\u6b63\u6587\u4e24\u90e8\u5206\u7ec4\u6210\uff1b\u5176\u4e2d\uff0c\u77ed\u4fe1\u6b63\u6587\u901a\u8fc7\u8c03\u7528\u77ed\u4fe1\u6a21\u677f\u83b7\u53d6\uff1b\u60a8\u53ef\u5728",(0,a.kt)("a",{parentName:"li",href:"https://console.ucloud.cn/usms"},"\u77ed\u4fe1\u670d\u52a1-\u63a7\u5236\u53f0"),"\u7684",(0,a.kt)("strong",{parentName:"li"},"\u77ed\u4fe1/\u77ed\u4fe1\u7b7e\u540d"),"\u6a21\u5757\uff0c\u81ea\u52a9\u7533\u8bf7\u77ed\u4fe1\u6a21\u677f\uff1b\u8be6\u7ec6\u7533\u8bf7\u6b65\u9aa4\u8be6\u89c1\uff1a",(0,a.kt)("a",{parentName:"li",href:"/usms/guide/5003/305"},"\u5982\u4f55\u7533\u8bf7\u77ed\u4fe1\u6a21\u677f"))),(0,a.kt)("h2",{id:"\u4e8c\u914d\u7f6e-sdk"},"\u4e8c\u3001\u914d\u7f6e SDK"),(0,a.kt)("h3",{id:"1\u5b89\u88c5-sdk"},"1\uff09\u5b89\u88c5 SDK"),(0,a.kt)("p",null,"\u53c2\u8003 UMCloud SDK ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ucloud.cn/opensdk-python/quickstart"},"\u5feb\u901f\u5f00\u59cb"),"\uff0c\u5b89\u88c5 SDK\u3002"),(0,a.kt)("h3",{id:"2\u53c2\u6570\u8bf4\u660e"},"2\uff09\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u624b\u673a\u53f7\u5217\u8868"),"\uff08PhoneNumbers\uff09\uff1a\u76f4\u63a5\u586b\u53f7\u7801\u6216\uff08\u957f\u9014\u56fd\u9645\u533a\u53f7\uff09\u53f7\u7801\uff0c\u4e3e\u4f8b\uff1a18512349057 \u6216\uff0886\uff0918512349057"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u77ed\u4fe1\u6a21\u677f ID"),"\uff08TemplateId\uff09: \u9996\u6b21\u4f7f\u7528\uff0c\u9700\u8981\u5728\u63a7\u5236\u53f0\u7533\u8bf7\u6a21\u677f\uff0c\u5ba1\u6838\u901a\u8fc7\u540e\uff0c\u5c06\u6a21\u677f ID \u4f20\u5165\u5230\u8be5\u5904\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u77ed\u4fe1\u6a21\u677f\u53c2\u6570\u5217\u8868"),"\uff08TemplateParams\uff09\uff1a\u77ed\u4fe1\u6a21\u677f\u4e2d\u53ef\u4f20\u5165\u53d8\u91cf\uff0c\u7533\u8bf7\u7684\u65f6\u5019\u6a21\u677f\u4e2d\u6709\u51e0\u4e2a\u53d8\u91cf\uff0c\u5219\u9700\u8981\u4f20\u5165\u51e0\u4e2a\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u77ed\u4fe1\u7b7e\u540d"),"\uff08SigContent\uff09\uff1a\u9996\u6b21\u4f7f\u7528\uff0c\u9700\u8981\u5728\u63a7\u5236\u53f0\u7533\u8bf7\u7b7e\u540d\uff0c\u5ba1\u6838\u901a\u8fc7\u540e\uff0c\u5c06\u7b7e\u540d\u4f20\u5165\u8be5\u5904\u3002\u9996\u6b21\u7533\u8bf7\u7684\u7b7e\u540d\u4e3a\u9ed8\u8ba4\u7b7e\u540d\uff0c\u6709\u9ed8\u8ba4\u7b7e\u540d\u5b58\u5728\u65f6\uff0c\u8be5\u53c2\u6570\u53ef\u4e0d\u586b\u3002")),(0,a.kt)("h3",{id:"3\u76f8\u5173\u9650\u5236"},"3\uff09\u76f8\u5173\u9650\u5236"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u77ed\u4fe1\u5185\u5bb9\u65e0\u8bba\u5b57\u6bcd\uff0c\u6c49\u5b57\uff0c\u4e2d\u82f1\u6587\u6807\u70b9\u7b26\u53f7\uff0c\u5747\u6309\u7167 1 \u4e2a\u5b57\u7b26\u8ba1\u7b97\uff0c\u5185\u5bb9\u957f\u5ea6\u4e0d\u80fd\u591a\u4e8e 600 \u5b57\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5355\u6761",(0,a.kt)("strong",{parentName:"p"},"\u77ed\u4fe1\u5b57\u6570\u4e0a\u9650\u4e3a 70 \u4e2a\uff0c\u8d85\u8fc7 70 \u4e2a\u5b57\u6570\u5c06\u6309\u7167\u201c\u6bcf 67 \u4e2a\u5b57\u6570\u4f5c\u4e3a 1 \u6761\u77ed\u4fe1\u8ba1\u201d"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5355\u6b21\u53d1\u9001"),"\u7684\u77ed\u4fe1\u5b57\u6570\u4e0a\u9650\u4e3a 500 \u4e2a\uff0c\u5b57\u6bcd\u3001\u6c49\u5b57\u3001\u4e2d\u82f1\u6587\u6807\u70b9\u7b26\u53f7\uff0c\u5747\u6309\u7167 1 \u4e2a\u5b57\u6570\u8ba1\u7b97\uff1b")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u77ed\u4fe1\u5185\u5bb9\u8bf7\u52ff\u5305\u542b\u7279\u6b8a\u5b57\u7b26\uff08\u53ef\u8fdb\u5165\u77ed\u4fe1\u53d1\u9001\u9875\u9762\uff0c\u901a\u8fc7\u654f\u611f\u8bcd\u68c0\u6d4b\u5de5\u5177\u68c0\u67e5\uff09\u3002"))),(0,a.kt)("h2",{id:"\u4e09\u5b8c\u6574\u793a\u4f8b"},"\u4e09\u3001\u5b8c\u6574\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from ucloud.core import exc\nfrom ucloud.client import Client\n\nclient = Client({\n    "public_key": "XiU9UEmQGJ/F*****************vBpXrz7SGASUgLuFfaU=",\n    "private_key": "UJ+DcfBBdbp*****************KXocEWuK2jj4XaZcepUp",\n    "project_id": "or****xo0x",\n})\n\ntry:\n    resp = client.usms().send_usms_message({\n        \'PhoneNumbers\': ["185****9057"],\n        \'SigContent\': "UCloud",\n        \'TemplateId\': "UTN19****BDD96E",\n        \'TemplateParams\': [\'424242\'],\n    })\nexcept exc.UCloudException as e:\n    print(e)\nelse:\n    print(resp)\n')),(0,a.kt)("p",null,"\u5176\u5b83 API \u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ucloud.cn/api/usms-api/get_usms_send_receipt"},"\u83b7\u53d6\u77ed\u4fe1\u56de\u6267")," \u7b49\uff0c\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://console.ucloud.cn/uapi/detail?id=GetUSMSSendReceipt"},"UAPI \u4e2d\u4ee3\u7801\u793a\u4f8b"),"\u3002"))}d.isMDXComponent=!0}}]);