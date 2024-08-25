"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[2164],{5314:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>t,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var r=s(4848),i=s(8453);const l={},t=void 0,c={id:"Objects/TemperatureSensor",title:"TemperatureSensor",description:"When the surrounding temperature is within a defined range, it will send trigger signals similar to a button.",source:"@site/docs/Objects/TemperatureSensor.md",sourceDirName:"Objects",slug:"/Objects/TemperatureSensor",permalink:"/Pilot.lua-Luau-LSP/docs/Objects/TemperatureSensor",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"TemperatureGate",permalink:"/Pilot.lua-Luau-LSP/docs/Objects/TemperatureGate"},next:{title:"Tetrahedron",permalink:"/Pilot.lua-Luau-LSP/docs/Objects/Tetrahedron"}},h={},o=[{value:"Methods",id:"methods",level:2},{value:"Configurables",id:"configurables",level:2},{value:"Properties",id:"properties",level:2},{value:"Events",id:"events",level:2}];function d(e){const n={a:"a",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"When the surrounding temperature is within a defined range, it will send trigger signals similar to a button."}),"\n",(0,r.jsxs)(n.p,{children:['For example, if the current temperature is 1100 and the temperature range is "1000',":inf",'", then the sensor will send a signal.']}),"\n",(0,r.jsx)(n.p,{children:"This is very useful for creating smart cooling systems for a vehicle or reactor, preventing overheating from occuring."}),"\n",(0,r.jsx)(n.p,{children:'If you want the temperature sensor to trigger outside of a certain range, take the inverse of the range.\nFor example, "-inf:999" would trigger when the temperature is within that range.'}),"\n",(0,r.jsx)(n.p,{children:"Connecting the TemperatureSensor to a reactor will use the reactor's temperature instead of the surrounding temperature."}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"undocumented"})," GetTemp"]}),"\n"]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:["Inherited from ",(0,r.jsx)(n.a,{href:"/docs/Objects/PilotObject",children:"PilotObject"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["IsDestroyed() \u2192 ",(0,r.jsx)(n.em,{children:"boolean"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Returns a boolean as to whether or not the object is destroyed."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["GetConfigurables() \u2192 ",(0,r.jsx)(n.em,{children:"{ [string]: ConfigurableData }"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Gets information about the configurable properties of the object."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["GetComponent(",(0,r.jsx)(n.em,{children:"string"})," componentName)"]}),"\n",(0,r.jsxs)(n.li,{children:["ListComponents() \u2192 ",(0,r.jsx)(n.em,{children:"{ string }"})]}),"\n",(0,r.jsxs)(n.li,{children:["HasPermission(",(0,r.jsx)(n.em,{children:"Permission"})," permission) \u2192 ",(0,r.jsx)(n.em,{children:"boolean"}),",","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Returns a boolean as to whether or not the microcontroller has permission to do the specified action."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["CanUninstallComponent(",(0,r.jsx)(n.em,{children:"string"})," componentName) \u2192 ",(0,r.jsx)(n.em,{children:"boolean"}),","]}),"\n",(0,r.jsxs)(n.li,{children:["HasComponent(",(0,r.jsx)(n.em,{children:"string"})," componentName) \u2192 ",(0,r.jsx)(n.em,{children:"boolean"}),","]}),"\n",(0,r.jsxs)(n.li,{children:["CanInstallComponent(",(0,r.jsx)(n.em,{children:"string"})," componentName) \u2192 ",(0,r.jsx)(n.em,{children:"boolean"}),","]}),"\n",(0,r.jsxs)(n.li,{children:["GetShape() \u2192 ",(0,r.jsx)(n.em,{children:"string?"})]}),"\n",(0,r.jsxs)(n.li,{children:["GetMethods() \u2192 ",(0,r.jsx)(n.em,{children:"{ [string]: MethodData }"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Gets information about the methods of the object."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["IsGrounded() \u2192 ",(0,r.jsx)(n.em,{children:"boolean"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Returns a boolean as to whether or not the object is grounded."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["GetOwnerId() \u2192 ",(0,r.jsx)(n.em,{children:"number"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Returns who locked the part if the part is locked, otherwise returns who created the part."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["GetEvents() \u2192 ",(0,r.jsx)(n.em,{children:"{ string }"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"undocumented"})," Click"]}),"\n"]}),(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Deprecated"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["GetColor() \u2192 ",(0,r.jsx)(n.em,{children:"Color3"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Gets the color of the object."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["GetNameOfOwnerAsync() \u2192 ",(0,r.jsx)(n.em,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:["GetSize() \u2192 ",(0,r.jsx)(n.em,{children:"Vector3"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Gets the size of the object."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["GetDurability() \u2192 ",(0,r.jsx)(n.em,{children:"number"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Gets the current durability of the object."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["GetTemperature() \u2192 ",(0,r.jsx)(n.em,{children:"number"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Gets the temperature of the object."}),"\n"]}),"\n"]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"configurables",children:"Configurables"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"NumberRange"})," TemperatureRange","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The range of temperatures (\xb0F) which this sensor will trigger at."}),"\n",(0,r.jsx)(n.li,{children:"Default: [140]"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:["Inherited from ",(0,r.jsx)(n.a,{href:"/docs/Objects/PilotObject",children:"PilotObject"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"string"})," GUID","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The unique GUID of the object"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"CFrame"})," CFrame","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The current CFrame of the object."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"number"})," Mass","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The current mass of the individual object."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"number"})," AssemblyMass","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The mass of the object's assembly."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Vector3"})," AssemblyLinearVelocity","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The velocity of the object's assembly."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"number"})," Health","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The current health of the object"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"string"})," ClassName","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The class name of the object"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Vector3"})," Orientation","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The current orientation of the object."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Vector3"})," AssemblyCenterOfMass","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The center of mass of the object's assembly."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"number"})," CreatedBy","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The user ID of the player who created the object."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"number"})," Heat","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The current heat of the object."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Enum.Material"})," Material","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The material of the object."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"number?"})," PartLocked","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The user ID of the player who locked the object."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Vector3"})," Size","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The current size of the object."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"boolean"})," Anchored","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Whether or not the object is anchored."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Color3"})," Color","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The current color of the object."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"number"})," Temperature","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The current heat/temperature of the object."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"number"})," Durability","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The maximum health of the object"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Vector3"})," Position","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The current position of the object."}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Loop(",(0,r.jsx)(n.em,{children:"number"})," deltaTime)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fires when the object is updated by the game loop."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:["Inherited from ",(0,r.jsx)(n.a,{href:"/docs/Objects/PilotObject",children:"PilotObject"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Destroyed()","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fires when the object is destroyed."}),"\n"]}),"\n"]}),"\n"]})]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var r=s(6540);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);