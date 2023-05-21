import React from 'react'
import '../Sign_Up/Sign_Up.css'
import { RxEnvelopeClosed } from "react-icons/rx";
import { AiOutlineLock } from "react-icons/ai";
import { useState } from 'react';
import Swal from 'sweetalert';
import { signInUser } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';





function Sign_In(props) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const setState = (key, value) => {
        setFormData({ ...formData, [key]: value })

    }


    const validation = async () => {

        console.log('run validation function');
        console.log('email input', formData.email);
        console.log('password input', formData.password);
        //console.log('username input', userNameVal);


        if (!emailValidate(formData.email)) {
            alert('Please enter a valid email address')
        }
        else if (!passwordValidate(formData.password)) {
            alert('Please enter a valid password')

        }
        else {
            const response = await signInUser(formData)
            console.log(response);

            if (response.status === "error") {
                Swal({
                    title: 'UnSuccessfully Login',
                    text: response.error,
                    icon: 'error',
                });
            }

            else {


                alert('Redirecting to dashboard')
                Swal({
                    title: 'Successfully Login',
                    text: 'Redirect To Dashboard',
                    icon: 'success',
                });

                //props.setScreen("Dashboard");
                navigate('/dashboard',{replace:true});
            }
            //props.Setlevel(false)
        }
        setFormData({
            email: '',
            password: ''
        });
        // props.setToggle(false)

    }

    const emailValidate = (emailVal) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log(emailRegex.test(emailVal));
        return emailRegex.test(emailVal)
    }

    const passwordValidate = (passwordVal) => {
        const passwordRegex = /^(?=.*\d.*\d)(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/
        console.log(passwordRegex.test(passwordVal));
        return passwordRegex.test(passwordVal)
    }


    return (
        <>
            <div className="container">
                <div className="form-box">
                    <img src='https://msk-olx.web.app/static/media/Logotyp_OLX_.c43bc258c9d976e58c8d.png' ></img>
                    <h1 id="title">Welcome to OLX</h1>
                    <form>
                        <div className="input-group">


                            <div className="input-field">
                                <i>
                                    <RxEnvelopeClosed />
                                </i>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    onChange={(e) => { setState('email', e.target.value) }}
                                    value={formData.email}
                                />

                            </div>

                            <div className="input-field">
                                <i><AiOutlineLock /></i>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => { setState('password', e.target.value) }}
                                    value={formData.password}
                                />

                            </div>


                        </div>
                        <div className="btn-field">

                            <button type="button" id="signinBtn" onClick={validation}>Login</button>
                        </div>
                        <p>Or <a onClick={() =>
                            //props.setScreen("signup")
                            navigate('/signup' , {replace:true})

                        }
                        >
                        Register Now!</a></p>



                    </form>
                </div>


            </div>






        </>

    )
}

export default Sign_In