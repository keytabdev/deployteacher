(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9757],{44:function(e,t,a){Promise.resolve().then(a.bind(a,1678))},1678:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var r=a(9268),s=a(4088),n=a(771),i=a(2635),o=a(8852),l=a(8919),c=a(4824),u=a(6006),d=a(80),p=a(6008);let m={title:"",description:"",duration:0,passingScore:0};var h=a(443);function f(e){let{token:t}=e,{errors:a,handleChange:f,handleSubmit:g,values:x,lessons:b,lesson:y,setLesson:z,loading:v}=function(e){let t=(0,p.useRouter)(),a=(0,c.useQueryClient)(),{handleChange:r,handleSubmit:s,values:h,errors:f}=(0,o.TA)({initialValues:m,validationSchema:i.z,async onSubmit(e){await y(e)}}),{data:g}=(0,c.useQuery)(["select-lessons"],()=>n.Z.getLessons(e,"?fields[0]=title"),{staleTime:1/0,onError:()=>l.Am.error("something went wrong at fetching courses please try again")}),{mutateAsync:x,isLoading:b}=(0,c.useMutation)(t=>d.Z.createQuiz(e,t),{onSuccess:async e=>{let{data:r}=e;await a.invalidateQueries(["quizzes"]),l.Am.success("Lesson created successfully"),t.push("/dashboard/quizzes/".concat(r.id))}});async function y(e){if(!w.value){l.Am.error("please select lesson");return}try{let t={data:{lesson:w.value,passing_score:e.passingScore,...h}};await x(t)}catch(e){l.Am.error(e.response.data.error.message||"something went wrong, please try again!")}}let[z,v]=(0,u.useState)(),[w,j]=(0,u.useState)({value:"",label:""});return(0,u.useEffect)(()=>{v(null==g?void 0:g.data.map(e=>({value:e.id.toString(),label:e.attributes.title})))},[g]),{handleChange:r,handleSubmit:s,values:h,errors:f,lessons:z,lesson:w,setLesson:j,loading:b}}(t);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsx)("h1",{className:"text-xl font-bold",children:"Create a new quiz"}),(0,r.jsx)("p",{children:"Add the information about the quiz"})]}),(0,r.jsxs)("form",{onSubmit:g,className:"rounded-md bg-white p-3 shadow-md",action:"",children:[(0,r.jsx)("div",{className:"mb-12",children:(0,r.jsx)(h.II,{name:"title",value:x.title,onChange:f,error:a.title,label:"Quiz title",variant:"filled"})}),(0,r.jsx)("div",{className:"mb-12",children:(0,r.jsx)(h.gx,{name:"description",value:x.description,onChange:f,error:a.description,label:"Quiz description",variant:"filled"})}),(0,r.jsx)("div",{className:"mb-12",children:(0,r.jsx)(h.II,{name:"duration",onChange:f,error:a.duration,label:"Quiz duration",variant:"filled",type:"text"})}),(0,r.jsx)("div",{className:"mb-12",children:(0,r.jsx)(h.II,{name:"passingScore",value:x.passingScore,onChange:f,error:a.passingScore,label:"Passing score",variant:"filled"})}),(0,r.jsx)("div",{className:"mb-12 grid grid-cols-1 gap-12  md:grid-cols-2 md:gap-8",children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"",className:"mb-2 text-sm",children:"Choose a lesson"}),(0,r.jsx)(s.ZP,{value:y,onChange:e=>z({value:null==e?void 0:e.value.toString(),label:null==e?void 0:e.label}),options:b})]})}),(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)(h.zx,{loading:v,type:"submit",className:"w-fit text-white",children:"Create quiz"})})]})]})}},443:function(e,t,a){"use strict";a.d(t,{zx:function(){return r.default},II:function(){return s.default},gx:function(){return o},ZD:function(){return l}});var r=a(4769);a(9510);var s=a(445);a(9743),a(3402);var n=a(9268);a(6006);let i={outline:"bg-white",filled:"bg-gray-100 dark:bg-primaryBg border-2 border dark:border-gray-500 dark:focus-within:border-primary focus-within:border-primary"};var o=function(e){let{label:t,variant:a,error:r,...s}=e;return(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("label",{htmlFor:"",className:"mb-2 text-sm",children:t}),(0,n.jsx)("textarea",{...s,className:"h-[200px] resize-none  rounded-md px-2 py-3 outline-none ".concat(i[a])}),r&&(0,n.jsx)("small",{className:"mt-1 text-sm text-red-500",children:r})]})};function l(e){let{title:t,value:a,onChange:r,name:s}=e;return(0,n.jsxs)("label",{className:"relative w-fit inline-flex items-center cursor-pointer",children:[(0,n.jsx)("input",{name:s,onChange:r,type:"checkbox",checked:a,className:"sr-only peer"}),(0,n.jsx)("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"}),(0,n.jsx)("span",{className:"ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",children:t})]})}},4737:function(e,t,a){"use strict";var r=a(4214),s=a(8611);let n=r.default.create({baseURL:"".concat(s.env.NEXT_PUBLIC_BASE_URL,"/api"),headers:{"Content-Type":"application/json"}});t.Z=n},771:function(e,t,a){"use strict";var r=a(4737);t.Z=class{static async getLessons(e,t){let a=await r.Z.get("/lessons?".concat(t||""),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}static async getLessonById(e,t){let a=await r.Z.get("/lessons/".concat(t,"?populate[course][populate][course_image]=*&populate[thumbnail]=*&populate[media]=*&populate[course][populate][instructor_id]=*"),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}static async deleteByID(e,t){let a=await r.Z.delete("/lessons/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}static async createLesson(e,t){let a=await r.Z.post("/lessons",t,{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"multipart/form-data"}});return a.data}static async updateLesson(e,t,a){let s=await r.Z.put("/lessons/".concat(t),a,{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"multipart/form-data"}});return s.data}}},80:function(e,t,a){"use strict";var r=a(4737);t.Z=class{static async getQuizzes(e,t){let a=await r.Z.get("/quizzes?".concat(t||""),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}static async getQuizzByID(e,t){let a=await r.Z.get("/quizzes/".concat(t,"?populate[lesson][populate][thumbnail]=*"),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}static async deleteByID(e,t){let a=await r.Z.delete("/quizzes/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}static async createQuiz(e,t){let a=await r.Z.post("/quizzes",t,{headers:{Authorization:"Bearer ".concat(e)}});return a.data}static async updateQuiz(e,t,a){let s=await r.Z.put("/quizzes/".concat(t),a,{headers:{Authorization:"Bearer ".concat(e)}});return s.data}}},2635:function(e,t,a){"use strict";a.d(t,{z:function(){return s}});var r=a(353);let s=r.Ry({title:r.Z_().trim("quiz title should be valid").required("quiz title is required"),description:r.Z_().trim("quiz description is required").required("quiz description is required"),duration:r.Rx().required("duration is required").transform((e,t)=>parseInt(e)),passingScore:r.Rx().required("passing score is required").transform((e,t)=>parseInt(e))})}},function(e){e.O(0,[5625,6680,6415,7079,3287,3296,1827,2162,1420,7240,4824,4214,5600,4088,1644,9253,2961,1744],function(){return e(e.s=44)}),_N_E=e.O()}]);