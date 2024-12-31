import{_ as b,u as y,r as c,o,c as i,a as t,t as d,n as l,b as S,F as u,d as A,e as f,f as e,T as L}from"./index-DjG0-Hhc.js";const v=["href"],C={__name:"ArchiveProject",props:{name:String,year:String,techs:Array,Link:String,background:String},setup(r){const s=r,{isMobile:g}=y(),n=c("col padding"),p=c("col head padding"),h=c("padding"),k=c("tech-container col-tech padding");return s.background&&(n.value="col padding "+s.background,p.value="col head padding "+s.background,h.value="padding "+s.background,k.value="tech-container col-tech padding "+s.background),(D,N)=>(o(),i(u,null,[t("td",{class:l(n.value)},d(r.year),3),t("th",{class:l(p.value)},d(r.name),3),S(g)?f("",!0):(o(),i("td",{key:0,class:l(k.value)},[(o(!0),i(u,null,A(r.techs,m=>(o(),i("span",{key:m,class:"tech"},d(m),1))),128))],2)),t("td",{class:l(h.value)},[t("a",{href:r.Link,target:"_blank"}," Link ",8,v)],2)],64))}},a=b(C,[["__scopeId","data-v-c62a5499"]]),_={class:"grid-container"},P={class:"table"},R={class:"thead"},V={key:0},J={class:"tbody"},I={__name:"ArchiveView",setup(r){const{isMobile:s}=y();return(g,n)=>(o(),i(u,null,[e(L,{title:"All Projects",left:""}),t("div",_,[t("table",P,[t("thead",R,[t("tr",null,[n[0]||(n[0]=t("th",null,"Year",-1)),n[1]||(n[1]=t("th",{class:"h-project"},"Project",-1)),S(s)?f("",!0):(o(),i("th",V,"Built with")),n[2]||(n[2]=t("th",null,"Link",-1))])]),t("tbody",J,[t("tr",null,[e(a,{background:"",year:"2024",name:"Deep space theme",Link:"https://github.com/karim-gontor/Deep-Space-Theme/",techs:["Vs Code","Javascript","CSS"]})]),t("tr",null,[e(a,{background:"bg-soft",year:"2024",name:"Memocards",Link:"#",techs:["Vue","Tailwind","Express.js","Node.js","PostgreSQL"]})]),t("tr",null,[e(a,{background:"",year:"2024",name:"Client System",Link:"https://github.com/karim-gontor/Client-System-DAO-CRUD-Simple",techs:["JAVA"]})]),t("tr",null,[e(a,{background:"bg-soft",year:"2024",name:"CRUD SpringBoot",Link:"https://github.com/karim-gontor/CRUD-System-Spring-SpringBoot",techs:["JAVA","SpringBoot"]})]),t("tr",null,[e(a,{background:"",year:"2024",name:"Desktop Client System",Link:"https://github.com/karim-gontor/Desktop-Client-System-JAVA-SWING",techs:["JAVA","SWING","SPRING"]})]),t("tr",null,[e(a,{background:"bg-soft",year:"2024",name:"Client System w/ Primefaces",Link:"https://github.com/karim-gontor/Client-System-PRIMEFACES-SPRING",techs:["JAVA","Primefaces","SPRING"]})]),t("tr",null,[e(a,{background:"",year:"2024",name:"Desktop Task List",Link:"https://github.com/karim-gontor/Desktop-Task-List-JAVAFX-SPRING",techs:["JAVA","JAVAFX","SPRING"]})]),t("tr",null,[e(a,{background:"bg-soft",year:"2022",name:"CRM Clients App",Link:"https://reliable-valkyrie-b34511.netlify.app/",techs:["React","Javascript","Json-server","Tailwind"]})]),t("tr",null,[e(a,{background:"",year:"2022",name:"Spend Control",Link:"https://beautiful-paprenjak-3aaa26.netlify.app/",techs:["React","Javascript","Tailwind"]})]),t("tr",null,[e(a,{background:"bg-soft",year:"2022",name:"Pet Administrator",Link:"https://heroic-rabanadas-4fe1ac.netlify.app/",techs:["React","Javascript","Tailwind"]})]),t("tr",null,[e(a,{background:"",year:"2022",name:"Crypto Cotizator",Link:"https://subtle-meerkat-46f7db.netlify.app/",techs:["React","Javascript","Tailwind","API"]})]),t("tr",null,[e(a,{background:"bg-soft",year:"2022",name:"Beer Project",Link:"https://github.com/Karim-aitt/beer-club",techs:["React","Bootstrap","Flask","SQLAlchemy","PostgreSQL"]})])])])])],64))}},j=b(I,[["__scopeId","data-v-6d87d1ed"]]);export{j as default};