"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[5661],{8489:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=t(4848),s=t(8453);const l={},o=void 0,r={id:"Objects/ComponentObject",title:"ComponentObject",description:"NOTEGetConfigurables() areSetConfigurable andGetObject() which returns nil when the component is deleted. Trying to call methods on a deleted component will produce warnings and return empty or nil data depending on the method. Components additionally do not utilize GUIDs in any way. Additionally, some events are always valid.",source:"@site/docs/Objects/ComponentObject.md",sourceDirName:"Objects",slug:"/Objects/ComponentObject",permalink:"/Pilot.lua-Luau-LSP/docs/Objects/ComponentObject",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"CombustionTurbine",permalink:"/Pilot.lua-Luau-LSP/docs/Objects/CombustionTurbine"},next:{title:"Cone",permalink:"/Pilot.lua-Luau-LSP/docs/Objects/Cone"}},c={},d=[{value:"Methods",id:"methods",level:2},{value:"Events",id:"events",level:2}];function a(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTE"}),": Component objects do NOT follow the same conventions as part objects and are not backwards compatible with the WoS part APIs. Things like ",(0,i.jsx)(n.code,{children:":GetConfigurables()"})," are ",(0,i.jsx)(n.code,{children:":ListConfigurables()"})," instead. Things like ",(0,i.jsx)(n.code,{children:"partObject.ConfigName"})," (setting/getting) are ",(0,i.jsx)(n.code,{children:":SetConfigurable"})," and ",(0,i.jsx)(n.code,{children:":GetConfigurable"})," respectively. Additionally, unlike part objects methods that involve the component's information can ",(0,i.jsx)(n.strong,{children:"never"})," be called if the component was deleted, with the ",(0,i.jsx)(n.strong,{children:"sole"})," exception being ",(0,i.jsx)(n.code,{children:":GetObject()"})," which returns ",(0,i.jsx)(n.code,{children:"nil"})," when the component is deleted. Trying to call methods on a deleted component will produce warnings and return empty or nil data depending on the method. Components additionally do not utilize GUIDs in any way. Additionally, some events are always valid."]}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ListEvents()"}),"\n",(0,i.jsx)(n.li,{children:"ListConfigurables()"}),"\n",(0,i.jsxs)(n.li,{children:["GetObject() \u2192 ",(0,i.jsx)(n.em,{children:"PilotObject"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Retrieves the part object the component is installed on."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["IsDestroyed() \u2192 ",(0,i.jsx)(n.em,{children:"boolean"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Returns whether or not the component is deleted."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["GetConfigurable(",(0,i.jsx)(n.em,{children:"string"})," configurableName) \u2192 ",(0,i.jsx)(n.em,{children:"any"}),",","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Retrieves a configuration."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Trigger()","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Emulates a trigger signal ",(0,i.jsx)(n.em,{children:"only"})," for the component."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"ListMethods()"}),"\n",(0,i.jsxs)(n.li,{children:["SetConfigurable(",(0,i.jsx)(n.em,{children:"string"})," configurableName, ",(0,i.jsx)(n.em,{children:"any"})," value)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sets a configuration."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click()","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Emulates a click ",(0,i.jsx)(n.em,{children:"only"})," for the component."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Uninstalled()","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fires when the component is uninstalled from whatever it's installed onto. You can check ",(0,i.jsx)(n.code,{children:":IsDestroyed()"})," here to see if it was deleted (Always valid)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Configured()","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fires when the component is configured (Always valid)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Installed()","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fires when the component is installed onto something (Always valid)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Triggered()","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fires when the object the component is on is triggered."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["OnClick(",(0,i.jsx)(n.em,{children:"number"})," userId)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fires when the object is clicked."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(6540);const s={},l=i.createContext(s);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);