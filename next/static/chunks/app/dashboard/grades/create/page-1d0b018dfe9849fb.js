(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8457],{4336:function(e,t,a){Promise.resolve().then(a.bind(a,1211))},1211:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var r=a(9268),s=a(443),n=a(8856),o=a(1791),l=a(771),i=a(9131),c=a(4496),u=a(8852),d=a(6008),h=a(6006),g=a(8919),p=a(4824),m=a(4088);function f(e){let{token:t}=e,{courses:a,lessons:f,users:y,course:x,setCourse:b,lesson:v,setLesson:w,user:Z,setUser:j,handleChange:B,handleSubmit:N,values:C,errors:A,loading:z}=function(e){let t=(0,d.useRouter)(),a=(0,p.useQueryClient)(),[r,s]=(0,h.useState)([]),[m,f]=(0,h.useState)([]),[y,x]=(0,h.useState)([]),[b,v]=(0,h.useState)(null),[w,Z]=(0,h.useState)(null),[j,B]=(0,h.useState)(null);(0,p.useQuery)(["select-courses"],()=>n.Z.getCourses(e,"?fields[0]=title"),{staleTime:1/0,onError:()=>g.ZP.error("something went wrong, please try again"),onSuccess:e=>{s(e.data.map(e=>({value:e.id.toString(),label:e.attributes.title})))}}),(0,p.useQuery)(["select-lessons"],()=>l.Z.getLessons(e,"?fields[0]=title"),{staleTime:1/0,onError:()=>g.ZP.error("something went wrong, please try again"),onSuccess:e=>{f(e.data.map(e=>({value:e.id.toString(),label:e.attributes.title})))}}),(0,p.useQuery)(["users"],()=>(0,i.Rf)(e),{staleTime:1/0,onError:()=>g.ZP.error("something went wrong, please try again"),onSuccess:e=>{x(e.map(e=>({value:e.id.toString(),label:e.username})))}});let{handleChange:N,handleSubmit:C,values:A,errors:z}=(0,u.TA)({initialValues:{gradeValue:""},validationSchema:c.i,async onSubmit(e){await _(e)}}),{mutateAsync:S,isLoading:k}=(0,p.useMutation)(t=>o.Z.create(e,t),{onSuccess:async()=>await a.invalidateQueries(["grades"])});async function _(e){if(!b){g.ZP.error("please select course");return}if(!w){g.ZP.error("please select lesson");return}if(!j){g.ZP.error("please select user");return}try{let e={data:{grade_value:A.gradeValue,course_id:b.value,lesson_id:w.value,user_id:j.value}};await S(e),g.ZP.success("Grade created successfully"),t.push("/dashboard/grades")}catch(e){g.ZP.error(e.response.data.error.message||"something went wrong, please try again!")}}return{courses:r,lessons:m,users:y,course:b,setCourse:v,lesson:w,setLesson:Z,user:j,setUser:B,handleChange:N,handleSubmit:C,values:A,errors:z,loading:k}}(t);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsx)("h1",{className:"text-xl font-bold",children:"Create a new grade"}),(0,r.jsx)("p",{children:"Add the information about the grade"})]}),(0,r.jsxs)("form",{onSubmit:N,className:"rounded-md bg-white p-3 shadow-md dark:bg-darkBg",action:"",children:[(0,r.jsx)("div",{className:"mb-12",children:(0,r.jsx)(s.II,{name:"gradeValue",value:C.gradeValue,onChange:B,error:A.gradeValue,label:"Grade value",variant:"filled"})}),(0,r.jsxs)("div",{className:"mb-12 grid grid-cols-1 gap-12  md:grid-cols-2 md:gap-8",children:[(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"",className:"mb-2 text-sm",children:"Choose a course"}),(0,r.jsx)(m.ZP,{value:x,onChange:e=>b({value:null==e?void 0:e.value.toString(),label:null==e?void 0:e.label}),options:a})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"",className:"mb-2 text-sm",children:"Choose a lesson"}),(0,r.jsx)(m.ZP,{value:v,onChange:e=>w({value:null==e?void 0:e.value.toString(),label:null==e?void 0:e.label}),options:f})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"",className:"mb-2 text-sm",children:"Choose a user"}),(0,r.jsx)(m.ZP,{value:Z,onChange:e=>j({value:null==e?void 0:e.value.toString(),label:null==e?void 0:e.label}),options:y})]})]}),(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)(s.zx,{loading:z,type:"submit",className:"w-fit text-white",children:"Create grade"})})]})]})}},443:function(e,t,a){"use strict";a.d(t,{zx:function(){return r.default},II:function(){return s.default},gx:function(){return l},ZD:function(){return i}});var r=a(4769);a(9510);var s=a(445);a(9743),a(3402);var n=a(9268);a(6006);let o={outline:"bg-white",filled:"bg-gray-100 dark:bg-primaryBg border-2 border dark:border-gray-500 dark:focus-within:border-primary focus-within:border-primary"};var l=function(e){let{label:t,variant:a,error:r,...s}=e;return(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("label",{htmlFor:"",className:"mb-2 text-sm",children:t}),(0,n.jsx)("textarea",{...s,className:"h-[200px] resize-none  rounded-md px-2 py-3 outline-none ".concat(o[a])}),r&&(0,n.jsx)("small",{className:"mt-1 text-sm text-red-500",children:r})]})};function i(e){let{title:t,value:a,onChange:r,name:s}=e;return(0,n.jsxs)("label",{className:"relative w-fit inline-flex items-center cursor-pointer",children:[(0,n.jsx)("input",{name:s,onChange:r,type:"checkbox",checked:a,className:"sr-only peer"}),(0,n.jsx)("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"}),(0,n.jsx)("span",{className:"ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",children:t})]})}},4737:function(e,t,a){"use strict";var r=a(4214),s=a(8611);let n=r.default.create({baseURL:"".concat(s.env.NEXT_PUBLIC_BASE_URL,"/api"),headers:{"Content-Type":"application/json"}});t.Z=n},8856:function(e,t,a){"use strict";var r=a(4737);t.Z=class{static async createCourse(e,t){let a=await r.Z.post("/courses",t,{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"multipart/form-data"}});return a.data}static updateCourse(e,t,a){return r.Z.put("/courses/".concat(t),a,{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"multipart/form-data"}})}static async getCourseByID(e,t){return await r.Z.get("/courses/".concat(t,"?populate[instructor_id]=*&populate[course_image]=*&populate[tags][fields][0]=name&populate[lessons]=*"),{headers:{Authorization:"Bearer ".concat(e)}})}static async deleteByID(e,t){return await r.Z.delete("/courses/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}static async getCourses(e,t){let a=await r.Z.get("/courses?".concat(t||""),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}}},1791:function(e,t,a){"use strict";var r=a(4737);t.Z=class{static async getGrades(e,t){let a=await r.Z.get("/grades?".concat(t||""),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}static async getByID(e,t){let a=await r.Z.get("/grades/".concat(t,"?populate=*"),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}static async deleteByID(e,t){let a=await r.Z.delete("/grades/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}static async create(e,t){let a=await r.Z.post("/grades",t,{headers:{Authorization:"Bearer ".concat(e)}});return a.data}static async update(e,t,a){let s=await r.Z.put("/grades/".concat(t),a,{headers:{Authorization:"Bearer ".concat(e)}});return s.data}}},771:function(e,t,a){"use strict";var r=a(4737);t.Z=class{static async getLessons(e,t){let a=await r.Z.get("/lessons?".concat(t||""),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}static async getLessonById(e,t){let a=await r.Z.get("/lessons/".concat(t,"?populate[course][populate][course_image]=*&populate[thumbnail]=*&populate[media]=*&populate[course][populate][instructor_id]=*"),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}static async deleteByID(e,t){let a=await r.Z.delete("/lessons/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}static async createLesson(e,t){let a=await r.Z.post("/lessons",t,{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"multipart/form-data"}});return a.data}static async updateLesson(e,t,a){let s=await r.Z.put("/lessons/".concat(t),a,{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"multipart/form-data"}});return s.data}}},9131:function(e,t,a){"use strict";a.d(t,{M1:function(){return n},Nq:function(){return o},Rf:function(){return s},XB:function(){return l}});var r=a(4737);a(8611);let s=async(e,t)=>{let a=await r.Z.get("/users".concat(t||""),{headers:{Authorization:"Bearer ".concat(e)}});return a.data},n=async(e,t)=>{let a=await r.Z.post("/auth/local/register",t);return a.data},o=async(e,t,a)=>{let s=await r.Z.put("/users/".concat(t),a,{headers:{Authorization:"Bearer ".concat(e)}});return s.data},l=async(e,t)=>{let a=await r.Z.delete("/users/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}},4496:function(e,t,a){"use strict";a.d(t,{i:function(){return s}});var r=a(353);let s=r.Ry({gradeValue:r.Z_().trim("grade value should be valid").required("grade value is required")})}},function(e){e.O(0,[5625,6680,6415,7079,3287,3296,1827,2162,1420,7240,4824,4214,5600,4088,1644,9253,2961,1744],function(){return e(e.s=4336)}),_N_E=e.O()}]);