"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[566],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,b=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7182:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],u={sidebar_position:3,title:"Before you Begin",id:"before-you-begin"},l=void 0,c={unversionedId:"introduction/before-you-begin",id:"introduction/before-you-begin",title:"Before you Begin",description:"MineTrax has two parts:",source:"@site/docs/introduction/before-you-begin.md",sourceDirName:"introduction",slug:"/introduction/before-you-begin",permalink:"/docs/introduction/before-you-begin",draft:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/introduction/before-you-begin.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Before you Begin",id:"before-you-begin"},sidebar:"tutorialSidebar",previous:{title:"Supported Versions",permalink:"/docs/introduction/supported-versions"},next:{title:"Getting started",permalink:"/docs/web/getting-started"}},s={},p=[{value:"Web",id:"web",level:2},{value:"Plugin",id:"plugin",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"MineTrax has two parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Web"),(0,i.kt)("li",{parentName:"ul"},"Plugin")),(0,i.kt)("p",null,"You need to install both web and plugin part to get the suite working."),(0,i.kt)("h2",{id:"web"},"Web"),(0,i.kt)("p",null,"Developed using Laravel, Web is the main part of suite, i.e, UI and backend layer. It will be hard to host the web in a traditional web hosting, It is recommended to host the web in a virtual(VPS) or dedicated server as per your need."),(0,i.kt)("h2",{id:"plugin"},"Plugin"),(0,i.kt)("p",null,"This is the spigot plugin which you need to install on your Minecraft server.\nIt is responsible for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Calculating and sending Player & Server Intel data to Web."),(0,i.kt)("li",{parentName:"ul"},"Sending chat and servers log to web if enabled."),(0,i.kt)("li",{parentName:"ul"},"Enabling users for web to chat with ingame players."),(0,i.kt)("li",{parentName:"ul"},"and various other things like whois command /ww etc.")))}f.isMDXComponent=!0}}]);