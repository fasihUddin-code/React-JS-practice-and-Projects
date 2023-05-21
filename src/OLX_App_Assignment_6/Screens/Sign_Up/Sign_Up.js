import React from 'react'
import './Sign_Up.css'
import { BiUser } from "react-icons/bi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { AiOutlineLock } from "react-icons/ai";
import { useState } from 'react';
import Swal from 'sweetalert';

import { signUpUser } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';




function Sign_Up(props) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        image: []
    });
    //console.log(formData);

    const setState = (key, value) => {

        setFormData({ ...formData, [key]: value });

    };






    const validation = async () => {

        console.log('run validation function');
        console.log('email input', formData.email);
        console.log('password input', formData.password);
        console.log('username input', formData.userName);

        if (!usernameValidate(formData.userName)) {
            alert('Please enter a valid username')
        }
        else if (!emailValidate(formData.email)) {
            alert('Please enter a valid email address')
        }
        else if (!passwordValidate(formData.password)) {
            alert('Please enter a valid password')

        }
        else {
            console.log("1");
            const response = await signUpUser(formData);

            console.log(response);
            //alert('Redirecting to dashboard')
            if (response.status === "error") {
                Swal({
                    title: 'Error',
                    text: response.error,
                    icon: 'warning',
                });
               // alert(response.error)

            }
            else {
                Swal({
                    title: 'Successfully Registered as a User',
                    text: 'Now Login Your Account',
                    icon: 'success',
                });
                console.log("4", response.status);
                navigate('/login' , {replace:true});
                // props.setScreen("login")
            }

            //props.Setlevel(false)
        }
        setFormData({
            userName: '',
            email: '',
            password: '',
            image: []
        });
        // props.setToggle(true)

    }

    const emailValidate = (emailVal) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //console.log(emailRegex.test(emailVal));
        return emailRegex.test(emailVal)
    }

    const passwordValidate = (passwordVal) => {
        const passwordRegex = /^(?=.*\d.*\d)(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/
        // console.log(passwordRegex.test(passwordVal));
        return passwordRegex.test(passwordVal)
    }

    const usernameValidate = (userNameVal) => {
        const usernameRegex = /^[a-zA-Z ]+$/;
        // console.log(usernameRegex.test(userNameVal));
        return usernameRegex.test(userNameVal)
    }


    return (
        <>
            <div className="container">
                <div className="form-box">
                    <img src='https://msk-olx.web.app/static/media/Logotyp_OLX_.c43bc258c9d976e58c8d.png' ></img>
                    <h1 id="title">Welcome to OLX</h1>
                    <form>
                        <div className="input-group">
                            <div className="input-field" id="nameField">
                                <i>

                                    <BiUser />
                                </i>
                                <input
                                    type="text"
                                    onChange={(e) => { setState('userName', e.target.value) }}
                                    value={formData.userName}
                                    placeholder="Name"
                                />

                            </div>

                            <div className="input-field">
                                <i>
                                    <RxEnvelopeClosed />
                                </i>
                                <input type="email"
                                    onChange={(e) => { setState('email', e.target.value) }}
                                    value={formData.email}
                                    placeholder="Email"
                                />

                            </div>

                            <div className="input-field">
                                <i><AiOutlineLock /></i>
                                <input
                                    type="password"
                                    onChange={(e) => { setState('password', e.target.value) }}
                                    value={formData.password}
                                    placeholder="Password" />

                            </div>


                        </div>
                        <div className="btn-field">
                            <button type="button" id="signupBtn" onClick={validation}>Sign Up</button>

                        </div>
                        <p>Or <a onClick={() =>
                            //props.setScreen("login")
                            navigate('/login',{replace:true})
                        }
                        >
                            Already have an account</a></p>



                    </form>
                </div>


            </div>


        </>

    )
}

export default Sign_Up;