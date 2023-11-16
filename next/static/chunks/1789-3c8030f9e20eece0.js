(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1789],{4654:function(){},1553:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return N}});var a=s(9268),r=s(443),n=s(1462),l=s(2992),c=s(4055),i=s(5326),d=s.n(i),o=s(5846),u=s.n(o),x=s(6006),f=s(8136),m=s(4821),p=s(8582),h=s(771),g=s(8919),j=s(4824),b=s(7497),y=s.n(b);function N(e){let{token:t,customQuery:s}=e,{lessons:i,deleteLesson:o,isLoading:b,page:N,setPage:v,setQuery:w,query:k}=function(e,t){let s=(0,j.useQueryClient)(),[a,r]=(0,x.useState)(""),[n,l]=(0,x.useState)(1),c=(0,p.Z)(a,200),i=y().stringify({fields:["title","createdAt"],populate:{course:{fields:["title"]}},sort:["order","createdAt:desc"],pagination:{page:n,pageSize:10},filters:{$or:[{title:{$containsi:c}},{course:{title:{$containsi:c}}},{id:{$eq:c}}],$and:[t&&{course:{id:{$eq:t}}}]}},{encodeValuesOnly:!0}),{data:d,isLoading:o}=(0,j.useQuery)(["lessons",c,n],()=>h.Z.getLessons(e,i),{onError:()=>g.ZP.error("something went wrong please try again after refreshing")});return{lessons:d,deleteLesson:async function(t){await h.Z.deleteByID(e,t),await s.invalidateQueries("lessons")},isLoading:o,page:n,setPage:l,setQuery:r,query:a}}(t,s);return(0,a.jsxs)("div",{className:"w-full p-4",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold",children:"Lessons"}),(0,a.jsxs)("div",{className:"ml-auto flex w-full items-center justify-end gap-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3 rounded-md border bg-gray-100 px-3 py-3 ",children:[(0,a.jsx)(f.dVI,{className:"text-xl"}),(0,a.jsx)("input",{type:"text",className:"bg-transparent outline-none",placeholder:"search",value:k,onChange:e=>w(e.target.value)})]}),(0,a.jsx)(u(),{href:"/dashboard/lessons/create",children:(0,a.jsx)(r.zx,{className:"flex w-fit items-center gap-2 text-white",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.B8K,{className:"text-xl"}),(0,a.jsx)("span",{children:"Add lesson"})]})})})]})]}),(0,a.jsxs)("div",{className:"mt-8 rounded-md shadow-lg",children:[(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"w-full min-w-[750px] rounded-md border bg-white p-4 shadow-lg",children:[(0,a.jsx)("thead",{className:"border-b",children:(0,a.jsxs)("tr",{className:"text-left",children:[(0,a.jsx)("td",{className:"p-4 font-bold",children:"ID"}),(0,a.jsx)("td",{className:"p-4 font-bold",children:"Lesson name"}),(0,a.jsx)("td",{className:"p-4 font-bold",children:"Course name"}),(0,a.jsx)("td",{className:"p-4 font-bold",children:"Created at"}),(0,a.jsx)("td",{className:"p-4 text-right font-bold"})]})}),(0,a.jsx)("tbody",{children:b?(0,a.jsx)("td",{colSpan:5,className:"p-4 text-center",children:(0,a.jsx)(l.Z,{})}):(null==i?void 0:i.data)&&i.data.length>0?null==i?void 0:i.data.map(e=>{var t;let{id:s,attributes:r}=e,{title:l,createdAt:c,course:i}=r;return(0,a.jsxs)("tr",{className:"w-full border hover:bg-gray-100",children:[(0,a.jsx)("td",{className:"p-4 text-left",children:s}),(0,a.jsx)("td",{className:"p-4 text-left",children:l}),(0,a.jsx)("td",{className:"p-4 text-left",children:null===(t=i.data)||void 0===t?void 0:t.attributes.title}),(0,a.jsx)("td",{className:"p-4 text-left",children:d()(c).format("DD-MMMM-YYYY")}),(0,a.jsxs)("td",{className:"flex items-center justify-end gap-2 p-4",children:[(0,a.jsx)(u(),{href:"/dashboard/lessons/".concat(s),children:(0,a.jsx)(m.yMw,{className:"cursor-pointer text-2xl text-gray-500"})}),(0,a.jsx)(n.Z,{fn:o,title:"".concat(l),label:"Lesson",id:s.toString()})]})]},s)}):(0,a.jsx)("td",{colSpan:5,className:"p-4 text-center",children:"No lessons found"})})]})}),(0,a.jsx)(c.Z,{page:N,pageCount:(null==i?void 0:i.meta.pagination.pageCount)||1,setPage:v})]})]})}},1462:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var a=s(9268),r=s(6006),n=s(4769),l=s(4824),c=s(8919),i=s(1033),d=s(5372),o=s(4105);function u(e){let{id:t,title:s,label:u,fn:x,keys:f}=e,m=(0,l.useQueryClient)(),[p,h]=(0,r.useState)(!1),{mutateAsync:g,isLoading:j}=(0,l.useMutation)([t],()=>x(t),{onSuccess:async()=>await m.invalidateQueries(f)});async function b(){try{await g(),h(!1),c.Am.success("".concat(u," delete successfully"))}catch(e){h(!1),c.Am.error(e.response.data.error.message||"something went wrong!")}}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.VPh,{onClick:()=>h(!0),className:"cursor-pointer text-2xl text-gray-500 dark:text-white"}),(0,a.jsx)(o.Z,{open:p,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex items-center justify-center gap-4",children:[(0,a.jsx)(d.OvZ,{className:"mb-4 text-4xl text-red-500"}),(0,a.jsx)("h1",{className:"text-bold mb-4 text-center text-xl",children:"Warning!"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center gap-1",children:[(0,a.jsxs)("p",{children:["Are you sure you want to delete a ",u]}),(0,a.jsx)("span",{className:"text-center text-xl font-bold",children:s})]}),(0,a.jsxs)("div",{className:"mt-8 flex items-center gap-4",children:[(0,a.jsx)(n.default,{onClick:b,loading:j,className:"w-full text-white",children:"Yes sure"}),(0,a.jsx)(n.default,{onClick:()=>h(!1),className:"w-full bg-transparent text-primary",children:"No cancel"})]})]})})]})}},443:function(e,t,s){"use strict";s.d(t,{zx:function(){return a.default},II:function(){return r.default},gx:function(){return c},ZD:function(){return i}});var a=s(4769);s(9510);var r=s(445);s(9743),s(3402);var n=s(9268);s(6006);let l={outline:"bg-white",filled:"bg-gray-100 dark:bg-primaryBg border-2 border dark:border-gray-500 dark:focus-within:border-primary focus-within:border-primary"};var c=function(e){let{label:t,variant:s,error:a,...r}=e;return(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("label",{htmlFor:"",className:"mb-2 text-sm",children:t}),(0,n.jsx)("textarea",{...r,className:"h-[200px] resize-none  rounded-md px-2 py-3 outline-none ".concat(l[s])}),a&&(0,n.jsx)("small",{className:"mt-1 text-sm text-red-500",children:a})]})};function i(e){let{title:t,value:s,onChange:a,name:r}=e;return(0,n.jsxs)("label",{className:"relative w-fit inline-flex items-center cursor-pointer",children:[(0,n.jsx)("input",{name:r,onChange:a,type:"checkbox",checked:s,className:"sr-only peer"}),(0,n.jsx)("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"}),(0,n.jsx)("span",{className:"ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",children:t})]})}},2992:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var a=s(9268);function r(){return(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)("div",{className:"h-[55px] w-[55px] animate-spin rounded-full border-2 border-l-primary border-r-primary border-t-primary dark:border-b-gray-500"})})}},4105:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var a=s(9268);function r(e){let{children:t,open:s}=e;return(0,a.jsx)(a.Fragment,{children:s?(0,a.jsx)("div",{className:"fixed left-0 top-0 z-50 flex min-h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.6)]",children:(0,a.jsx)("div",{className:"w-full max-w-[550px] rounded-md bg-white p-4 dark:bg-primaryBg",children:t})}):(0,a.jsx)(a.Fragment,{})})}},4055:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var a=s(9268),r=s(4821),n=s(4769);function l(e){let{page:t,setPage:s,pageCount:l}=e;return(0,a.jsxs)("div",{className:"flex items-center justify-end bg-white py-2 dark:bg-primaryBg",children:[(0,a.jsx)(n.default,{disabled:1===t,onClick:()=>s(t-1),className:"bg-transparent disabled:text-gray-400",children:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(r.RL9,{}),(0,a.jsx)("span",{children:"Prev"})]})}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("p",{children:t}),(0,a.jsx)("small",{children:"of"}),(0,a.jsx)("p",{children:l})]}),(0,a.jsx)(n.default,{disabled:t===l,onClick:()=>s(t+1),className:"bg-transparent disabled:text-gray-400",children:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{children:"Next"}),(0,a.jsx)(r.Bqb,{})]})})]})}},4737:function(e,t,s){"use strict";var a=s(4214),r=s(8611);let n=a.default.create({baseURL:"".concat(r.env.NEXT_PUBLIC_BASE_URL,"/api"),headers:{"Content-Type":"application/json"}});t.Z=n},8582:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var a=s(6006);function r(e,t){let[s,r]=(0,a.useState)(e);return(0,a.useEffect)(()=>{let s=setTimeout(()=>r(e),t);return()=>{clearTimeout(s)}},[e,t]),s}},771:function(e,t,s){"use strict";var a=s(4737);t.Z=class{static async getLessons(e,t){let s=await a.Z.get("/lessons?".concat(t||""),{headers:{Authorization:"Bearer ".concat(e)}});return s.data}static async getLessonById(e,t){let s=await a.Z.get("/lessons/".concat(t,"?populate[course][populate][course_image]=*&populate[thumbnail]=*&populate[media]=*&populate[course][populate][instructor_id]=*"),{headers:{Authorization:"Bearer ".concat(e)}});return s.data}static async deleteByID(e,t){let s=await a.Z.delete("/lessons/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}});return s.data}static async createLesson(e,t){let s=await a.Z.post("/lessons",t,{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"multipart/form-data"}});return s.data}static async updateLesson(e,t,s){let r=await a.Z.put("/lessons/".concat(t),s,{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"multipart/form-data"}});return r.data}}}}]);