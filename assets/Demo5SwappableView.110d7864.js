import{_ as f,d as S}from"./_plugin-vue_export-helper.0b1e219d.js";import{i as h,r as u,o as _,a as x,b as a,c as t,d as o,F as d,e as i,t as m,p as y,f as D,g as b}from"./index.e8f9b88f.js";const w=s=>(y("data-v-49dcaa5d"),s=s(),D(),s),v=w(()=>o("h2",null,"Swappable Default",-1)),I=w(()=>o("p",null,"\u53EF\u4EA4\u63DB\u3002\u76F4\u63A5\u4E92\u63DB\u5143\u7D20\u4F4D\u7F6E",-1)),$={class:"flex gap-2 Swappable py-2"},k={class:"flex gap-2 Swappable py-2 mt-10"},B={__name:"SwappableDefault",setup(s){const p=h("$log"),n=u(["item1","item2","item3","item4","item5"]),g=u(["item6","item7","item8","item9","item10"]);let l=null;return _(()=>{l=new S.exports.Swappable(document.querySelectorAll("ul.Swappable"),{draggable:"li",classes:{"draggable:over":["draggable--over"]}}),l.on("swappable:start",e=>p("swappable:start",e)),l.on("swappable:swap",e=>p("swappable:swap",e)),l.on("swappable:swapped",e=>p("swappable:swapped",e)),l.on("swappable:stop",e=>p("swappable:end",e))}),x(()=>{l.destroy()}),(e,j)=>(a(),t("section",null,[v,I,o("ul",$,[(a(!0),t(d,null,i(n,(r,c)=>(a(),t("li",{key:c,class:"cursor-pointer p-1"},m(r),1))),128))]),o("ul",k,[(a(!0),t(d,null,i(g,(r,c)=>(a(),t("li",{key:c,class:"cursor-pointer p-1"},m(r),1))),128))])]))}},V=f(B,[["__scopeId","data-v-49dcaa5d"]]),F={__name:"demoIndex",setup(s){return _(()=>{}),(p,n)=>(a(),t("section",null,[b(V)]))}},N=o("h1",null,"Demo5Draggable",-1),E={__name:"Demo5SwappableView",setup(s){return _(()=>{}),(p,n)=>(a(),t("main",null,[N,b(F)]))}};export{E as default};
