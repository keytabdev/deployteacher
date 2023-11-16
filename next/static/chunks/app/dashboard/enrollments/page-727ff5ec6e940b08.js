(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2136],{4654:function(){},5158:function(e,t,r){Promise.resolve().then(r.bind(r,7694))},7694:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var s=r(9268),n=r(1462),a=r(2992),l=r(4055),i=r(5326),c=r.n(i),d=r(8136),o=r(8582),u=r(4737),x=class{static async getEnrollments(e,t){let r=await u.Z.get("/enrollments?".concat(t||""),{headers:{Authorization:"Bearer ".concat(e)}});return r.data}static async getByID(e,t){let r=await u.Z.get("/enrollments/".concat(t,"?populate=*"),{headers:{Authorization:"Bearer ".concat(e)}});return r.data}static async deleteByID(e,t){let r=await u.Z.delete("/enrollments/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}});return r.data}},m=r(6006),f=r(8919),h=r(4824),p=r(7497),g=r.n(p);function j(e){let{token:t,customQuery:r}=e,{deleteEnrollment:i,enrollments:u,isLoading:p,query:j,setQuery:b,page:N,setPage:y}=function(e,t){let[r,s]=(0,m.useState)(""),[n,a]=(0,m.useState)(1),l=(0,o.Z)(r,500),i=g().stringify({sort:["createdAt:desc"],pagination:{page:n,pageSize:10},populate:{user_id:{fields:["username"]},course:{fields:["title"]}},fields:["enrollment_date"],filters:{$or:[{id:{$eq:l}},{course:{title:{$containsi:l}}},{user_id:{username:{$containsi:l}}}],course:{id:{$eq:t||""}}}},{encodeValuesOnly:!0}),{data:c,isLoading:d}=(0,h.useQuery)(["enrollments",l,n],()=>x.getEnrollments(e,i),{onError:()=>f.ZP.error("something went wrong please try again after refreshing")});return{deleteEnrollment:async function(t){return x.deleteByID(e,t)},enrollments:c,isLoading:d,query:r,setQuery:s,page:n,setPage:a}}(t,r);return(0,s.jsxs)("div",{className:"w-full p-4",children:[(0,s.jsxs)("div",{className:"ml-auto flex w-full items-center justify-between gap-4",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold",children:"Enrollments"}),(0,s.jsx)("div",{className:"flex items-center gap-4",children:(0,s.jsxs)("div",{className:"flex items-center gap-3 rounded-md border bg-gray-100 px-3 py-3 dark:border-gray-600 dark:bg-primaryBg",children:[(0,s.jsx)(d.dVI,{className:"text-xl"}),(0,s.jsx)("input",{type:"text",className:"bg-transparent outline-none",placeholder:"search",onChange:e=>b(e.target.value),value:j})]})})]}),(0,s.jsxs)("div",{className:"mt-8 rounded-md shadow-lg",children:[(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full min-w-[750px] overflow-x-scroll rounded-md border bg-white p-4 shadow-lg dark:border-none dark:bg-primaryBg",children:[(0,s.jsx)("thead",{className:"border dark:border-gray-600",children:(0,s.jsxs)("tr",{className:"text-left",children:[(0,s.jsx)("td",{className:"p-4 font-bold",children:"ID"}),(0,s.jsx)("td",{className:"p-4 font-bold",children:"Username"}),(0,s.jsx)("td",{className:"p-4 font-bold",children:"Course Name"}),(0,s.jsx)("td",{className:"p-4 font-bold",children:"Enrollment At"}),(0,s.jsx)("td",{className:"p-4 text-right font-bold"})]})}),(0,s.jsx)("tbody",{className:"border dark:border-gray-600",children:p?(0,s.jsx)("td",{colSpan:5,className:"p-4 text-center",children:(0,s.jsx)(a.Z,{})}):(null==u?void 0:u.data)&&u.data.length>0?null==u?void 0:u.data.map(e=>{let{id:t,attributes:r}=e,{enrollment_date:a,course:l,user_id:d}=r;return(0,s.jsxs)("tr",{className:"dark:hover:bg-tra  w-full hover:bg-gray-100 dark:hover:bg-transparent",children:[(0,s.jsx)("td",{className:"p-4 text-left",children:t}),(0,s.jsx)("td",{className:"p-4 text-left",children:d.data.attributes.username}),(0,s.jsx)("td",{className:"p-4 text-left",children:l.data.attributes.title}),(0,s.jsx)("td",{className:"p-4 text-left",children:c()(a).format("DD-MMMM-YYYY")}),(0,s.jsx)("td",{className:"flex items-center justify-end gap-2 p-4",children:(0,s.jsx)(n.Z,{fn:i,title:"".concat(t),label:"enrollment",id:t.toString(),keys:["enrollments"]})})]},t)}):(0,s.jsx)("td",{colSpan:5,className:"p-4 text-center",children:"No enrollments found"})})]})}),(0,s.jsx)(l.Z,{page:N,pageCount:(null==u?void 0:u.meta.pagination.pageCount)||1,setPage:y})]})]})}},4769:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n}});var s=r(9268);function n(e){let{children:t,className:r,loading:n,...a}=e;return(0,s.jsx)("button",{...a,disabled:n||a.disabled,className:"rounded-md bg-primary px-3 py-3  ".concat(r),children:n?(0,s.jsxs)("div",{className:"flex items-center justify-center gap-4",children:[(0,s.jsx)("div",{className:"h-6 w-6 animate-spin rounded-full border-2 border-b-white border-l-white border-t-white"}),(0,s.jsx)("span",{children:"Loading..."})]}):t})}},1462:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var s=r(9268),n=r(6006),a=r(4769),l=r(4824),i=r(8919),c=r(1033),d=r(5372),o=r(4105);function u(e){let{id:t,title:r,label:u,fn:x,keys:m}=e,f=(0,l.useQueryClient)(),[h,p]=(0,n.useState)(!1),{mutateAsync:g,isLoading:j}=(0,l.useMutation)([t],()=>x(t),{onSuccess:async()=>await f.invalidateQueries(m)});async function b(){try{await g(),p(!1),i.Am.success("".concat(u," delete successfully"))}catch(e){p(!1),i.Am.error(e.response.data.error.message||"something went wrong!")}}return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.VPh,{onClick:()=>p(!0),className:"cursor-pointer text-2xl text-gray-500 dark:text-white"}),(0,s.jsx)(o.Z,{open:h,children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex items-center justify-center gap-4",children:[(0,s.jsx)(d.OvZ,{className:"mb-4 text-4xl text-red-500"}),(0,s.jsx)("h1",{className:"text-bold mb-4 text-center text-xl",children:"Warning!"})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center gap-1",children:[(0,s.jsxs)("p",{children:["Are you sure you want to delete a ",u]}),(0,s.jsx)("span",{className:"text-center text-xl font-bold",children:r})]}),(0,s.jsxs)("div",{className:"mt-8 flex items-center gap-4",children:[(0,s.jsx)(a.default,{onClick:b,loading:j,className:"w-full text-white",children:"Yes sure"}),(0,s.jsx)(a.default,{onClick:()=>p(!1),className:"w-full bg-transparent text-primary",children:"No cancel"})]})]})})]})}},2992:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var s=r(9268);function n(){return(0,s.jsx)("div",{className:"flex items-center justify-center",children:(0,s.jsx)("div",{className:"h-[55px] w-[55px] animate-spin rounded-full border-2 border-l-primary border-r-primary border-t-primary dark:border-b-gray-500"})})}},4105:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var s=r(9268);function n(e){let{children:t,open:r}=e;return(0,s.jsx)(s.Fragment,{children:r?(0,s.jsx)("div",{className:"fixed left-0 top-0 z-50 flex min-h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.6)]",children:(0,s.jsx)("div",{className:"w-full max-w-[550px] rounded-md bg-white p-4 dark:bg-primaryBg",children:t})}):(0,s.jsx)(s.Fragment,{})})}},4055:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var s=r(9268),n=r(4821),a=r(4769);function l(e){let{page:t,setPage:r,pageCount:l}=e;return(0,s.jsxs)("div",{className:"flex items-center justify-end bg-white py-2 dark:bg-primaryBg",children:[(0,s.jsx)(a.default,{disabled:1===t,onClick:()=>r(t-1),className:"bg-transparent disabled:text-gray-400",children:(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(n.RL9,{}),(0,s.jsx)("span",{children:"Prev"})]})}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("p",{children:t}),(0,s.jsx)("small",{children:"of"}),(0,s.jsx)("p",{children:l})]}),(0,s.jsx)(a.default,{disabled:t===l,onClick:()=>r(t+1),className:"bg-transparent disabled:text-gray-400",children:(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("span",{children:"Next"}),(0,s.jsx)(n.Bqb,{})]})})]})}},4737:function(e,t,r){"use strict";var s=r(4214),n=r(8611);let a=s.default.create({baseURL:"".concat(n.env.NEXT_PUBLIC_BASE_URL,"/api"),headers:{"Content-Type":"application/json"}});t.Z=a},8582:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var s=r(6006);function n(e,t){let[r,n]=(0,s.useState)(e);return(0,s.useEffect)(()=>{let r=setTimeout(()=>n(e),t);return()=>{clearTimeout(r)}},[e,t]),r}}},function(e){e.O(0,[5625,6680,8121,9173,4550,1420,4824,4214,7497,9253,2961,1744],function(){return e(e.s=5158)}),_N_E=e.O()}]);