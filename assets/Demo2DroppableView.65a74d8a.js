import{d as s}from"./draggable.bundle.2aded1ab.js";import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{i as l,o,a as i,b as r,c as t,h as _,g as c,d as v}from"./index.efd2c409.js";const u=_('<h2 data-v-377464dc>Droppable Basic</h2><p data-v-377464dc> \u5EFA\u7ACB\u65BC Draggable \u4E4B\u4E0A\u3002\u53EF\u964D\u8089\u7684\u5143\u7D20\u3002\u6709\u4E8B\u4EF6 droppable:start, dropped, returned, stop </p><div class="container" data-v-377464dc><div class="dropzone draggable-dropzone--occupied" data-v-377464dc><div class="item" data-v-377464dc>A</div></div><div class="dropzone draggable-dropzone--occupied" data-v-377464dc><div class="item" data-v-377464dc>B</div></div><div class="dropzone draggable-dropzone--occupied" data-v-377464dc><div class="item" data-v-377464dc>C</div></div></div><div class="container mt-20" data-v-377464dc><div class="dropzone" data-v-377464dc></div><div class="dropzone" data-v-377464dc></div></div>',4),b=[u],m={__name:"droppableDefault",setup(p){const d=l("$log");let a=null;return o(()=>{a=new s.exports.Droppable(document.querySelectorAll(".container"),{draggable:".item",dropzone:".dropzone",classes:{"draggable:over":["draggable--over"]}}),a.on("droppable",e=>d("droppable",e)),a.on("droppable:start",e=>d("droppable:start",e)),a.on("droppable:dropped",e=>d("droppable:dropped",e)),a.on("droppable:returned",e=>d("droppable:returned",e)),a.on("droppable:stop",e=>d("droppable:stop",e))}),i(()=>{a.destroy()}),(e,h)=>(r(),t("section",null,b))}},g=n(m,[["__scopeId","data-v-377464dc"]]),f={__name:"demoIndex",setup(p){return o(()=>{}),(d,a)=>(r(),t("section",null,[c(g)]))}},D=v("h1",null,"Demo2Draggable",-1),$={__name:"Demo2DroppableView",setup(p){return o(()=>{}),(d,a)=>(r(),t("main",null,[D,c(f)]))}};export{$ as default};
