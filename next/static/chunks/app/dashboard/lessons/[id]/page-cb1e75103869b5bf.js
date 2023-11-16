(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6961],{9046:function(e,t,a){Promise.resolve().then(a.bind(a,870))},870:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var s=a(9268),r=a(443),l=a(4088),i=a(8856),n=a(771),o=a(1375),c=a(8852),d=a(6006),u=a(8919),m=a(4824),h=a(5326),x=a.n(h),p=a(5846),b=a.n(p),f=a(1225),j=a(6394),g=a.n(j),v=a(3593),N=a(8611);function y(e){let{lesson:t,session:a}=e,{title:h,thumbnail:p,media:j}=t.attributes,{handleChange:y,handleSubmit:w,values:_,errors:L,thumbnail:C,setThumbnail:B,media:Z,setMedia:F,course:A,setCourse:S,loading:U,courses:k}=function(e,t){var a,s;let r=(0,m.useQueryClient)(),l={title:e.attributes.title,description:e.attributes.description,order:e.attributes.order},{handleChange:h,handleSubmit:x,values:p,errors:b}=(0,c.TA)({initialValues:l,validationSchema:o.E,async onSubmit(e){await C(e)}}),[f,j]=(0,d.useState)({value:(null===(a=e.attributes.course.data)||void 0===a?void 0:a.id.toString())||"",label:(null===(s=e.attributes.course.data)||void 0===s?void 0:s.attributes.title)||""}),[g,v]=(0,d.useState)({image:null,error:null,dataURL:null}),[N,y]=(0,d.useState)({image:null,error:null,dataURL:null}),{data:w}=(0,m.useQuery)(["select-courses"],()=>i.Z.getCourses(t.token,"?fields[0]=title"),{staleTime:1/0,onError:()=>u.ZP.error("something went wrong at fetching courses please try again")}),{mutateAsync:_,isLoading:L}=(0,m.useMutation)([e.id],a=>n.Z.updateLesson(t.token,(null==e?void 0:e.id).toString(),a),{onSuccess:async()=>await r.invalidateQueries(["lessons","select-lessons"])});async function C(e){try{let e=new FormData,t={...p,course:f.value};e.append("data",JSON.stringify(t)),g.image&&e.append("files.thumbnail",g.image),N.image&&e.append("files.media",N.image),await _(e),u.ZP.success("Lesson updated successfully")}catch(e){u.ZP.error(e.response.data.message||"something went wrong, please try again!")}}return{handleChange:h,handleSubmit:x,values:p,errors:b,thumbnail:g,setThumbnail:v,media:N,setMedia:y,course:f,setCourse:j,loading:L,courses:w}}(t,a),E=null==k?void 0:k.data.map(e=>({value:e.id.toString(),label:e.attributes.title}));return(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)("div",{className:"mb-12",children:[(0,s.jsxs)("div",{className:"mb-8",children:[(0,s.jsx)("h1",{className:"text-xl font-bold",children:"Update a lesson"}),(0,s.jsx)("p",{children:h})]}),(0,s.jsxs)("form",{onSubmit:w,className:"rounded-md bg-white p-3 shadow-md dark:bg-primaryBg",action:"",children:[(0,s.jsx)("div",{className:"mb-12",children:(0,s.jsx)(r.II,{value:_.title,error:L.title,onChange:y,name:"title",label:"Lesson title",variant:"filled"})}),(0,s.jsx)("div",{className:"mb-12",children:(0,s.jsx)(r.gx,{value:_.description,error:L.description,onChange:y,name:"description",label:"Lesson description",variant:"filled"})}),(0,s.jsx)("div",{className:"mb-12",children:(0,s.jsx)(r.II,{value:_.order,error:L.order,onChange:y,name:"order",label:"Lesson order",variant:"filled"})}),(0,s.jsx)("div",{className:"mb-12",children:(0,s.jsx)(v.Z,{state:C,setState:B,url:t.attributes.is_exported?t.attributes.thumbnail_url:N.env.NEXT_PUBLIC_BASE_URL+p.data.attributes.url,label:"Lesson thumbnail"})}),(0,s.jsx)("div",{className:"mb-12 flex flex-col gap-2",children:(0,s.jsx)(v.Z,{state:Z,setState:F,url:t.attributes.is_exported?t.attributes.media_url:N.env.NEXT_PUBLIC_BASE_URL+j.data.attributes.url,label:"Lesson media"})}),(0,s.jsx)("div",{className:"mb-12 grid grid-cols-1 gap-12  md:grid-cols-2 md:gap-8",children:(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("label",{htmlFor:"",className:"mb-2 text-sm",children:"Choose a course"}),(0,s.jsx)(l.ZP,{value:A,onChange:e=>S({value:null==e?void 0:e.value,label:null==e?void 0:e.label}),options:E})]})}),(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)(r.zx,{loading:U,type:"submit",className:"w-fit text-white",children:"Update a lesson"})})]})]}),(0,s.jsxs)("div",{className:"mb-12 rounded-md p-4 shadow-lg dark:bg-primaryBg",children:[(0,s.jsx)("h1",{className:"mb-4 text-2xl font-bold",children:"Course"}),t.attributes.course.data?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"relative h-[250px] w-full overflow-hidden rounded-md object-cover",children:(0,s.jsx)(g(),{src:t.attributes.course.data.attributes.is_exported?t.attributes.course.data.attributes.course_image_url:"".concat(N.env.NEXT_PUBLIC_BASE_URL).concat(t.attributes.course.data.attributes.course_image.data.attributes.url),alt:"",objectFit:"cover",fill:!0})}),(0,s.jsxs)("div",{className:"mt-8 grid grid-cols-2 gap-6",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)("label",{htmlFor:"",className:"font-semibold",children:"Course ID"}),(0,s.jsx)(b(),{href:"/dashboard/courses/".concat(t.attributes.course.data.id),children:t.attributes.course.data.id})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)("label",{htmlFor:"",className:"font-semibold",children:"Course Name"}),(0,s.jsx)("p",{children:t.attributes.course.data.attributes.title})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)("label",{htmlFor:"",className:"font-semibold",children:"Instructor Name"}),(0,s.jsx)("p",{children:t.attributes.course.data.attributes.instructor_id.data.attributes.username})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)("label",{htmlFor:"",className:"font-semibold",children:"Start date"}),(0,s.jsx)("p",{children:x()(t.attributes.course.data.attributes.start_date).format("DD-MMMM-YYYY")})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)("label",{htmlFor:"",className:"font-semibold",children:"End date"}),(0,s.jsx)("p",{children:x()(t.attributes.course.data.attributes.start_date).format("DD-MMMM-YYYY")})]})]}),(0,s.jsxs)("div",{className:"mt-4 flex flex-col gap-1",children:[(0,s.jsx)("label",{htmlFor:"",className:"font-semibold",children:"Description"}),(0,s.jsx)("p",{children:t.attributes.course.data.attributes.description})]}),(0,s.jsx)(b(),{href:"/dashboard/courses/".concat(t.attributes.course.data.id),className:"ml-auto mt-4 block w-fit",children:(0,s.jsx)(r.zx,{className:"ml-auto w-fit border border-primary bg-transparent text-primary",children:"View course"})})]}):(0,s.jsx)("p",{children:"No course found"})]}),(0,s.jsx)("div",{className:"mb-12",children:(0,s.jsx)(f.default,{token:a.token,customQuery:"".concat(t.id)})})]})}},3593:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var s=a(9268),r=a(6394),l=a.n(r),i=a(6006),n=a(8919),o=a(1033),c=a(5372),d=a(9743),u=a(4769);function m(e){let{state:t,setState:a,label:r,url:m,thumbnail:h}=e,x=(0,i.useId)();async function p(e){let s=e.target.files;if(!s){a({...t,error:"please choose course image"});return}let r=new FileReader;r.readAsArrayBuffer(s[0]),r.addEventListener("error",()=>n.Am.error("cannot load the media please try choosing again!")),r.addEventListener("load",e=>{var r;let l=null===(r=e.target)||void 0===r?void 0:r.result;if(!l)return;let i=new Blob([l],{type:s[0].type}),n=URL.createObjectURL(i);a({...t,image:s[0],dataURL:n})})}return(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("label",{htmlFor:"",className:"mb-2 text-sm",children:r}),t.image||!m?t.image?(0,s.jsxs)("div",{className:"relative flex flex-col gap-4",children:[t.image.type.includes("image")?(0,s.jsx)("div",{className:"relative h-[300px] w-full overflow-hidden rounded-md",children:(0,s.jsx)(l(),{src:"".concat(t.dataURL),alt:"",fill:!0,className:"rounded-md object-cover"})}):t.image.type.includes("pdf")?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(d.default,{url:t.dataURL})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("video",{className:" h-[300px] w-[500px]  rounded-md object-cover",controls:!0,children:(0,s.jsx)("source",{src:"".concat(t.dataURL),type:"video/mp4"})},"".concat(t.dataURL))}),(0,s.jsx)("label",{onClick:function(){a({...t,image:null})},htmlFor:"",className:"absolute right-[0.5em] top-[0.5em] flex cursor-pointer items-center justify-center rounded-full bg-gray-100 p-4 text-xl dark:bg-primaryBg dark:text-white",children:(0,s.jsx)(o.oHP,{})})]}):(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)("div",{className:"flex h-[200px] w-full max-w-[250px] items-center justify-center rounded-s-md border border-gray-300",children:[(0,s.jsx)("label",{htmlFor:x,children:(0,s.jsxs)("div",{className:"flex cursor-pointer flex-col items-center justify-center gap-2 ",children:[(0,s.jsx)(c.tpQ,{className:"text-3xl"}),(0,s.jsx)("p",{className:"text-sm",children:"choose file to upload"})]})}),(0,s.jsx)("input",{onChange:p,type:"file",id:x,className:"hidden"})]}),t.error&&(0,s.jsx)("small",{className:"text-red-400",children:t.error})]}):(0,s.jsxs)("div",{children:[(null==m?void 0:m.match(/jpeg|png|jpg|webp/))?(0,s.jsx)("div",{className:"relative h-[300px] w-full overflow-hidden rounded-md",children:(0,s.jsx)(l(),{src:"".concat(m),alt:"",fill:!0,className:"rounded-md object-cover"})}):(null==m?void 0:m.match(/pdf/))?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(u.default,{className:"text-primary bg-white border-primary",type:"button",onClick:()=>window.open("".concat(m),"__blank"),children:"Open PDF"})}):(0,s.jsx)("video",{className:"aspect-video rounded-md object-cover",controls:!0,children:(0,s.jsx)("source",{src:"".concat(m),type:"video/mp4"})}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("label",{htmlFor:x,children:(0,s.jsxs)("div",{className:"flex cursor-pointer items-center gap-2 hover:text-primary",children:[(0,s.jsx)(c.tpQ,{className:"text-3xl"}),(0,s.jsx)("p",{className:"text-sm",children:"choose file to upload"})]})}),(0,s.jsx)("input",{onChange:p,type:"file",id:x,className:"hidden"})]})]})]})}a(6628)},8856:function(e,t,a){"use strict";var s=a(4737);t.Z=class{static async createCourse(e,t){let a=await s.Z.post("/courses",t,{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"multipart/form-data"}});return a.data}static updateCourse(e,t,a){return s.Z.put("/courses/".concat(t),a,{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"multipart/form-data"}})}static async getCourseByID(e,t){return await s.Z.get("/courses/".concat(t,"?populate[instructor_id]=*&populate[course_image]=*&populate[tags][fields][0]=name&populate[lessons]=*"),{headers:{Authorization:"Bearer ".concat(e)}})}static async deleteByID(e,t){return await s.Z.delete("/courses/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}static async getCourses(e,t){let a=await s.Z.get("/courses?".concat(t||""),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}}},771:function(e,t,a){"use strict";var s=a(4737);t.Z=class{static async getLessons(e,t){let a=await s.Z.get("/lessons?".concat(t||""),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}static async getLessonById(e,t){let a=await s.Z.get("/lessons/".concat(t,"?populate[course][populate][course_image]=*&populate[thumbnail]=*&populate[media]=*&populate[course][populate][instructor_id]=*"),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}static async deleteByID(e,t){let a=await s.Z.delete("/lessons/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}static async createLesson(e,t){let a=await s.Z.post("/lessons",t,{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"multipart/form-data"}});return a.data}static async updateLesson(e,t,a){let r=await s.Z.put("/lessons/".concat(t),a,{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"multipart/form-data"}});return r.data}}},1375:function(e,t,a){"use strict";a.d(t,{E:function(){return r}});var s=a(353);let r=s.Ry({title:s.Z_().trim("lesson title should be valid").required("lessoon title is required"),description:s.Z_().trim("lesson description is required").required("lesson description is required"),order:s.Rx().required("lesson order is required")})},6628:function(){}},function(e){e.O(0,[5625,6680,6415,7079,3287,3296,1827,2162,8121,9173,4550,1420,7240,4824,4214,5600,4088,7497,1403,1644,4076,9253,2961,1744],function(){return e(e.s=9046)}),_N_E=e.O()}]);