"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[6103],{4118:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7294),l=a(6010),r=a(7422),o=a(9960),i=a(5999);const s="sidebar_TMXw",c="sidebarItemTitle_V4zb",m="sidebarItemList_uHd5",u="sidebarItem_spIe",d="sidebarItemLink_eqrF",g="sidebarItemLinkActive_XZSJ";function p(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(m,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:u},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title)))))))}var h=a(3102);function v(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function f(e){return n.createElement(h.Zo,{component:v,props:e})}var b=a(7524);function E(e){let{sidebar:t}=e;const a=(0,b.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(f,{sidebar:t}):n.createElement(p,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:o,...i}=e,s=t&&t.items.length>0;return n.createElement(r.Z,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(E,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},6244:(e,t,a)=>{a.d(t,{Z:()=>L});var n=a(7294),l=a(6010),r=a(5999),o=a(9960),i=a(4996),s=a(8824),c=a(8780),m=a(5290),u=a(6753);const d="blogPostTitle_rzP5",g="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j";var h=a(62);function v(e){return e.href?n.createElement(o.Z,e):n.createElement(n.Fragment,null,e.children)}function f(e){let{author:t}=e;const{name:a,title:l,url:r,imageURL:o,email:i}=t,s=r||i&&`mailto:${i}`||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},o&&n.createElement(v,{href:s,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:o,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(v,{href:s,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}const b="authorCol_FlmR",E="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function _(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",r?E:"row")},t.map(((e,t)=>n.createElement("div",{className:(0,l.Z)(!r&&"col col--6",r?N:b),key:t},n.createElement(f,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}function L(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>{const a=Math.ceil(t);return e(a,(0,r.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,i.C)(),{children:v,frontMatter:f,assets:b,metadata:E,truncated:N,isBlogPostPage:L=!1}=e,{date:k,formattedDate:Z,permalink:x,tags:P,readingTime:y,title:C,editUrl:H,authors:I}=E,w=b.image??f.image,T=!L&&N,A=P.length>0,M=L?"h1":"h2";return n.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(M,{className:d,itemProp:"headline"},L?C:n.createElement(o.Z,{itemProp:"url",to:x},C)),n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:k,itemProp:"datePublished"},Z),void 0!==y&&n.createElement(n.Fragment,null," \xb7 ",t(y))),n.createElement(_,{authors:I,assets:b})),w&&n.createElement("meta",{itemProp:"image",content:a(w,{absolute:!0})}),n.createElement("div",{id:L?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(m.Z,null,v)),(A||N)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",L&&p)},A&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":T})},n.createElement(h.Z,{tags:P})),L&&H&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:H})),T&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":A})},n.createElement(o.Z,{to:E.permalink,"aria-label":(0,r.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:C})},n.createElement("b",null,n.createElement(r.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9360:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(7294),l=a(4118),r=a(6244),o=a(7462),i=a(5999),s=a(1750);function c(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&n.createElement(s.Z,(0,o.Z)({},a,{subLabel:n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(s.Z,(0,o.Z)({},t,{subLabel:n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var m=a(833),u=a(5281),d=a(1575),g=a(6010);function p(e){const{content:t}=e,{assets:a,metadata:l}=t,{title:r,description:o,date:i,tags:s,authors:c,frontMatter:u}=l,{keywords:d}=u,g=a.image??u.image;return n.createElement(m.d,{title:r,description:o,keywords:d,image:g},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:i}),c.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&n.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}function h(e){const{content:t,sidebar:a}=e,{assets:o,metadata:i}=t,{nextItem:s,prevItem:m,frontMatter:u}=i,{hide_table_of_contents:g,toc_min_heading_level:p,toc_max_heading_level:h}=u;return n.createElement(l.Z,{sidebar:a,toc:!g&&t.toc&&t.toc.length>0?n.createElement(d.Z,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:h}):void 0},n.createElement(r.Z,{frontMatter:u,assets:o,metadata:i,isBlogPostPage:!0},n.createElement(t,null)),(s||m)&&n.createElement(c,{nextItem:s,prevItem:m}))}function v(e){return n.createElement(m.FG,{className:(0,g.Z)(u.k.wrapper.blogPages,u.k.page.blogPostPage)},n.createElement(p,e),n.createElement(h,e))}},1575:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7462),l=a(7294),r=a(6010),o=a(721);const i="tableOfContents_cNA8";function s(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},l.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},721:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7462),l=a(7294);function r(e){let{toc:t,className:a,linkClassName:n,isChild:o}=e;return t.length?l.createElement("ul",{className:o?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(r,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const o=l.memo(r);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...l}=e;a>=0?t[a].children.push(l):n.push(l)})),n}function s(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}var c=a(6668);function m(e){const t=e.getBoundingClientRect();return t.top===t.bottom?m(e.parentNode):t}function u(e,t){let{anchorTopOffset:a}=t;const n=e.find((e=>m(e).top>=a));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,c.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function g(e){const t=(0,l.useRef)(void 0),a=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let l=t;l<=a;l+=1)n.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=u(i,{anchorTopOffset:a.current}),c=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(l)),e.classList.add(l),t.current=e}else e.classList.remove(l)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,a])}function p(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:u,maxHeadingLevel:d,...p}=e;const h=(0,c.L)(),v=u??h.tableOfContents.minHeadingLevel,f=d??h.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,l.useMemo)((()=>s({toc:i(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:v,maxHeadingLevel:f});return g((0,l.useMemo)((()=>{if(r&&m)return{linkClassName:r,linkActiveClassName:m,minHeadingLevel:v,maxHeadingLevel:f}}),[r,m,v,f])),l.createElement(o,(0,n.Z)({toc:b,className:a,linkClassName:r},p))}},8824:(e,t,a)=>{a.d(t,{c:()=>c});var n=a(7294),l=a(2263);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=s();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms}), but the message contains ${n.length}: ${e}`);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}}}]);