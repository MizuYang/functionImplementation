import{r as p,j as h,o as l,c as a,b as i,F as u,h as m,k as v,n as g,t as _}from"./index-29a5d015.js";const q={class:"mb-10 px-15"},k={class:"row row-cols-10 g-5"},T=["onClick"],$={class:"px-15"},C=["id"],S={__name:"錨點跳轉",setup(w){const o=p([]),n=p("");h(()=>{o.value.length=100,x()});function x(){for(let s=0;s<o.value.length;s++)o.value[s]={title:`title-${s+1}`,id:String(Math.random()).split(".")[1]}}function f(s){const t=document.querySelector(`#title-${s.id}`),{top:e,height:r}=t.getBoundingClientRect(),c=e+r/2,y=document.querySelector("#nav").clientHeight,b=c-y/4;n.value=s.id,d(b)}function d(s){window.scrollTo(0,s)}return(s,t)=>(l(),a(u,null,[i("div",q,[t[1]||(t[1]=i("p",{class:"text-20 py-5"},"錨點",-1)),i("ul",k,[(l(!0),a(u,null,m(o.value,(e,r)=>(l(),a("li",{key:`a-link-${e.id}`,class:"col"},[i("a",{href:"javascript:;",class:g(["d- text-light p-2",n.value===e.id?"active-style":"default-style"]),onClick:c=>f(e)},_(r+1),11,T)]))),128))])]),t[4]||(t[4]=i("h1",{class:"text-30 ps-15"},"文章列表",-1)),i("ul",$,[(l(!0),a(u,null,m(o.value,e=>(l(),a("li",{key:`id-${e.id}`,class:g(["my-5 p-3",{"active-style":n.value===e.id}])},[i("h2",{class:"text-20 fw-bold-9",id:`title-${e.id}`},_(e.title),9,C),t[2]||(t[2]=i("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum dolores reprehenderit. Esse autem ab iusto, sint dolorum aliquid vitae voluptatibus rem accusantium praesentium pariatur eligendi veritatis quidem? Vitae, eum. Fugit adipisci repellat quos maiores, assumenda est vero aliquam quas, consequatur sint cupiditate ut, quibusdam quod libero. Temporibus excepturi ad error voluptates ipsam, commodi voluptas dolorem deserunt facere cum voluptatem. ",-1))],2))),128))]),i("a",{href:"javascript:;",class:"btn-top text-light border rounded-pill p-5 px-7",onClick:t[0]||(t[0]=e=>d(0))},t[3]||(t[3]=[v(" 電梯 "),i("br",null,null,-1),v(" 向上 ")]))],64))}};export{S as default};
