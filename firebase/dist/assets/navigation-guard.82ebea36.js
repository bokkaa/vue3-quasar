import{b as a,s as u,u as o}from"./index.c216104a.js";function s(t){const{isAuthenticated:e}=u(o());if(t.matched.some(r=>r.meta.requiresAuth)&&!e.value){alert("\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.");return}return!0}var n=a(async({app:t,router:e})=>{e.beforeEach(s)});export{n as default};
