import c from"./ContentRenderer.d86e70c0.js";import{z as m,o as a,v as s,U as e,c as i,a3 as l,V as n,S as u}from"./entry.e71c7b32.js";const y={class:"h-full max-w-[780px] mx-5 md:ml-[60px] lg:ml-[80px] md:mr-0 mt-[125px] pb-[160px]"},d={class:"item xs-block xs-full-height",a:""},h={class:"mb-10"},x={class:"main-title"},_={class:"text-sm text-gray-600"},b={key:0,class:"text-sm text-gray-600"},v={__name:"EntryLayout",props:{entry:{type:Object,required:!0}},setup(t){return(f,g)=>{const o=m("lazy-featured-image"),r=c;return a(),s("article",y,[e("div",d,[t.entry.thumbnail?(a(),i(o,{key:0,title:t.entry.title,thumbnail:t.entry.thumbnail},null,8,["title","thumbnail"])):l("",!0),e("header",h,[e("h1",x,n(t.entry.title),1),e("span",_,n(t.entry.date),1),e("div",null,[t.entry.author?(a(),s("span",b," By: "+n(t.entry.author),1)):l("",!0)])]),u(r,{value:t.entry,class:"prose lg:prose-xl"},null,8,["value"])])])}}};export{v as _};