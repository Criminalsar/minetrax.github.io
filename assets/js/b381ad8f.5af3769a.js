"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[1582],{3668:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=i(4848),t=i(8453);const s={sidebar_position:110,title:"Change Player Skin",id:"change-player-skin"},a=void 0,o={id:"web/change-player-skin",title:"Change Player Skin",description:"Using this feature, users can change their Minecraft player skin from the MineTrax website. This feature requires SkinsRestorer plugin to be installed on your Minecraft server.",source:"@site/docs/web/change-player-skin-feature.md",sourceDirName:"web",slug:"/web/change-player-skin",permalink:"/docs/web/change-player-skin",draft:!1,unlisted:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/edit/main/docs/web/change-player-skin-feature.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110,title:"Change Player Skin",id:"change-player-skin"},sidebar:"tutorialSidebar",previous:{title:".env Config File",permalink:"/docs/web/dot-env-file"},next:{title:"Hero Particle Effects",permalink:"/docs/web/hero-particle-effects"}},l={},c=[{value:"Enable Skin Change Feature",id:"enable-skin-change-feature",level:2},{value:"Per Server Configuration",id:"per-server-configuration",level:2},{value:"Permissions",id:"permissions",level:2}];function h(e){const n={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Using this feature, users can change their Minecraft player skin from the MineTrax website. This feature requires SkinsRestorer plugin to be installed on your Minecraft server."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"ChangePlayerSkin",src:i(6777).A+"",width:"1878",height:"897"})}),"\n",(0,r.jsx)(n.h2,{id:"enable-skin-change-feature",children:"Enable Skin Change Feature"}),"\n",(0,r.jsxs)(n.p,{children:["This feature is enabled by default. You can change as per your need by setting the ",(0,r.jsx)(n.code,{children:"PLAYER_SKIN_CHANGER_ENABLED"})," environment variable to ",(0,r.jsx)(n.code,{children:"true"})," or ",(0,r.jsx)(n.code,{children:"false"})," in the ",(0,r.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title=".env"',children:"PLAYER_SKIN_CHANGER_ENABLED=true\n\n# Cooldown in seconds for changing skin. Default to 60 seconds. (won't apply to staff members)\nPLAYER_SKIN_CHANGER_COOLDOWN_IN_SECONDS=60\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Set it to ",(0,r.jsx)(n.code,{children:"false"})," to globally disable this feature for all servers."]}),"\n",(0,r.jsx)(n.h2,{id:"per-server-configuration",children:"Per Server Configuration"}),"\n",(0,r.jsx)(n.p,{children:"MineTrax let you configure the skin change feature for each server individually. While creating or editing a server, you can enable or disable the skin change feature for that server."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://i.imgur.com/tbu3AaO.png",alt:"Img"})}),"\n",(0,r.jsx)(n.p,{children:"When player changes their skin from the website, it will be trigger on all the servers where the skin change feature is enabled."}),"\n",(0,r.jsx)(n.h2,{id:"permissions",children:"Permissions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"change any_player_skin"})," - Give this permission to the staff role to allow them to change any player's skin."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},6777:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/change-player-skin-7efda047b3ebd47b3e95fbdac24cd83a.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var r=i(6540);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);