import{L as g,S as r,T as t,U as h,aP as p,W as s,h as d,a3 as y,a4 as f}from"./index.c216104a.js";var C=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:i}){const{proxy:{$q:o}}=f(),e=r(h,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(r(p,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const c=s(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const l=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return n.styleFn(a,l)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":o.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":o.screen.height-a+"px"}}),u=s(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>d("main",{class:u.value,style:c.value},y(i.default))}});export{C as Q};
