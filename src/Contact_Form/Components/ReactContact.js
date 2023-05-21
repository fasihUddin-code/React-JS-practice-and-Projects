import React from 'react'
import '../contactForm.css'
import { useState } from 'react'

const ReactContact = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        message: ""
    });

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        //console.log(`name${name} : value${value}`); 
        setUser({
            ...user,
            [name]: value

        });
        //console.log(user);

    };

    const postData = async (e) => {
        e.preventDefault();

        const { name, email, phoneNumber, address, message } = user;

        if (name && email && phoneNumber && address && message) {
            const res = await fetch("https://contact-form-ff58a-default-rtdb.firebaseio.com/contactFormRecord.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({

                        name,
                        email,
                        phoneNumber,
                        address,
                        message
                    })


                })

            if (res) {
                setUser({
                    name: "",
                    email: "",
                    phoneNumber: "",
                    address: "",
                    message: ""
                })
                alert("Data Stored Successfully")
            }
        }
        else {
            alert("Please Fill All the Fields")
        }




    }

    return (

        <>

            <h3>Contact Form</h3>

            <div className="container">
                <form method='POST'>
                    <label >Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name.."
                        value={user.name}
                        onChange={getUserData}
                        autoComplete='off'
                    />

                    <label >Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email.."
                        value={user.email}
                        onChange={getUserData}

                        autoComplete='off' />

                    <label >Phone Number</label>
                    <input
                        type="text"
                        id="phone number"
                        name="phoneNumber"
                        placeholder="Your Phone Number..."
                        value={user.phoneNumber}
                        onChange={getUserData}

                        autoComplete='off' />

                    <label >Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Your Address.."
                        value={user.address}
                        onChange={getUserData}

                        autoComplete='off' />

                    <label>Message</label>
                    <textarea
                        name="message"
                        id="subject"
                        placeholder="Your message here..."
                        value={user.message}
                        onChange={getUserData}

                        style={{ height: 200 }}>

                    </textarea>

                    <input type="submit" value="Submit" onClick={postData} />
                </form>
            </div>


        </>
    )
}

export default ReactContact