import{_ as P,d as _}from"./_plugin-vue_export-helper.0b1e219d.js";import{i as S,r as g,o as p,a as y,b as l,c as t,d as o,F as m,e as b,t as h,p as $,f as v,n as A,g as d}from"./index.e8f9b88f.js";const x=e=>($("data-v-40e795fc"),e=e(),v(),e),k=x(()=>o("h2",null,"Plugin Collidable",-1)),C=x(()=>o("p",null," \u975E\u9810\u8A2D\u3002\u5EFA\u7ACB\u4E00\u500B\u78B0\u649E\u5340\u57DF\uFF0Cdraggable \u5143\u7D20\u7121\u6CD5\u62D6\u66F3\u5230\u9019\u88E1\u3002\u6709\u649E\u9032\u4F86\u8DDF\u649E\u51FA\u53BB\u4E8B\u4EF6(collidable:in, collidable:out) ",-1)),R={class:"flex gap-2 PluginCollidable py-2"},q=x(()=>o("div",{class:"other-list bg-red-500 mt-5 p-5"},"collidable",-1)),D={__name:"PluginCollidable",setup(e){const a=S("$log"),r=g(["item1","item2","item3","item4","item5"]);let s=null;return p(()=>{s=new _.exports.Sortable(document.querySelectorAll("ul.PluginCollidable"),{draggable:"li",collidables:".other-list",plugins:[_.exports.Plugins.Collidable],classes:{"draggable:over":["draggable--over"]}}),s.on("collidable:in",n=>a("collidable:in",n)),s.on("collidable:out",n=>a("collidable:out",n))}),y(()=>{s.destroy()}),(n,c)=>(l(),t("section",null,[k,C,o("ul",R,[(l(!0),t(m,null,b(r,(i,u)=>(l(),t("li",{key:u,class:"cursor-pointer p-1"},h(i),1))),128))]),q]))}},F=P(D,[["__scopeId","data-v-40e795fc"]]);const f=e=>($("data-v-95c38236"),e=e(),v(),e),B=f(()=>o("h2",null,"Plugin ResizeMirror",-1)),V=f(()=>o("p",null,"Mirror \u5C3A\u5BF8\u8B8A\u5316",-1)),N={class:"PluginResizeMirror py-2"},j={class:"PluginResizeMirror py-2 mt-4"},E={__name:"PluginResizeMirror",setup(e){S("$log");const a=g(["item1","item2","item3","item4","item5"]),r=g(["item6","item7","item8","item9","item10"]);let s=null;return p(()=>{s=new _.exports.Sortable(document.querySelectorAll("ul.PluginResizeMirror"),{draggable:"li",plugins:[_.exports.Plugins.ResizeMirror],classes:{"draggable:over":["draggable--over"]}})}),y(()=>{s.destroy()}),(n,c)=>(l(),t("section",null,[B,V,o("ul",N,[(l(!0),t(m,null,b(a,(i,u)=>(l(),t("li",{key:u,class:"cursor-pointer p-1"},h(i),1))),128))]),o("ul",j,[(l(!0),t(m,null,b(r,(i,u)=>(l(),t("li",{key:u,class:"cursor-pointer p-1"},h(i),1))),128))])]))}},L=P(E,[["__scopeId","data-v-95c38236"]]);const w=e=>($("data-v-6c5b30c5"),e=e(),v(),e),U=w(()=>o("h2",null,"Plugin Snappable",-1)),G=w(()=>o("p",null,"Mirror \u5FEB\u901F\u79FB\u52D5\u5230\u53EF\u653E\u7F6E\u5340\u57DF",-1)),H={class:"PluginSnappable py-2"},J={__name:"PluginSnappable",setup(e){const a=S("$log"),r=g(["item1","item2","item3","item4","item5"]);let s=null;return p(()=>{s=new _.exports.Sortable(document.querySelectorAll("ul.PluginSnappable"),{draggable:"li",plugins:[_.exports.Plugins.Snappable],classes:{"draggable:over":["draggable--over"]}}),s.on("snap:in",n=>a("snap:in",n)),s.on("snap:out",n=>a("snap:out",n))}),y(()=>{s.destroy()}),(n,c)=>(l(),t("section",null,[U,G,o("ul",H,[(l(!0),t(m,null,b(r,(i,u)=>(l(),t("li",{key:`snap${i}`,class:"cursor-pointer p-1"},h(i),1))),128))])]))}},K=P(J,[["__scopeId","data-v-6c5b30c5"]]);const I=e=>($("data-v-683afdd6"),e=e(),v(),e),O=I(()=>o("h2",null,"Plugin PluginSwapAnimation",-1)),Q=I(()=>o("p",null,"\u975E\u9810\u8A2D\u3002\u4EA4\u63DB\u6642\u6709\u52D5\u756B\uFF08\u770B\u4E0D\u51FA\u4F86\uFF0C\u53EA\u6709\u6296\u52D5\u800C\u5DF2\uFF09\u3002\u76EE\u524D\u53EA\u652F\u63F4 sortable",-1)),T={class:"PluginSwapAnimation py-2"},W={__name:"PluginSwapAnimation",setup(e){const a=S("$log"),r=[...Array(15)].map((c,i)=>`item${i+1}`),s=g(r);let n=null;return p(()=>{n=new _.exports.Sortable(document.querySelectorAll("ul.PluginSwapAnimation"),{draggable:"li",classes:{"draggable:over":["draggable--over"]},swapAnimation:{duration:1e3,easingFunction:"ease-out-in",horizontal:!1},plugins:[_.exports.Plugins.SwapAnimation]}),n.on("snap:in",c=>a("snap:in",c)),n.on("snap:out",c=>a("snap:out",c)),console.log("sortable",n)}),y(()=>{n.destroy()}),(c,i)=>(l(),t("section",null,[O,Q,o("ul",T,[(l(!0),t(m,null,b(s,(u,z)=>(l(),t("li",{key:u,class:A(["cursor-pointer p-1 bg-orange-500",{"bg-purple-500":z%3===0}])},h(u),3))),128))])]))}},X=P(W,[["__scopeId","data-v-683afdd6"]]);const M=e=>($("data-v-c6eeb4eb"),e=e(),v(),e),Y=M(()=>o("h2",null,"Plugin PluginSortAnimation",-1)),Z=M(()=>o("p",null," \u975E\u9810\u8A2D\u3002\u4EA4\u63DB\u6642\u6709\u52D5\u756B\uFF08\u770B\u4E0D\u51FA\u4F86\uFF0C\u53EA\u6709\u6296\u52D5\u800C\u5DF2\uFF09\u3002\u76EE\u524D\u53EA\u652F\u63F4 sortable\u3002\u652F\u63F4\u5782\u76F4\u8207\u6C34\u5E73 grid layout ",-1)),ee={class:"PluginSortAnimation py-2"},le={__name:"PluginSortAnamation",setup(e){S("$log");const a=[...Array(15)].map((n,c)=>`item${c+1}`),r=g(a);let s=null;return p(()=>{s=new _.exports.Sortable(document.querySelectorAll("ul.PluginSortAnimation"),{draggable:"li",classes:{"draggable:over":["draggable--over"]},sortAnimation:{duration:200,easingFunction:"ease-in-out"},plugins:[_.exports.Plugins.SortAnimation]})}),y(()=>{s.destroy()}),(n,c)=>(l(),t("section",null,[Y,Z,o("ul",ee,[(l(!0),t(m,null,b(r,(i,u)=>(l(),t("li",{key:`snap${i}`,class:A(["cursor-pointer p-1 bg-orange-500",{"bg-gray-500":u%3===0}])},h(i),3))),128))])]))}},te=P(le,[["__scopeId","data-v-c6eeb4eb"]]),ne={class:"mb-20"},oe={__name:"demoIndex",setup(e){return p(()=>{}),(a,r)=>(l(),t("section",ne,[d(F),d(L),d(K),d(X),d(te)]))}},se=o("h1",null,"Demo3Draggable",-1),re={__name:"Demo3PluginsView",setup(e){return p(()=>{}),(a,r)=>(l(),t("main",null,[se,d(oe)]))}};export{re as default};
