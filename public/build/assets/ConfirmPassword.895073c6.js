import{u as l,r as p,j as a,a as s,H as u}from"./app.55e33635.js";import{G as c}from"./GuestLayout.d45ed81d.js";import{T as f,I as w}from"./TextInput.7a048da8.js";import{I as h}from"./InputLabel.c17bf65c.js";import{P as g}from"./PrimaryButton.95ec1347.js";import"./ApplicationLogo.d27e9d97.js";function C(){const{data:e,setData:t,post:o,processing:m,errors:n,reset:i}=l({password:""});p.exports.useEffect(()=>()=>{i("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a(c,{children:[s(u,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(h,{forInput:"password",value:"Password"}),s(f,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d}),s(w,{message:n.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(g,{className:"ml-4",processing:m,children:"Confirm"})})]})]})}export{C as default};
