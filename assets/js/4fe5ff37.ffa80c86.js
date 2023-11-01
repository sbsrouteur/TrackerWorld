"use strict";(self.webpackChunkTraceAcrossTheWorld_com=self.webpackChunkTraceAcrossTheWorld_com||[]).push([[257],{1233:(e,t,a)=>{a.d(t,{Z:()=>A});var r=a(3366),o=a(7462),n=a(7294),s=a(6010),i=a(9766),l=a(4780),c=a(4867),u=a(3264),m=a(9628),p=a(9707),d=a(6842),k=a(5408),g=a(8700),h=a(5893);const v=["component","direction","spacing","divider","children","className","useFlexGap"],f=(0,d.Z)(),y=(0,u.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function N(e){return(0,m.Z)({props:e,name:"MuiStack",defaultTheme:f})}function b(e,t){const a=n.Children.toArray(e).filter(Boolean);return a.reduce(((e,r,o)=>(e.push(r),o<a.length-1&&e.push(n.cloneElement(t,{key:`separator-${o}`})),e)),[])}const x=({ownerState:e,theme:t})=>{let a=(0,o.Z)({display:"flex",flexDirection:"column"},(0,k.k9)({theme:t},(0,k.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const r=(0,g.hB)(t),o=Object.keys(t.breakpoints.values).reduce(((t,a)=>(("object"==typeof e.spacing&&null!=e.spacing[a]||"object"==typeof e.direction&&null!=e.direction[a])&&(t[a]=!0),t)),{}),n=(0,k.P$)({values:e.direction,base:o}),s=(0,k.P$)({values:e.spacing,base:o});"object"==typeof n&&Object.keys(n).forEach(((e,t,a)=>{if(!n[e]){const r=t>0?n[a[t-1]]:"column";n[e]=r}}));const l=(t,a)=>{return e.useFlexGap?{gap:(0,g.NA)(r,t)}:{"& > :not(style) ~ :not(style)":{margin:0,[`margin${o=a?n[a]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]}`]:(0,g.NA)(r,t)}};var o};a=(0,i.Z)(a,(0,k.k9)({theme:t},s,l))}return a=(0,k.dt)(t.breakpoints,a),a};var T=a(948),w=a(1657);const j=function(e={}){const{createStyledComponent:t=y,useThemeProps:a=N,componentName:i="MuiStack"}=e,u=t(x),m=n.forwardRef((function(e,t){const n=a(e),m=(0,p.Z)(n),{component:d="div",direction:k="column",spacing:g=0,divider:f,children:y,className:N,useFlexGap:x=!1}=m,T=(0,r.Z)(m,v),w={direction:k,spacing:g,useFlexGap:x},j=(0,l.Z)({root:["root"]},(e=>(0,c.Z)(i,e)),{});return(0,h.jsx)(u,(0,o.Z)({as:d,ownerState:w,ref:t,className:(0,s.Z)(j.root,N)},T,{children:f?b(y,f):y}))}));return m}({createStyledComponent:(0,T.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,w.Z)({props:e,name:"MuiStack"})}),A=j},3930:(e,t,a)=>{a.d(t,{Z:()=>c,b:()=>l});var r=a(6242),o=a(4267),n=a(3965),s=a(5861),i=a(7294);const l="https://sheets.googleapis.com/v4/spreadsheets/1FNX9RpTH7WgQKxqpfvGJ7koBMNxcFUtTRvzAIoD8iyI/values/TraceReelle!B:G/?key=AIzaSyCfXHtG7ylyNenz8ncsqAuS4njElL2dm68";function c(){const[e,t]=(0,i.useState)(null);return(0,i.useEffect)((()=>{fetch(l).then((e=>e.json())).then((e=>{let a={city:"john",country:"country",place:"Place"};a.city=e.values[1][0],a.country=e.values[1][1],a.place=e.values[1][2],a.city_accent=e.values[1][5],t(a)}))}),[]),i.createElement(i.Fragment,null,i.createElement(r.Z,{sx:{maxWidth:345}},i.createElement(n.Z,{component:"img",image:"../img/Etapes/"+e?.city+".jpg",alt:e?.city_accent,sx:{height:200,objectFit:"contain"}}),i.createElement(o.Z,null,i.createElement(s.Z,{gutterBottom:!0,variant:"h5",component:"div"},e?.city_accent),i.createElement(s.Z,{variant:"body2",color:"text.secondary"},e?.country,", ",e?.place))))}},5352:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=a(7462),o=(a(7294),a(3905)),n=(a(9960),a(1233)),s=a(3930);const i={},l=void 0,c={unversionedId:"Rules",id:"Rules",title:"Rules",description:"Acabaste de receber a mascote Trace. Por isso, junta-se \xe0 equipa TraceAcrossTheWorld para embarcar na louca aventura de o levar \xe0 volta do mundo!.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/Rules.mdx",sourceDirName:".",slug:"/Rules",permalink:"/docs/Rules",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Presentation",permalink:"/docs/Presentation"},next:{title:"TracePopup",permalink:"/docs/TracePopup"}},u={},m=[],p={toc:m},d="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("meta",{name:"viewport",content:"initial-scale=1, width=device-width"}),(0,o.kt)("div",{style:{width:"100%",margin:"0 auto",textAlign:"center"}},(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h1",{id:"as-regras"},"As regras"),(0,o.kt)("p",null,"Acabaste de receber a mascote Trace. Por isso, junta-se \xe0 equipa TraceAcrossTheWorld para embarcar na louca aventura de o levar ",(0,o.kt)("strong",{parentName:"p"},"\xe0 volta do mundo!"),"."),(0,o.kt)("p",null,"Aqui est\xe3o algumas regras para o ajudar a descobrir como nos pode ajudar!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"O ",(0,o.kt)("strong",{parentName:"li"},"pr\xf3ximo destino")," do Trace \xe9 :")),(0,o.kt)("br",null),(0,o.kt)("div",{className:"text-center",style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"5vh"}},(0,o.kt)("div",null,(0,o.kt)(s.Z,{mdxType:"NextCity"}))),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Acha que vai seguir na dire\xe7\xe3o certa nos pr\xf3ximos dias? ",(0,o.kt)("strong",{parentName:"li"},"Mant\xe9m a Trace contigo")," e leva-a para a frente o melhor que puderes.\nN\xe3o importa se n\xe3o se chega exatamente ao pr\xf3ximo destino. O importante \xe9 ",(0,o.kt)("strong",{parentName:"li"},"fazer com que a Trace avance na dire\xe7\xe3o certa."),"  ")),(0,o.kt)("p",null,"Mesmo alguns quil\xf3metros s\xe3o uma grande ajuda para o Trace!\nNo caminho, seria \xf3timo se pudesses tirar ",(0,o.kt)("strong",{parentName:"p"},"uma fotografia ou fazer um v\xeddeo de ti pr\xf3prio com a mascote")," Trace em frente a um local de que gostes particularmente e que gostarias de nos mostrar!\nE lembrem-se: ",(0,o.kt)("strong",{parentName:"p"},"Trace n\xe3o voa!")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Achas que n\xe3o podes ajudar a Trace a seguir em frente? N\xe3o entrem em p\xe2nico! Passar diretamente \xe0 fase seguinte.")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("img",{src:"/img/Mascotte/Resize/lama-with-friends.svg",alt:"Trace Mascot",width:"300",height:"300"})),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Agora \xe9 altura de ",(0,o.kt)("strong",{parentName:"p"},"passar o testemunho a algu\xe9m")," que conhece e que estar\xe1 na dire\xe7\xe3o certa para ",(0,o.kt)("strong",{parentName:"p"},"levar o Trace ao seu pr\xf3ximo destino."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"N\xe3o conheces ningu\xe9m que nos possa ajudar? Existem tr\xeas op\xe7\xf5es"))),(0,o.kt)("br",null),(0,o.kt)(n.Z,{spacing:2,alignItems:"center",mdxType:"Stack"},(0,o.kt)("div",{className:"contour-ombre",style:{width:"100%",textAlign:"center"}},"Contactar o grupo  ",(0,o.kt)("a",{href:"https://chat.whatsapp.com/FKwW0q23yVk3OdKNKAxGnE",target:"_blank",rel:"noopener noreferrer"},"WhatsApp"),". ",(0,o.kt)("br",null)," Talvez possamos ajud\xe1-lo a encontrar algu\xe9m pr\xf3ximo de si para o ajudar a avan\xe7ar com a Trace."),(0,o.kt)("div",{className:"contour-ombre",style:{width:"100%",textAlign:"center"}},"Dirija-se \xe0 ",(0,o.kt)("a",{href:"https://www.hostelworld.com/",target:"_blank",rel:"noopener noreferrer"},"pousada de juventu")," de mais pr\xf3xima e explique o projeto \xe0s pessoas que l\xe1 se encontram. ",(0,o.kt)("br",null)," Haver\xe1 certamente viajantes interessados em participar nesta aventura!"),(0,o.kt)("div",{className:"contour-ombre",style:{width:"100%",textAlign:"center"}},"Volte alguns quil\xf3metros atr\xe1s para encontrar algu\xe9m que possa estar interessado! \xc9 melhor recuar para passar o testemunho do que parar!")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Quando passares a mascote, n\xe3o te esque\xe7as de a dar a ",(0,o.kt)("strong",{parentName:"p"},"algu\xe9m motivado pelo projeto")," e de lhe mostrar este s\xedtio Web com todas as explica\xe7\xf5es, para que ele tenha todas as informa\xe7\xf5es necess\xe1rias para continuar a aventura!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Antes de partirem, ",(0,o.kt)("strong",{parentName:"p"},"tirem uma fotografia de voc\xeas os dois com a mascote")," e enviem-na para n\xf3s ",(0,o.kt)("a",{href:"https://www.instagram.com/traceacrosstheworld/",target:"_blank",rel:"noopener noreferrer"},"aqui"),"!"))),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("img",{src:"/img/Mascotte/Resize/lamaoncomputerinstagram.svg",alt:"Instagram Mascot",width:"300",height:"300"})),(0,o.kt)("h2",{style:{textAlign:"center"}},"Casos especiais"),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"O Trace optou por ",(0,o.kt)("strong",{parentName:"p"},"n\xe3o voar")," para esta viagem. Para atravessar os mares, \xe9 preciso encontrar um marinheiro dedicado no porto mais pr\xf3ximo!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Em caso de d\xfavidas, n\xe3o hesite em enviar um e-mail para o endere\xe7o de contacto (",(0,o.kt)("a",{parentName:"p",href:"mailto:traceacrosstheworld@gmail.com"},"traceacrosstheworld@gmail.com"),") ou em enviar uma mensagem para o ",(0,o.kt)("a",{href:"https://chat.whatsapp.com/FKwW0q23yVk3OdKNKAxGnE",target:"_blank",rel:"noopener noreferrer"},"WhatsApp")," do projeto !")))))}k.isMDXComponent=!0}}]);