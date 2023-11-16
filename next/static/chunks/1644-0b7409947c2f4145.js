"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1644],{4769:function(e,s,r){r.r(s),r.d(s,{default:function(){return i}});var a=r(9268);function i(e){let{children:s,className:r,loading:i,...l}=e;return(0,a.jsx)("button",{...l,disabled:i||l.disabled,className:"rounded-md bg-primary px-3 py-3  ".concat(r),children:i?(0,a.jsxs)("div",{className:"flex items-center justify-center gap-4",children:[(0,a.jsx)("div",{className:"h-6 w-6 animate-spin rounded-full border-2 border-b-white border-l-white border-t-white"}),(0,a.jsx)("span",{children:"Loading..."})]}):s})}},9510:function(e,s,r){r.r(s);var a=r(9268),i=r(6006);s.default=e=>{let{children:s}=e,[r,l]=(0,i.useState)(!1);return((0,i.useEffect)(()=>(l(!0),()=>{l(!1)}),[]),r)?(0,a.jsx)(a.Fragment,{children:s}):null}},445:function(e,s,r){r.r(s),r.d(s,{default:function(){return l}});var a=r(9268);let i={outline:"bg-white",filled:"bg-gray-100 dark:bg-primaryBg border border-2 dark:border-gray-500 focus-within:border-primary dark:focus-within:border-primary focus-within:border-primary"};function l(e){let{label:s,variant:r,error:l,...n}=e;return(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("label",{htmlFor:"",className:"mb-2 text-sm",children:s}),(0,a.jsx)("input",{...n,className:"text-md rounded-md px-2  py-3 outline-none  ".concat(i[r])}),l&&(0,a.jsx)("small",{className:"mt-1 text-sm text-red-500",children:l})]})}},9743:function(e,s,r){r.r(s);var a=r(9268);r(6006),s.default=e=>{let{pdfFile:s,url:r}=e;return(0,a.jsx)("div",{children:(0,a.jsx)("iframe",{security:"false",src:r,width:"100%",height:"600px"})})}},3402:function(e,s,r){r.r(s),r.d(s,{default:function(){return C}});var a=r(9268),i=r(6394),l=r.n(i),n=r(6006),c=r(5590),t=r(8136),d=r(4821),o=r(5846),h=r.n(o),m=r(6008),x=r(4537),u=r(2801),b=r(4526),g=r(4021),p=r(9725),j=r(4751),f=r(8919),y=r(3393),N=r(2934),v=r(9791),w=r(293);let z=function(){for(var e=arguments.length,s=Array(e),r=0;r<e;r++)s[r]=arguments[r];return(0,w.m)((0,v.Z)(s))},k={li:"flex cursor-pointer items-center gap-4 py-4 px-4",icon:"text-2xl"};function C(){let[e,s]=(0,n.useState)(!1),r=(0,m.usePathname)(),i=(0,n.useContext)(N.l);function o(e){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return s?r===e:r.includes(e)}async function v(){if(!e){s(!0);try{await (0,j.signOut)(),f.Am.success("Logged out succesfully!")}catch(e){f.Am.error("Something went wrong while logging you out!")}finally{s(!1)}}}return(0,a.jsxs)("div",{className:"".concat(z("z-50 max-w-[300px] bg-primaryBg text-white fixed top-0 bottom-0 left-0 md:relative",{"w-0 md:fixed":!(null==i?void 0:i.open),"w-full md:relative":null==i?void 0:i.open})),children:[(0,a.jsx)("div",{onClick:()=>null==i?void 0:i.handleOpen(!i.open),className:"absolute -right-12 bg-primary p-2 rounded-md cursor-pointer flex items-center justify-center top-2 shadow-md",children:(0,a.jsx)(g.F3G,{className:"text-2xl"})}),(0,a.jsxs)("div",{className:"overflow-y-auto h-screen py-4 overflow-x-hidden w-full",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4 p-4",children:[(0,a.jsx)(l(),{src:"/images/logo.png",width:35,height:35,alt:"",className:"rounded-md object-contain"}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("h1",{className:"text-xl font-semibold",children:"Onkey"}),(0,a.jsx)("p",{children:"Workspace dashboard"})]})]}),(0,a.jsxs)("ul",{className:"mt-4 flex flex-col gap-2",children:[(0,a.jsx)(h(),{href:"/dashboard",className:"".concat(o("/dashboard",!0)?"bg-primary text-white hover:bg-primary":"hover:bg-gray-700"),children:(0,a.jsxs)("li",{className:"".concat(k.li," "),children:[(0,a.jsx)(c.toC,{className:k.icon}),(0,a.jsx)("span",{children:"Dashboard"})]})}),(0,a.jsx)(h(),{href:"/dashboard/users",className:"".concat(o("/dashboard/users")?"bg-primary text-white hover:bg-primary":"hover:bg-gray-700"),children:(0,a.jsxs)("li",{className:k.li,children:[(0,a.jsx)(y.fzv,{className:k.icon}),(0,a.jsx)("span",{children:"Users"})]})}),(0,a.jsx)(h(),{href:"/dashboard/courses",className:"".concat(o("/dashboard/courses")?"bg-primary text-white hover:bg-primary":"hover:bg-gray-700"),children:(0,a.jsxs)("li",{className:k.li,children:[(0,a.jsx)(t.R_f,{className:k.icon}),(0,a.jsx)("span",{children:"Courses"})]})}),(0,a.jsx)(h(),{href:"/dashboard/tags",className:"".concat(o("/dashboard/tags")?"bg-primary text-white hover:bg-primary":"hover:bg-gray-700"),children:(0,a.jsxs)("li",{className:k.li,children:[(0,a.jsx)(t.zig,{className:k.icon}),(0,a.jsx)("span",{children:"Tags"})]})}),(0,a.jsx)(h(),{href:"/dashboard/lessons",className:"".concat(o("/dashboard/lessons")?"bg-primary text-white hover:bg-primary":"hover:bg-gray-700"),children:(0,a.jsxs)("li",{className:k.li,children:[(0,a.jsx)(d.Xmp,{className:k.icon}),(0,a.jsx)("span",{children:"Lessons"})]})}),(0,a.jsx)(h(),{href:"/dashboard/quizzes",className:"".concat(o("/dashboard/quizzes")?"bg-primary text-white hover:bg-primary":"hover:bg-gray-700"),children:(0,a.jsxs)("li",{className:k.li,children:[(0,a.jsx)(d.OWq,{className:k.icon}),(0,a.jsx)("span",{children:"Quizzes"})]})}),(0,a.jsx)(h(),{href:"/dashboard/questions",className:"".concat(o("/dashboard/questions")?"bg-primary text-white hover:bg-primary":"hover:bg-gray-700"),children:(0,a.jsxs)("li",{className:k.li,children:[(0,a.jsx)(t.wHm,{className:k.icon}),(0,a.jsx)("span",{children:"Questions"})]})}),(0,a.jsx)(h(),{href:"/dashboard/answers",className:"".concat(o("/dashboard/answers")?"bg-primary text-white hover:bg-primary":"hover:bg-gray-700"),children:(0,a.jsxs)("li",{className:k.li,children:[(0,a.jsx)(d.Iqb,{className:k.icon}),(0,a.jsx)("span",{children:"Answers"})]})}),(0,a.jsx)(h(),{href:"/dashboard/grades",className:"".concat(o("/dashboard/grades")?"bg-primary text-white hover:bg-primary":"hover:bg-gray-700"),children:(0,a.jsxs)("li",{className:k.li,children:[(0,a.jsx)(x.cbR,{className:k.icon}),(0,a.jsx)("span",{children:"Grades"})]})}),(0,a.jsx)(h(),{href:"/dashboard/enrollments",className:"".concat(o("/dashboard/enrollments")?"bg-primary text-white hover:bg-primary":"hover:bg-gray-700"),children:(0,a.jsxs)("li",{className:k.li,children:[(0,a.jsx)(u.XFe,{className:k.icon}),(0,a.jsx)("span",{children:"Enrollments"})]})}),(0,a.jsx)(h(),{href:"/dashboard/progresses",className:"".concat(o("/dashboard/progresses")?"bg-primary text-white hover:bg-primary":"hover:bg-gray-700"),children:(0,a.jsxs)("li",{className:k.li,children:[(0,a.jsx)(b.fi_,{className:k.icon}),(0,a.jsx)("span",{children:"Progress"})]})}),(0,a.jsx)(h(),{href:"/dashboard/user-quizzes",className:"".concat(o("/dashboard/user-quizzes")?"bg-primary text-white hover:bg-primary":"hover:bg-gray-700"),children:(0,a.jsxs)("li",{className:k.li,children:[(0,a.jsx)(p.C9N,{className:k.icon}),(0,a.jsx)("span",{children:"User Quizzes"})]})}),(0,a.jsx)(h(),{href:"/dashboard/user-answers",className:"".concat(o("/dashboard/user-answers")?"bg-primary text-white hover:bg-primary":"hover:bg-gray-700"),children:(0,a.jsxs)("li",{className:k.li,children:[(0,a.jsx)(u.TZR,{className:k.icon}),(0,a.jsx)("span",{children:"User Answers"})]})}),(0,a.jsxs)("li",{onClick:v,className:k.li,children:[e?(0,a.jsx)("div",{className:"h-6 w-6 animate-spin rounded-full border-2 border-b-primary border-l-primary border-t-primary"}):(0,a.jsx)(g.GAI,{className:k.icon}),(0,a.jsx)("span",{children:"Log Out"})]})]})]})]})}},2934:function(e,s,r){r.d(s,{f:function(){return n},l:function(){return l}});var a=r(9268),i=r(6006);let l=(0,i.createContext)(null),n=e=>{let{children:s}=e,[r,n]=(0,i.useState)(!0);return(0,a.jsx)(l.Provider,{value:{open:r,handleOpen:e=>n(e)},children:s})}}}]);