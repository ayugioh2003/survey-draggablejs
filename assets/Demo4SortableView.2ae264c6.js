import{_ as S,d as h}from"./_plugin-vue_export-helper.0b1e219d.js";import{i as x,r as i,o as u,a as y,b as t,c as o,d as l,F as p,e as d,t as m,p as D,f as v,g as b}from"./index.e8f9b88f.js";const g=s=>(D("data-v-6358a03f"),s=s(),v(),s),I=g(()=>l("h2",null,"Sortable Default",-1)),$=g(()=>l("p",null,"\u53EF\u6392\u5E8F",-1)),k={class:"flex gap-2 Sortable py-2"},w={class:"flex gap-2 Sortable py-2 mt-10"},B={__name:"SortableDefault",setup(s){const a=x("$log"),n=i(["item1","item2","item3","item4","item5"]),f=i(["item6","item7","item8","item9","item10"]);let r=null;return u(()=>{r=new h.exports.Sortable(document.querySelectorAll("ul.Sortable"),{draggable:"li",classes:{"draggable:over":["draggable--over"]}}),r.on("sortable:start",e=>a("sortable:start",e)),r.on("sortable:sort",e=>a("sortable:sort",e)),r.on("sortable:sorted",e=>a("sortable:sorted",e)),r.on("sortable:stop",e=>a("sortable:end",e))}),y(()=>{r.destroy()}),(e,j)=>(t(),o("section",null,[I,$,l("ul",k,[(t(!0),o(p,null,d(n,(c,_)=>(t(),o("li",{key:_,class:"cursor-pointer p-1"},m(c),1))),128))]),l("ul",w,[(t(!0),o(p,null,d(f,(c,_)=>(t(),o("li",{key:_,class:"cursor-pointer p-1"},m(c),1))),128))])]))}},V=S(B,[["__scopeId","data-v-6358a03f"]]),F={__name:"demoIndex",setup(s){return u(()=>{}),(a,n)=>(t(),o("section",null,[b(V)]))}},N=l("h1",null,"Demo4Draggable",-1),E={__name:"Demo4SortableView",setup(s){return u(()=>{}),(a,n)=>(t(),o("main",null,[N,b(F)]))}};export{E as default};