// import { Button, TextField } from "@mui/material";
// import React from "react";
// import { Formik } from "formik";
// import Swal from "sweetalert2";
// import * as Yup from 'yup';
// import './Login';

// const Signup = () => {
//     // 1. Create a form object which should match with model fields
//     const userForm = {
//         username: "",
//         email: "",
//         contact: "",
//         age: 0,
//         password: "",
//     };

//     // 2. Create a function for form submission
//     const userSubmit = (formdata) => {
//         console.log(formdata);
//         fetch("http://localhost:5001/user/add", {
//             method: "POST",
//             body: JSON.stringify(formdata), //convert javascript to json
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         }).then((res) => {
//             if (res.status === 200) {
//                 console.log("data saved");
//                 Swal.fire({
//                     icon: "success",
//                     title: "Success",
//                     text: "Registered Successfully!!👍",
//                 });
//             }
//         });
//     };


//     const formSchema = Yup.object().shape({
//         username: Yup.string()
//             .min(2, 'Too Short Username!')
//             .max(5, 'Too Long Username!')
//             .required('Username is Required'),
//         email: Yup.string().email('Invalid email').required('Required'),
//         password: Yup.string().required('Required')
//             .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'),

//     });

//     return (
//         <div className="container">
//             <h1>Signup Here</h1>
//             <hr className="mb-5" />

//             <Formik initialValues={userForm} onSubmit={userSubmit}
//                 validationSchema={formSchema}
//             >
//                 {({ handleSubmit, handleChange, values, errors, touched }) => (
//                     <form onSubmit={handleSubmit}>
//                         {/* <div className="items-start bg-white flex w-[714px] max-w-full flex-col mt-16 mb-32 px-11 py-12 rounded-xl max-md:my-10 max-md:px-5">
//                             <div className="justify-center items-stretch flex gap-5 self-start">
//                                 <div className="text-black text-lg font-medium tracking-wide grow whitespace-nowrap">
//                                     Not registered<span className="">?</span>
//                                 </div>
//                                 <div className="text-slate-500 text-lg font-bold leading-5 grow whitespace-nowrap self-start">
//                                     Sign up
//                                 </div>
//                             </div>
//                             <div className="text-neutral-900 text-4xl font-medium leading-[59.86px] tracking-wider mt-2">
//                                 Log in
//                             </div>
//                             <div className="text-neutral-900 text-opacity-70 text-base font-medium tracking-wide whitespace-nowrap rounded border border-[color:var(--Stroke,#E7E7E7)] bg-slate-50 self-stretch justify-center mt-4 pl-5 pr-16 py-6 border-solid items-start max-md:max-w-full max-md:pr-5">
//                                 Michal.mosiak12@gmail.com
//                             </div>
//                             <div className="text-neutral-900 text-opacity-70 text-base font-medium tracking-wide whitespace-nowrap rounded border border-[color:var(--Stroke,#E7E7E7)] bg-slate-50 self-stretch justify-center mt-5 pl-5 pr-16 py-6 border-solid items-start max-md:max-w-full max-md:pr-5">
//                                 Create password
//                             </div>
//                             <div className="text-neutral-900 text-opacity-70 text-base font-medium tracking-wide whitespace-nowrap rounded border border-[color:var(--Stroke,#E7E7E7)] bg-slate-50 self-stretch justify-center mt-5 pl-5 pr-16 py-6 border-solid items-start max-md:max-w-full max-md:pr-5">
//                                 Confirm password
//                             </div>
//                             <div className="items-stretch self-stretch flex w-full justify-between gap-5 mt-7 max-md:max-w-full max-md:flex-wrap">
//                                 <div className="items-stretch flex justify-between gap-1">
//                                     <img
//                                         loading="lazy"
//                                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/750217508e3768af801b4c4c74aa1b4c416c6473960391c90b8632a484649eb8?apiKey=ea1f72652410428d9e2577f04ade1630&"
//                                         className="aspect-[0.88] object-contain object-center w-[21px] overflow-hidden shrink-0 max-w-full"
//                                     />
//                                     <div className="text-pink-500 text-base tracking-wide self-center grow shrink basis-auto my-auto">
//                                         <span className="font-medium text-xs">I accept Co. Name</span>{" "}
//                                         <span className="font-medium text-pink-500">
//                                             Terms & Conditions
//                                         </span>
//                                     </div>
//                                 </div>
//                                 <div className="text-pink-500 text-base font-medium tracking-wide">
//                                     Forgot Password <span className="">?</span>
//                                 </div>
//                             </div>
//                             <div className="text-white text-xl font-medium leading-6 whitespace-nowrap border bg-violet-500 self-stretch justify-center items-center mt-7 px-16 py-4 rounded-[40px] border-solid border-slate-300 max-md:max-w-full max-md:px-5">
//                                 Log In
//                             </div>
//                         </div> */}
//                         <TextField
//                             label="Username"
//                             variant="outlined"
//                             className="w-100 mb-4"
//                             id="username"
//                             onChange={handleChange}
//                             value={values.username}
//                             helperText={touched.username ? errors.username : ''}
//                             error={Boolean(errors.username && touched.username)}
//                         />

//                         <TextField
//                             label="Email"
//                             variant="outlined"
//                             className="w-100 mb-4"
//                             id="email"
//                             onChange={handleChange}
//                             value={values.email}
//                             helperText={touched.email ? errors.email : ''}
//                             error={Boolean(errors.email && touched.email)}
//                         />
//                         <TextField
//                             label="Password"
//                             variant="outlined"
//                             className="w-100 mb-4"
//                             id="password"
//                             onChange={handleChange}
//                             value={values.password}
//                             helperText={touched.password ? errors.password : ''}
//                             error={Boolean(errors.password && touched.password)}
//                         />

//                         <Button type="submit" variant="contained">
//                             Submit
//                         </Button>
//                     </form>
//                 )}
//             </Formik>
//         </div>
//     );
// };

// // formik
// // 4274=>github id
// export default Signup;





import * as React from "react";

function MyComponent(props) {
    return (
        <div className="bg-white flex flex-col items-stretch">
            <div className="backdrop-blur-[25px] bg-gray-50 flex w-full flex-col items-center pt-6 pb-4 px-16 border-b-black border-b-opacity-10 border-b border-solid max-md:max-w-full max-md:px-5">
                <div className="items-stretch flex w-full max-w-[1200px] justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/01ef712a960f32bb9038e0faa20f60b2b0a3694e76e440c671d635d05d52a1c8?apiKey=ea1f72652410428d9e2577f04ade1630&"
                            className="aspect-square object-contain object-center w-[60px] fill-violet-500 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="items-stretch self-center flex justify-between gap-5 my-auto p-4 max-md:max-w-full max-md:flex-wrap">
                            <div className="text-pink-500 text-sm font-medium leading-4 grow whitespace-nowrap">
                                For brands
                            </div>
                            <div className="text-neutral-600 text-base leading-4">
                                For creators
                            </div>
                            <div className="text-neutral-600 text-sm leading-4">Pricing</div>
                            <div className="text-neutral-600 text-sm leading-4">
                                Contact us
                            </div>
                            <div className="text-neutral-600 text-sm leading-4 whitespace-nowrap">
                                Blogs
                            </div>
                        </div>
                    </div>
                    <div className="items-center self-center flex justify-between gap-5 my-auto pl-7 max-md:pl-5">
                        <div className="flex items-stretch gap-1.5 my-auto">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b58e8a5b6926455e37a8dcad0fb88b59a24edc1a9382c28956dc0d0767db0a82?apiKey=ea1f72652410428d9e2577f04ade1630&"
                                className="aspect-[0.94] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-neutral-600 text-sm leading-4 grow whitespace-nowrap self-start">
                                Sign in
                            </div>
                        </div>
                        <div className="items-stretch self-stretch flex justify-between gap-4">
                            <div className="text-violet-500 text-sm leading-4 whitespace-nowrap justify-center items-stretch shadow-2xl bg-white grow px-11 py-3.5 rounded-[32px] max-md:px-5">
                                Login
                            </div>
                            <div className="text-white text-sm leading-4 whitespace-nowrap justify-center items-stretch shadow-2xl bg-pink-500 grow px-5 py-3.5 rounded-[32px] max-md:pl-5">
                                Book a Demo
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
                <div className="items-start bg-white flex w-[714px] max-w-full flex-col mt-16 mb-32 px-11 py-12 rounded-xl max-md:my-10 max-md:px-5">
                    <div className="justify-center items-stretch flex gap-5 self-start">
                        <div className="text-black text-lg font-medium tracking-wide grow whitespace-nowrap">
                            Not registered<span className="">?</span>
                        </div>
                        <div className="text-slate-500 text-lg font-bold leading-5 grow whitespace-nowrap self-start">
                            Sign up
                        </div>
                    </div>
                    <div className="text-neutral-900 text-4xl font-medium leading-[59.86px] tracking-wider mt-2">
                        Log in
                    </div>
                    <div className="text-neutral-900 text-opacity-70 text-base font-medium tracking-wide whitespace-nowrap rounded border border-[color:var(--Stroke,#E7E7E7)] bg-slate-50 self-stretch justify-center mt-4 pl-5 pr-16 py-6 border-solid items-start max-md:max-w-full max-md:pr-5">
                        Michal.mosiak12@gmail.com
                    </div>
                    <div className="text-neutral-900 text-opacity-70 text-base font-medium tracking-wide whitespace-nowrap rounded border border-[color:var(--Stroke,#E7E7E7)] bg-slate-50 self-stretch justify-center mt-5 pl-5 pr-16 py-6 border-solid items-start max-md:max-w-full max-md:pr-5">
                        Create password
                    </div>
                    <div className="text-neutral-900 text-opacity-70 text-base font-medium tracking-wide whitespace-nowrap rounded border border-[color:var(--Stroke,#E7E7E7)] bg-slate-50 self-stretch justify-center mt-5 pl-5 pr-16 py-6 border-solid items-start max-md:max-w-full max-md:pr-5">
                        Confirm password
                    </div>
                    <div className="items-stretch self-stretch flex w-full justify-between gap-5 mt-7 max-md:max-w-full max-md:flex-wrap">
                        <div className="items-stretch flex justify-between gap-1">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/750217508e3768af801b4c4c74aa1b4c416c6473960391c90b8632a484649eb8?apiKey=ea1f72652410428d9e2577f04ade1630&"
                                className="aspect-[0.88] object-contain object-center w-[21px] overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-pink-500 text-base tracking-wide self-center grow shrink basis-auto my-auto">
                                <span className="font-medium text-xs">I accept Co. Name</span>{" "}
                                <span className="font-medium text-pink-500">
                                    Terms & Conditions
                                </span>
                            </div>
                        </div>
                        <div className="text-pink-500 text-base font-medium tracking-wide">
                            Forgot Password <span className="">?</span>
                        </div>
                    </div>
                    <div className="text-white text-xl font-medium leading-6 whitespace-nowrap border bg-violet-500 self-stretch justify-center items-center mt-7 px-16 py-4 rounded-[40px] border-solid border-slate-300 max-md:max-w-full max-md:px-5">
                        Log In
                    </div>
                </div>
            </div>
        </div>
    );
}