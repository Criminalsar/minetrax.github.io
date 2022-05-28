"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[302],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return g}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),g=i,f=m["".concat(s,".").concat(g)]||m[g]||p[g]||o;return r?t.createElement(f,a(a({ref:n},c),{},{components:r})):t.createElement(f,a({ref:n},c))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2274:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var t=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={sidebar_position:2,title:"Plugin's config.yml",id:"plugin-config-yaml"},s=void 0,u={unversionedId:"plugin/plugin-config-yaml",id:"plugin/plugin-config-yaml",title:"Plugin's config.yml",description:"Using config.yml you can modify various aspect of the plugin to suite your need.",source:"@site/docs/plugin/plugin-config-yaml.md",sourceDirName:"plugin",slug:"/plugin/plugin-config-yaml",permalink:"/docs/plugin/plugin-config-yaml",draft:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/plugin/plugin-config-yaml.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Plugin's config.yml",id:"plugin-config-yaml"},sidebar:"tutorialSidebar",previous:{title:"Installing Plugin",permalink:"/docs/plugin/installing-plugin"},next:{title:"Adding minecraft server",permalink:"/docs/tutorials/adding-minecraft-server"}},c={},p=[{value:"Content of config.yml",id:"content-of-configyml",level:4}],m={toc:p};function g(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yml")," you can modify various aspect of the plugin to suite your need.\nIn this section we will discuss about the details of those variables."),(0,o.kt)("h4",{id:"content-of-configyml"},"Content of config.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=plugins/Minetrax/config.yml",title:"plugins/Minetrax/config.yml"},'enabled: true\napi-host:\napi-key:\napi-secret:\nserver-id:\nwebquery-host: 0.0.0.0\nwebquery-port: 4000\nenable-consolelog: true\nenable-chatlog: true\nreport-server-intel: true\nreport-player-intel: true\nweb-message-format: \'&b[WEB]&r {USERNAME} {MESSAGE}&r\'\nremind-player-to-link: true\nremind-player-interval: 300\nremind-player-link-message:\n  - "&lHey there! It seems you haven\'t linked your player in web yet."\n  - "&lLink now and earn rewards & perks!"\n  - "&lType /account-link to begin"\n  - "&oIf you have already linked and getting this message try rejoining the server"\nenable-whois-on-player-join: true\nenable-whois-on-command: true\nwhois-admin-permission-name: ww.admin\nwhois-no-match-found-message: "&4&lNo matching player found with your whois query"\nwhois-player-on-first-join-message:\n  - "&a&l{USERNAME}&r is coming from &a&l{COUNTRY}&r"\n  - "&e&oNo data found for this player on web!"\nwhois-player-on-join-message:\n  - "&a&l{USERNAME}&r is coming from &a&l{COUNTRY}&r"\n  - "&6Position&r: &b&l#{POSITION}&r - &6Rank&r: &b&l{RANK}&r"\n  - "&6Rating&r: &b&l{RATING}&r - &6Score&r: &b&l{SCORE}&r"\n  - "&6Linked with&r: &b&l{USER}&r - &6Last Seen&r: &b&l{LAST_SEEN}&r"\n  - "&e&o{URL}&r"\nwhois-player-on-command-message:\n  - "&a&l{USERNAME}&r is from &a&l{COUNTRY}&r"\n  - "&6Position&r: &b&l#{POSITION}&r - &6Rank&r: &b&l{RANK}&r"\n  - "&6Rating&r: &b&l{RATING}&r - &6Score&r: &b&l{SCORE}&r"\n  - "&6Linked with&r: &b&l{USER}&r - &6Last Seen&r: &b&l{LAST_SEEN}&r"\n  - "&e&o{URL}&r"\nwhois-player-on-admin-command-message:\n  - "&a&l{USERNAME}&r is from &a&l{GEO}&r"\n  - "&6Position&r: &b&l#{POSITION}&r - &6Rank&r: &b&l{RANK}&r"\n  - "&6Rating&r: &b&l{RATING}&r - &6Score&r: &b&l{SCORE}&r"\n  - "&6Linked with&r: &b&l{USER}&r - &6Last Seen&r: &b&l{LAST_SEEN}&r"\n  - "&e&o{URL}&r"\nwhois-multiple-players-title-message: \'&a&lThere is total &e&l{COUNT}&r &a&lplayers found.\'\nwhois-multiple-players-list-message: \'&6#{POSITION}&r - &b{USERNAME}&r\'\n')))}g.isMDXComponent=!0}}]);