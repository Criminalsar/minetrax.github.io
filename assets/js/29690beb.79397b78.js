"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[1850],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=s(t),m=i,d=y["".concat(p,".").concat(m)]||y[m]||c[m]||a;return t?n.createElement(d,o(o({ref:r},u),{},{components:t})):n.createElement(d,o({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=y;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},5239:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(7462),i=(t(7294),t(3905));const a={sidebar_position:3,title:"Plugins Support",id:"plugins-support"},o=void 0,l={unversionedId:"plugin/plugins-support",id:"plugin/plugins-support",title:"Plugins Support",description:"Minetrax support hooking into various plugins to provide extra functionality.",source:"@site/docs/plugin/plugins-support.md",sourceDirName:"plugin",slug:"/plugin/plugins-support",permalink:"/docs/plugin/plugins-support",draft:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/edit/main/docs/plugin/plugins-support.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Plugins Support",id:"plugins-support"},sidebar:"tutorialSidebar",previous:{title:"Plugin's config.yml",permalink:"/docs/plugin/plugin-config-yaml"},next:{title:"What is WebQuery?",permalink:"/docs/plugin/what-is-webquery"}},p={},s=[{value:"PlaceholderAPI",id:"placeholderapi",level:2},{value:"ViaVersion",id:"viaversion",level:2},{value:"SkinsRestorer",id:"skinsrestorer",level:2}],u={toc:s};function c(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Minetrax support hooking into various plugins to provide extra functionality."),(0,i.kt)("h2",{id:"placeholderapi"},"PlaceholderAPI"),(0,i.kt)("p",null,"Minetrax supports PlaceholderAPI. Here is the list of placeholders supported by Minetrax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"%minetrax_player_id%\n%minetrax_player_session_uuid%\n%minetrax_player_is_verified%\n%minetrax_player_country_id%\n%minetrax_player_country_name%\n%minetrax_player_country_iso_code%\n%minetrax_player_rank_id%\n%minetrax_player_rank_shortname%\n%minetrax_player_rank_name%\n%minetrax_player_rating%\n%minetrax_player_total_score%\n%minetrax_player_position%\n%minetrax_player_first_seen_at%\n%minetrax_player_last_seen_at%\n%minetrax_player_profile_link%\n")),(0,i.kt)("h2",{id:"viaversion"},"ViaVersion"),(0,i.kt)("p",null,"Minetrax uses ViaVersion to track player's client version. If you have ViaVersion installed in your server, Minetrax will automatically track player's client version and show it in web."),(0,i.kt)("h2",{id:"skinsrestorer"},"SkinsRestorer"),(0,i.kt)("p",null,"Minetrax uses SkinsRestorer to provide skin changing functionality to players. If you have SkinsRestorer installed in your server, Minetrax will:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use it to ",(0,i.kt)("em",{parentName:"li"},"fetch")," player's skin. Using this correct avatar for skin will be shown in web even for cracked players."),(0,i.kt)("li",{parentName:"ol"},"Use it to ",(0,i.kt)("em",{parentName:"li"},"change")," player's skin. If you have enabled skin changing feature in Minetrax, players will be able to change their skin from web.")))}c.isMDXComponent=!0}}]);