"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8087],{7713:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=s(4848),i=s(8453);const l={},t=void 0,o={id:"Objects/ARCursor",title:"ARCursor",description:"Properties",source:"@site/docs/Objects/ARCursor.md",sourceDirName:"Objects",slug:"/Objects/ARCursor",permalink:"/Pilot.lua-Luau-LSP/docs/Objects/ARCursor",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"ARController",permalink:"/Pilot.lua-Luau-LSP/docs/Objects/ARController"},next:{title:"Aerogel",permalink:"/Pilot.lua-Luau-LSP/docs/Objects/Aerogel"}},c={},d=[{value:"Properties",id:"properties",level:2}];function h(e){const n={code:"code",em:"em",h2:"h2",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Vector3"})," WorldPosition","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The world position of the mouse cursor."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Vector3"})," Origin","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.code,{children:"CFrame"})," indicating where the mouse originated from. It is positioned at the camera and oriented toward the mouse's 3D position."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"number"})," UserId","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The user ID of the player."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"PilotObject"})," Target","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The PartObject that is being hovered over. You can call methods on this part!"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"boolean"})," Pressed","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A boolean for whether or not the mouse button is pressed."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"string"})," Player","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The name of the player the cursor is for."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Vector2"})," ScreenPosition","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The XY screen position of the mouse cursor."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"{ RightHand: CFrame, LeftHand: CFrame, Head: CFrame }"})," UserCFrames","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Contains ",(0,r.jsx)(n.code,{children:"Head"}),", ",(0,r.jsx)(n.code,{children:"LeftHand"}),", and ",(0,r.jsx)(n.code,{children:"RightHand"})," for VR."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"number"})," Y","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Y position of the cursor on the screen."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"number"})," X","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The X position of the cursor on the screen."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Vector3"})," VirtualWorldPosition","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The world position of the mouse cursor in the virtual 3D space."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"CFrame"})," Hit","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"CFrame"})," the user's mouse is located at."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Ray"})," UnitRay","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.code,{children:"Ray"})," directed toward the mouse's position in 3D space. It originates from the ",(0,r.jsx)(n.code,{children:"CFrame"})," of the camera. Like all unit rays, it has a magnitude of 1."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"BasePart"})," VirtualTarget","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The hovered part in the virtual 3D space."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Vector2"})," MouseDelta","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The current delta of the mouse for the frame that was sent."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"ARCamera"})," Camera","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The camera of the player associated with the mouse."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"undocumented"})," UserInput"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var r=s(6540);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);