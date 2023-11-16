(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6179],{4654:function(){},4664:function(e,t,s){Promise.resolve().then(s.bind(s,3231))},3231:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var r=s(9268),a=s(1462),n=s(2992),l=s(4055),i=s(8136),c=s(8582),d=s(4737),o=class{static async getProgresses(e,t){let s=await d.Z.get("/progresses?".concat(t||""),{headers:{Authorization:"Bearer ".concat(e)}});return s.data}static async getByID(e,t){let s=await d.Z.get("/progresses/".concat(t,"?populate=*"),{headers:{Authorization:"Bearer ".concat(e)}});return s.data}static async deleteByID(e,t){let s=await d.Z.delete("/progresses/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}});return s.data}},u=s(6006),x=s(8919),m=s(4824),f=s(7497),p=s.n(f);function h(e){let{token:t}=e,{deleteProgress:s,progresses:d,isLoading:f,query:h,setQuery:g,page:j,setPage:b}=function(e){let[t,s]=(0,u.useState)(""),[r,a]=(0,u.useState)(1),n=(0,c.Z)(t,500),l=p().stringify({sort:["createdAt:desc"],pagination:{page:r,pageSize:10},filters:{$or:[{id:{$eq:n}},{user_id:{username:{$containsi:n}}},{course_id:{title:{$containsi:n}}},{completion_status:{$containsi:n}}]},populate:{user_id:{fields:["username"]},course_id:{fields:["title"]}},fields:["completion_status","progress_percent"]},{encodeValuesOnly:!0}),{data:i,isLoading:d}=(0,m.useQuery)(["progresses",n,r],()=>o.getProgresses(e,l),{onError:()=>x.ZP.error("something went wrong please try again after refreshing")});return{deleteProgress:async function(t){return o.deleteByID(e,t)},progresses:i,isLoading:d,query:t,setQuery:s,page:r,setPage:a}}(t);return(0,r.jsxs)("div",{className:"w-full p-4",children:[(0,r.jsxs)("div",{className:"ml-auto flex w-full items-center justify-between gap-4",children:[(0,r.jsx)("h1",{className:"text-2xl font-bold",children:"Progresses"}),(0,r.jsx)("div",{className:"flex items-center gap-4",children:(0,r.jsxs)("div",{className:"flex items-center gap-3 rounded-md border bg-gray-100 px-3 py-3 dark:border-gray-600 dark:bg-primaryBg",children:[(0,r.jsx)(i.dVI,{className:"text-xl"}),(0,r.jsx)("input",{type:"text",className:"bg-transparent outline-none",placeholder:"search",onChange:e=>g(e.target.value),value:h})]})})]}),(0,r.jsxs)("div",{className:"mt-8 rounded-md shadow-lg",children:[(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:"w-full min-w-[750px] overflow-x-scroll rounded-md border bg-white p-4 shadow-lg dark:border-none dark:bg-primaryBg",children:[(0,r.jsx)("thead",{className:"border dark:border-gray-600",children:(0,r.jsxs)("tr",{className:"text-left",children:[(0,r.jsx)("td",{className:"p-4 font-bold",children:"ID"}),(0,r.jsx)("td",{className:"p-4 font-bold",children:"Username"}),(0,r.jsx)("td",{className:"p-4 font-bold",children:"Course Name"}),(0,r.jsx)("td",{className:"p-4 font-bold",children:"Completion Status"}),(0,r.jsx)("td",{className:"p-4 font-bold",children:"Percentage"}),(0,r.jsx)("td",{className:"p-4 text-right font-bold"})]})}),(0,r.jsx)("tbody",{className:"border dark:border-gray-600",children:f?(0,r.jsx)("td",{colSpan:6,className:"p-4 text-center",children:(0,r.jsx)(n.Z,{})}):(null==d?void 0:d.data)&&d.data.length>0?null==d?void 0:d.data.map(e=>{let{id:t,attributes:n}=e,{course_id:l,user_id:i,completion_status:c,progress_percent:d}=n;return(0,r.jsxs)("tr",{className:"dark:hover:bg-tra  w-full hover:bg-gray-100 dark:hover:bg-transparent",children:[(0,r.jsx)("td",{className:"p-4 text-left",children:t}),(0,r.jsx)("td",{className:"p-4 text-left",children:i.data.attributes.username}),(0,r.jsx)("td",{className:"p-4 text-left",children:l.data.attributes.title}),(0,r.jsx)("td",{className:"p-4 text-left",children:c}),(0,r.jsx)("td",{className:"p-4 text-left",children:d}),(0,r.jsx)("td",{className:"flex items-center justify-end gap-2 p-4",children:(0,r.jsx)(a.Z,{fn:s,title:"".concat(t),label:"progress",id:t.toString(),keys:["progresses"]})})]},t)}):(0,r.jsx)("td",{colSpan:6,className:"p-4 text-center",children:"No progress found"})})]})}),(0,r.jsx)(l.Z,{page:j,pageCount:(null==d?void 0:d.meta.pagination.pageCount)||1,setPage:b})]})]})}},4769:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return a}});var r=s(9268);function a(e){let{children:t,className:s,loading:a,...n}=e;return(0,r.jsx)("button",{...n,disabled:a||n.disabled,className:"rounded-md bg-primary px-3 py-3  ".concat(s),children:a?(0,r.jsxs)("div",{className:"flex items-center justify-center gap-4",children:[(0,r.jsx)("div",{className:"h-6 w-6 animate-spin rounded-full border-2 border-b-white border-l-white border-t-white"}),(0,r.jsx)("span",{children:"Loading..."})]}):t})}},1462:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var r=s(9268),a=s(6006),n=s(4769),l=s(4824),i=s(8919),c=s(1033),d=s(5372),o=s(4105);function u(e){let{id:t,title:s,label:u,fn:x,keys:m}=e,f=(0,l.useQueryClient)(),[p,h]=(0,a.useState)(!1),{mutateAsync:g,isLoading:j}=(0,l.useMutation)([t],()=>x(t),{onSuccess:async()=>await f.invalidateQueries(m)});async function b(){try{await g(),h(!1),i.Am.success("".concat(u," delete successfully"))}catch(e){h(!1),i.Am.error(e.response.data.error.message||"something went wrong!")}}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.VPh,{onClick:()=>h(!0),className:"cursor-pointer text-2xl text-gray-500 dark:text-white"}),(0,r.jsx)(o.Z,{open:p,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex items-center justify-center gap-4",children:[(0,r.jsx)(d.OvZ,{className:"mb-4 text-4xl text-red-500"}),(0,r.jsx)("h1",{className:"text-bold mb-4 text-center text-xl",children:"Warning!"})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center gap-1",children:[(0,r.jsxs)("p",{children:["Are you sure you want to delete a ",u]}),(0,r.jsx)("span",{className:"text-center text-xl font-bold",children:s})]}),(0,r.jsxs)("div",{className:"mt-8 flex items-center gap-4",children:[(0,r.jsx)(n.default,{onClick:b,loading:j,className:"w-full text-white",children:"Yes sure"}),(0,r.jsx)(n.default,{onClick:()=>h(!1),className:"w-full bg-transparent text-primary",children:"No cancel"})]})]})})]})}},2992:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var r=s(9268);function a(){return(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsx)("div",{className:"h-[55px] w-[55px] animate-spin rounded-full border-2 border-l-primary border-r-primary border-t-primary dark:border-b-gray-500"})})}},4105:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var r=s(9268);function a(e){let{children:t,open:s}=e;return(0,r.jsx)(r.Fragment,{children:s?(0,r.jsx)("div",{className:"fixed left-0 top-0 z-50 flex min-h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.6)]",children:(0,r.jsx)("div",{className:"w-full max-w-[550px] rounded-md bg-white p-4 dark:bg-primaryBg",children:t})}):(0,r.jsx)(r.Fragment,{})})}},4055:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var r=s(9268),a=s(4821),n=s(4769);function l(e){let{page:t,setPage:s,pageCount:l}=e;return(0,r.jsxs)("div",{className:"flex items-center justify-end bg-white py-2 dark:bg-primaryBg",children:[(0,r.jsx)(n.default,{disabled:1===t,onClick:()=>s(t-1),className:"bg-transparent disabled:text-gray-400",children:(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(a.RL9,{}),(0,r.jsx)("span",{children:"Prev"})]})}),(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("p",{children:t}),(0,r.jsx)("small",{children:"of"}),(0,r.jsx)("p",{children:l})]}),(0,r.jsx)(n.default,{disabled:t===l,onClick:()=>s(t+1),className:"bg-transparent disabled:text-gray-400",children:(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("span",{children:"Next"}),(0,r.jsx)(a.Bqb,{})]})})]})}},4737:function(e,t,s){"use strict";var r=s(4214),a=s(8611);let n=r.default.create({baseURL:"".concat(a.env.NEXT_PUBLIC_BASE_URL,"/api"),headers:{"Content-Type":"application/json"}});t.Z=n},8582:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var r=s(6006);function a(e,t){let[s,a]=(0,r.useState)(e);return(0,r.useEffect)(()=>{let s=setTimeout(()=>a(e),t);return()=>{clearTimeout(s)}},[e,t]),s}}},function(e){e.O(0,[5625,6680,8121,9173,1420,4824,4214,7497,9253,2961,1744],function(){return e(e.s=4664)}),_N_E=e.O()}]);