(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5371],{7838:function(e,r,a){Promise.resolve().then(a.bind(a,9236))},9236:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return f}});var t=a(9268),n=a(6006),s=a(9131),i=a(4992),l=a(4732),u=a(8852),o=a(8919),c=a(4824),d=a(443),m=a(4088);function f(e){let{user:r,token:a}=e,{handleChange:f,handleSubmit:h,values:x,errors:p,loading:b,role:g,setRole:v,roles:y}=function(e,r){let a={email:r.email,password:r.email,username:r.username},t=(0,c.useQueryClient)(),[d,m]=(0,n.useState)({value:r.role.id.toString(),label:r.role.type}),{handleChange:f,handleSubmit:h,values:x,errors:p}=(0,u.TA)({initialValues:a,validationSchema:i.I,async onSubmit(e){await b({email:e.email,role:d.value,username:e.username})}}),{mutateAsync:b,isLoading:g}=(0,c.useMutation)(a=>(0,s.Nq)(e,r.id,a),{onSuccess:async()=>{await t.invalidateQueries(["users"]),o.ZP.success("Users update successfully")},onError:e=>{if(e instanceof l.d7){var r;o.ZP.error(null===(r=e.response)||void 0===r?void 0:r.data.error.message);return}o.ZP.error("something went wrong, please try again!")}});return{handleChange:f,handleSubmit:h,values:x,errors:p,loading:g,role:d,setRole:m,roles:[{value:"1",label:"authenticated"},{value:"3",label:"creator"}]}}(a,r);return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)("h1",{className:"text-xl font-bold",children:"Update user details"}),(0,t.jsx)("p",{children:r.username})]}),(0,t.jsxs)("form",{className:"rounded-md bg-white p-3 shadow-md",action:"",onSubmit:h,children:[(0,t.jsxs)("div",{className:"mb-12 grid grid-cols-1 gap-12  md:grid-cols-2 md:gap-8",children:[(0,t.jsx)("div",{className:"",children:(0,t.jsx)(d.II,{name:"username",value:x.username,onChange:f,error:p.username,label:"Username",variant:"filled"})}),(0,t.jsx)("div",{className:"",children:(0,t.jsx)(d.II,{name:"email",value:x.email,onChange:f,error:p.email,label:"Email address",variant:"filled"})}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("label",{htmlFor:"",className:"mb-2 text-sm",children:"Choose a roles"}),(0,t.jsx)(m.ZP,{value:g,onChange:e=>v({value:null==e?void 0:e.value.toString(),label:null==e?void 0:e.label}),options:y})]})]}),(0,t.jsx)("div",{className:"flex justify-end",children:(0,t.jsx)(d.zx,{loading:b,type:"submit",className:"w-fit text-white",children:"Create creator"})})]})]})}},443:function(e,r,a){"use strict";a.d(r,{zx:function(){return t.default},II:function(){return n.default},gx:function(){return l},ZD:function(){return u}});var t=a(4769);a(9510);var n=a(445);a(9743),a(3402);var s=a(9268);a(6006);let i={outline:"bg-white",filled:"bg-gray-100 dark:bg-primaryBg border-2 border dark:border-gray-500 dark:focus-within:border-primary focus-within:border-primary"};var l=function(e){let{label:r,variant:a,error:t,...n}=e;return(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("label",{htmlFor:"",className:"mb-2 text-sm",children:r}),(0,s.jsx)("textarea",{...n,className:"h-[200px] resize-none  rounded-md px-2 py-3 outline-none ".concat(i[a])}),t&&(0,s.jsx)("small",{className:"mt-1 text-sm text-red-500",children:t})]})};function u(e){let{title:r,value:a,onChange:t,name:n}=e;return(0,s.jsxs)("label",{className:"relative w-fit inline-flex items-center cursor-pointer",children:[(0,s.jsx)("input",{name:n,onChange:t,type:"checkbox",checked:a,className:"sr-only peer"}),(0,s.jsx)("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"}),(0,s.jsx)("span",{className:"ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",children:r})]})}},4737:function(e,r,a){"use strict";var t=a(4214),n=a(8611);let s=t.default.create({baseURL:"".concat(n.env.NEXT_PUBLIC_BASE_URL,"/api"),headers:{"Content-Type":"application/json"}});r.Z=s},9131:function(e,r,a){"use strict";a.d(r,{M1:function(){return s},Nq:function(){return i},Rf:function(){return n},XB:function(){return l}});var t=a(4737);a(8611);let n=async(e,r)=>{let a=await t.Z.get("/users".concat(r||""),{headers:{Authorization:"Bearer ".concat(e)}});return a.data},s=async(e,r)=>{let a=await t.Z.post("/auth/local/register",r);return a.data},i=async(e,r,a)=>{let n=await t.Z.put("/users/".concat(r),a,{headers:{Authorization:"Bearer ".concat(e)}});return n.data},l=async(e,r)=>{let a=await t.Z.delete("/users/".concat(r),{headers:{Authorization:"Bearer ".concat(e)}});return a.data}},4992:function(e,r,a){"use strict";a.d(r,{I:function(){return n}});var t=a(353);let n=t.Ry({email:t.Z_().required("email is required").trim().email("email should be valid"),password:t.Z_().trim().required("password is required"),username:t.Z_().trim().required("username is required")})},4732:function(e,r,a){"use strict";a.d(r,{d7:function(){return s}});var t=a(4214);let{Axios:n,AxiosError:s,CanceledError:i,isCancel:l,CancelToken:u,VERSION:o,all:c,Cancel:d,isAxiosError:m,spread:f,toFormData:h,AxiosHeaders:x,HttpStatusCode:p,formToJSON:b,mergeConfig:g}=t.default}},function(e){e.O(0,[5625,6680,6415,7079,3287,3296,1827,2162,1420,7240,4824,4214,5600,4088,1644,9253,2961,1744],function(){return e(e.s=7838)}),_N_E=e.O()}]);