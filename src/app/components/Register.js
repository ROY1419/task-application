import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {

    const navigate = useNavigate();

    const userSubmit = async (formdata) => {
        console.log(formdata);
        const response = await fetch('http://localhost:5001/user/add', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status === 200) {
            console.log('success');
            Swal.fire({
                icon: 'success',
                title: 'Well Done 👍',
                text: 'You have done a wonderfull Job!!'
            })
            navigate('/login');
        } else {
            console.log(response.status);
            console.log('something went wrong');
        }
    }

    return (
        <div>
            <Formik initialValues={{
                username: '',
                password: '',
                email: '',
            }}
                onSubmit={userSubmit}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        {/* <TextField label="Username" id="username" onChange={handleChange} value={values.username} />
                        <TextField label="Email Address" id="email" onChange={handleChange} value={values.email} />
                        <TextField type="password" label="Password" id="password" onChange={handleChange} value={values.password} /> */}
                        <div className="bg-white flex flex-col items-stretch">

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
                                    <form>
                                        <TextField label="Username" id="username" onChange={handleChange} value={values.username} />



                                        <TextField label="Email Address" id="email" onChange={handleChange} value={values.email} />


                                        <TextField type="password" label="Password" id="password" onChange={handleChange} value={values.password} />

                                    </form>
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
                                        <Button type='submit'>login</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Register;