"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[9967],{2581:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=i(4848),r=i(8453);const s={sidebar_position:20,title:"SMTP Configuration",id:"smtp-configuration"},o=void 0,a={id:"web/smtp-configuration",title:"SMTP Configuration",description:"By default MineTrax will try to send transactional emails via PHP mail, which might lead to various problems like ISP blocking, large droprate, email landing in spam., etc.",source:"@site/docs/web/smtp-configuration.md",sourceDirName:"web",slug:"/web/smtp-configuration",permalink:"/docs/web/smtp-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/edit/main/docs/web/smtp-configuration.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"SMTP Configuration",id:"smtp-configuration"},sidebar:"tutorialSidebar",previous:{title:"Localization",permalink:"/docs/web/localization"},next:{title:"Global Site Settings",permalink:"/docs/web/global-site-settings"}},l={},d=[];function c(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"By default MineTrax will try to send transactional emails via PHP mail, which might lead to various problems like ISP blocking, large droprate, email landing in spam., etc."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Transactional emails are the emails such as password resets, welcome email, opted in notification email, etc."})}),"\n",(0,t.jsx)(n.p,{children:"It is recommended to use a dedicated SMTP provider to do this job.\r\nFirstly you need to register at any SMTP providers and get your SMTP login details."}),"\n",(0,t.jsx)(n.p,{children:"Here are list of some free SMTP Providers:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://sendgrid.com/",children:"SendGrid"})," - 100 email a day free"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.sendinblue.com/",children:"SendInBlue"})," - 300 email a day free"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://elasticemail.com/",children:"ElasticEmail"})," - 100 email a day free"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.pepipost.com/",children:"Pepipost"})," - 100 email a day free"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://kinsta.com/blog/gmail-smtp-server/",children:"Gmail SMTP Server"})," - 500 email per hour"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://aws.amazon.com/ses/",children:"Amazon SES"})," - 62000 a month if sent from Amazon hosted server"]}),"\n",(0,t.jsx)(n.li,{children:'and various others you can find by googling "Free SMTP Providers"'}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["After you have register at any SMTP provider, you need to get your SMTP login details and then change the smtp credentials in the ",(0,t.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"MAIL_MAILER=smtp\r\nMAIL_HOST= your smtp provider host\r\nMAIL_PORT=your smtp provider port\r\nMAIL_USERNAME= your smtp username\r\nMAIL_PASSWORD= your smtp password\r\nMAIL_ENCRYPTION= encryption mode (tls, ssl, null)\r\nMAIL_FROM_ADDRESS=no-reply@your_domain.com\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example for Gmail:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"MAIL_MAILER=smtp\r\nMAIL_HOST=smtp.gmail.com\r\nMAIL_PORT=587\r\nMAIL_USERNAME=youremail@gmail.com\r\nMAIL_PASSWORD=password\r\nMAIL_ENCRYPTION=tls\r\nMAIL_FROM_ADDRESS=no-reply@yourdomain.com\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsx)(n.p,{children:"Emails are send in background via Queues.\r\nQueue are long running task and they don't pick up changes until restarted."}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"You must restart all queue workers after this change."})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd /var/www/minetrax\r\nphp artisan queue:restart\n"})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(6540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);