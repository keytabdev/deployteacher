(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9520],{5294:function(e,r,a){Promise.resolve().then(a.bind(a,6264))},6264:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return f}});var t=a(9268);a(6006);var n=a(9131),s=a(4992),i=a(4732),l=a(8852),o=a(6008),c=a(8919),u=a(4824),d=a(443);function f(e){let{token:r}=e,{handleChange:a,handleSubmit:f,values:m,errors:h,loading:p}=function(e){let r=(0,o.useRouter)(),a=(0,u.useQueryClient)(),{handleChange:t,handleSubmit:d,values:f,errors:m}=(0,l.TA)({initialValues:{email:"",password:"",username:""},validationSchema:s.I,async onSubmit(e){await h(e)}}),{mutateAsync:h,isLoading:p}=(0,u.useMutation)(r=>(0,n.M1)(e,r),{onSuccess:async e=>{console.log(e),await a.invalidateQueries(["users"]),c.ZP.success("Users created successfully please change the role of the user if user will be creator"),r.push("/dashboard/users/".concat(e.user.id))},onError:e=>{if(e instanceof i.d7){var r;c.ZP.error(null===(r=e.response)||void 0===r?void 0:r.data.error.message);return}c.ZP.error("something went wrong, please try again!")}});return{handleChange:t,handleSubmit:d,values:f,errors:m,loading:p}}(r);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)("h1",{className:"text-xl font-bold",children:"Add new creator"}),(0,t.jsx)("p",{children:"Add the information about the creator"})]}),(0,t.jsxs)("form",{onSubmit:f,className:"rounded-md bg-white p-3 shadow-md",action:"",children:[(0,t.jsxs)("div",{className:"mb-12 grid grid-cols-1 gap-12  md:grid-cols-2 md:gap-8",children:[(0,t.jsx)("div",{className:"",children:(0,t.jsx)(d.II,{name:"username",value:m.username,onChange:a,error:h.username,label:"Username",variant:"filled"})}),(0,t.jsx)("div",{className:"",children:(0,t.jsx)(d.II,{name:"email",value:m.email,onChange:a,error:h.email,label:"Email address",variant:"filled"})}),(0,t.jsx)("div",{className:"",children:(0,t.jsx)(d.II,{name:"password",value:m.password,onChange:a,error:h.password,label:"Password",variant:"filled"})})]}),(0,t.jsx)("div",{className:"flex justify-end",children:(0,t.jsx)(d.zx,{loading:p,type:"submit",className:"w-fit text-white",children:"Create creator"})})]})]})}},443:function(e,r,a){"use strict";a.d(r,{zx:function(){return t.default},II:function(){return n.default},gx:function(){return l},ZD:function(){return o}});var t=a(4769);a(9510);var n=a(445);a(9743),a(3402);var s=a(9268);a(6006);let i={outline:"bg-white",filled:"bg-gray-100 dark:bg-primaryBg border-2 border dark:border-gray-500 dark:focus-within:border-primary focus-within:border-primary"};var l=function(e){let{label:r,variant:a,error:t,...n}=e;return(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("label",{htmlFor:"",className:"mb-2 text-sm",children:r}),(0,s.jsx)("textarea",{...n,className:"h-[200px] resize-none  rounded-md px-2 py-3 outline-none ".concat(i[a])}),t&&(0,s.jsx)("small",{className:"mt-1 text-sm text-red-500",children:t})]})};function o(e){let{title:r,value:a,onChange:t,name:n}=e;return(0,s.jsxs)("label",{className:"relative w-fit inline-flex items-center cursor-pointer",children:[(0,s.jsx)("input",{name:n,onChange:t,type:"checkbox",checked:a,className:"sr-only peer"}),(0,s.jsx)("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"}),(0,s.jsx)("span",{className:"ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",children:r})]})}},4737:function(e,r,a){"use strict";var t=a(4214),n=a(8611);let s=t.default.create({baseURL:"".concat(n.env.NEXT_PUBLIC_BASE_URL,"/api"),headers:{"Content-Type":"application/json"}});r.Z=s},9131:function(e,r,a){"use strict";a.d(r,{M1:function(){return s},Nq:function(){return i},Rf:function(){return n},XB:function(){return l}});var t=a(4737);a(8611);let n=async(e,r)=>{let a=await t.Z.get("/users".concat(r||""),{headers:{Authorization:"Bearer ".concat(e)}});return a.data},s=async(e,r)=>{let a=await t.Z.post("/auth/local/register",r);return a.data},i=async(e,r,a)=>{let n=await t.Z.put("/users/".concat(r),a,{headers:{Authorization:"Bearer ".concat(e)}});return n.data},l=async(e,r)=>{let a=await t.Z.delete("/users/".concat(r),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}},4992:function(e,r,a){"use strict";a.d(r,{I:function(){return n}});var t=a(353);let n=t.Ry({email:t.Z_().required("email is required").trim().email("email should be valid"),password:t.Z_().trim().required("password is required"),username:t.Z_().trim().required("username is required")})},4732:function(e,r,a){"use strict";a.d(r,{d7:function(){return s}});var t=a(4214);let{Axios:n,AxiosError:s,CanceledError:i,isCancel:l,CancelToken:o,VERSION:c,all:u,Cancel:d,isAxiosError:f,spread:m,toFormData:h,AxiosHeaders:p,HttpStatusCode:x,formToJSON:b,mergeConfig:g}=t.default}},function(e){e.O(0,[5625,6680,6415,7079,3287,3296,1827,2162,1420,7240,4824,4214,5600,1644,9253,2961,1744],function(){return e(e.s=5294)}),_N_E=e.O()}]);