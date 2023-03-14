"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[380],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),o=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(i.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=o(n),k=r,g=s["".concat(i,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(g,d(d({ref:e},m),{},{components:n})):a.createElement(g,d({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,d=new Array(l);d[0]=k;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[s]="string"==typeof t?t:r,d[1]=p;for(var o=2;o<l;o++)d[o]=n[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7333:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={},d="\u6279\u91cf\u53d1\u9001\u77ed\u4fe1-SendBatchUSMSMessage",p={unversionedId:"api/SendBatchUSMSMessage",id:"api/SendBatchUSMSMessage",title:"\u6279\u91cf\u53d1\u9001\u77ed\u4fe1-SendBatchUSMSMessage",description:"\u8c03\u7528SendBatchUSMSMessage\u63a5\u53e3\u6279\u91cf\u53d1\u9001\u77ed\u4fe1",source:"@site/docs/api/SendBatchUSMSMessage.md",sourceDirName:"api",slug:"/api/SendBatchUSMSMessage",permalink:"/docs/api/SendBatchUSMSMessage",draft:!1,editUrl:"https://github.com/uSpeedo/product/blob/main/docs/docs/api/SendBatchUSMSMessage.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"\u83b7\u53d6\u77ed\u4fe1\u53d1\u9001\u72b6\u6001-GetUSMSSendReceipt",permalink:"/docs/api/GetUSMSSendReceipt"},next:{title:"\u53d1\u9001\u77ed\u4fe1-SendUSMSMessage",permalink:"/docs/api/SendUSMSMessage"}},i={},o=[{value:"BatchInfo",id:"batchinfo",level:2},{value:"FailPhoneDetail",id:"failphonedetail",level:2}],m={toc:o},s="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6279\u91cf\u53d1\u9001\u77ed\u4fe1-sendbatchusmsmessage"},"\u6279\u91cf\u53d1\u9001\u77ed\u4fe1-SendBatchUSMSMessage"),(0,r.kt)("p",null,"\u8c03\u7528SendBatchUSMSMessage\u63a5\u53e3\u6279\u91cf\u53d1\u9001\u77ed\u4fe1"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u4e00\u6b21\u6279\u91cf\u8bf7\u6c42\u4e2d\uff0c\u6700\u591a\u652f\u6301200\u4e2a\u53f7\u7801")),(0,r.kt)("h1",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AccountId"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9879\u76eeID\u3002\u4e0d\u586b\u5199\u4e3a\u9ed8\u8ba4\u9879\u76ee\uff0c\u5b50\u5e10\u53f7\u5fc5\u987b\u586b\u5199\u3002 \u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"td",href:"https://docs.ucloud.cn/api/summary/get_project_list"},"GetProjectList\u63a5\u53e3")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TaskContent"),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},'\u6279\u91cf\u53d1\u9001\u5185\u5bb9\uff0c\u53d1\u9001\u5185\u5bb9json\u6570\u7ec4\u4e2d\uff0c\u6bcf\u4e2a\u201c\u6a21\u677f\u201d\u7ec4\u5408\u4f5c\u4e3a\u4e00\u4e2a\u5b50\u9879\uff0c\u6bcf\u4e2a\u5b50\u9879\u5185\u652f\u6301\u591a\u4e2a\u53f7\u7801\uff0c\u793a\u4f8b\uff1a\u53d1\u9001\u5185\u5bb9json\u6570\u7ec4\uff1a[{"TemplateId": "UTA20212831C85C", "SenderId": "UCloud", "Target": [{"TemplateParams": ','["123456"]',', "Phone": "(852)55311111", "ExtendCode": "123", "UserId": "456"} ] } ]   \u3002json\u6570\u7ec4\u4e2d\u5404\u53c2\u6570\u7684\u5b9a\u4e49\uff1a"TemplateId":\u6a21\u677fID\uff0c"SenderId"\u77ed\u4fe1SenderId\uff0c"Target"\u5177\u4f53\u5230\u53f7\u7801\u7c92\u5ea6\u7684\u53d1\u9001\u5185\u5bb9\u3002"Target"\u4e2d\u7684\u5177\u4f53\u5b57\u6bb5\u6709\uff1a"TemplateParams"\u5b9e\u9645\u53d1\u9001\u7684\u6a21\u677f\u53c2\u6570\uff08\u82e5\u4f7f\u7528\u7684\u662f\u65e0\u53c2\u6570\u6a21\u677f\uff0c\u8be5\u53c2\u6570\u4e0d\u80fd\u4f20\u503c\uff09\uff0c"Phone"\u624b\u673a\u53f7\u7801, "ExtendCode"\u77ed\u4fe1\u6269\u5c55\u7801, "UserId"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u6807\u8bc6ID\u3002\u5176\u4e2d\u5fc5\u4f20\u53c2\u6570\u4e3a"TemplateId", "SenderId", "Target"\uff08"Target"\u4e2d\u5fc5\u4f20\u53c2\u6570\u4e3a"Phone"\uff09\u3002'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))))),(0,r.kt)("p",null,"?> \u652f\u6301\u5728\u4e00\u6b21\u8bf7\u6c42\u4e2d\u5411\u591a\u4e2a\u4e0d\u540c\u7684\u624b\u673a\u53f7\u7801\u53d1\u9001\u4e0d\u540c\u5185\u5bb9\u7684\u77ed\u6d88\u606f"),(0,r.kt)("h1",{id:"response-elements"},"Response Elements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RetCode"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53RetCode\u4e0d\u4e3a0\u65f6\uff0cMessage\u4e2d\u663e\u793a\u5177\u4f53\u9519\u8bef\u63cf\u8ff0\uff0c\u82e5RetCode\u4e3a0\uff0c\u4e0d\u8fd4\u56deMessage"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u751f\u9519\u8bef\u65f6\u8868\u793a\u9519\u8bef\u63cf\u8ff0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SessionNo"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u63d0\u4ea4\u53d1\u9001\u4efb\u52a1\u7684\u552f\u4e00ID\uff0c\u53ef\u6839\u636e\u8be5\u503c\u67e5\u8be2\u672c\u6b21\u53d1\u9001\u7684\u77ed\u4fe1\u5217\u8868\u3002\u6ce8\uff1a\u6210\u529f\u63d0\u4ea4\u77ed\u4fe1\u6570\u5927\u4e8e0\u65f6\uff0c\u624d\u8fd4\u56de\u8be5\u5b57\u6bb5"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReqUuid"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u8bf7\u6c42Uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SuccessCount"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u529f\u63d0\u4ea4\u77ed\u4fe1\uff08\u672a\u62c6\u5206\uff09\u6761\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FailContent"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u53d1\u9001\u6210\u529f\u7684\u8be6\u60c5\uff0c\u8fd4\u56de\u7801\u975e0\u65f6\u8be5\u5b57\u6bb5\u6709\u6548\uff0c\u53ef\u6839\u636e\u8be5\u5b57\u6bb5\u6570\u636e\u91cd\u53d1"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h2",{id:"batchinfo"},"BatchInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TemplateId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6a21\u677fID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SenderId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"SenderId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Target"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5177\u4f53\u53f7\u7801\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FailureDetails"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u80fd\u6210\u529f\u53d1\u9001\u7684\u8be6\u60c5\u3002\u6ce8\uff1a\u6a21\u677f/SenderId\u68c0\u9a8c\u5931\u8d25\u65f6\uff0c\u8be5\u5b57\u6bb5\u6709\u6548"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h2",{id:"failphonedetail"},"FailPhoneDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TemplateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6a21\u677f\u53c2\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Phone"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u624b\u673a\u53f7"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExtendCode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u53f7\u7801"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UserId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u81ea\u5b9a\u4e49ID"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FailureDetails"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5931\u8d25\u539f\u56e0\u3002\u6ce8\uff1a\u82e5\u6a21\u677f/SenderId\u6821\u9a8c\u5931\u8d25\uff0c\u8be5\u5b57\u6bb5\u4e3a\u7a7a"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h1",{id:"request-example"},"Request Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X POST https://api.uspeedo.com/api -H \'Content-Type: application/json\' -d \'{\n   "Action": "SendBatchUSMSMessage",\n   "AccountId": 1,\n   "TaskContent": [\n  {\n    "TemplateId": "UTA20212831C85C",\n    "SenderId": "UCloud",\n    "Target": [\n      {\n        "TemplateParams": [\n          "123456"\n        ],\n        "Phone": "(852)55311111",\n        "ExtendCode": "123",\n        "UserId": "456"\n      }\n    ]\n  }\n]\n}\'\n')),(0,r.kt)("h1",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "FailContent": [\n        {\n            "SenderId": "UCloud", \n            "Target": [\n                {\n                    "Phone": "(852)55311111", \n                    "UserId": "catch the big fish", \n                    "ExtendCode": "123", \n                    "TemplateParams": [\n                        "\u5f00\u5fc3\u679c\u6316\u571f\u673a", \n                        "13579"\n                    ]\n                }\n            ], \n            "FailureDetails": "phone in the black list", \n            "TemplateId": "UTA20212831C85C"\n        }\n    ], \n    "RetCode": 0, \n    "SuccessCount": 2, \n    "SessionNo": "abcd-dadd-dafs-dadfa-dafdsa", \n    "Action": "SendBatchUSMSMessageResponse", \n    "Message": "submit success", \n    "ReqUuid": "abcd-dadd-dafs-dadfa-dafdsa"\n}\n')))}u.isMDXComponent=!0}}]);