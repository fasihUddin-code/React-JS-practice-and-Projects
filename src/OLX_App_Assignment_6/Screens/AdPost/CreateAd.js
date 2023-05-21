import { useState } from 'react';
import { postAd } from '../../config/firebase';
import Swal from 'sweetalert';
import './CreateAd.css'
import { Link, useNavigate } from 'react-router-dom';



export default function CreateAd(props) {

    const [formData, setformData] = useState({
        title: '',
        description: '',
        price: '',
        location: ''

    });
    console.log(formData);
    const Navigate = useNavigate();

    const setState = (key, value) => {
        setformData({ ...formData, [key]: value });
    };
    const validation = async () => {

        console.log('run validation function');


        if (!titleValidate(formData.title)) {
            alert('Please enter a valid Ad Title')
        }
        else if (!descriptionValidate(formData.description)) {
            alert('Please enter a valid Ad Description')

        }
        else if (!priceValidate(formData.price)) {
            alert('Please enter a valid amount')
        }
        else if (!locationValidate(formData.location)) {
            alert('Please Enter a Valid Location Name.')
        }
        // else if(formData.image.files.length == 0){
        //     alert('Attachment required')

        // }


        else {
            const res = await postAd(formData);

            //console.log(res);
            if (res.status === "error") {
                alert(res.error)
                // Swal({
                //     title: 'Must Filled all fields',
                //     text: res.status,
                //     icon: 'error',
                // });
            }
            else {

                //alert("successfully create a adv");
                Swal({
                    title: 'Successfully create Ad',
                    text: 'Redirect To Dashboard',
                    icon: 'success',
                });
                setformData({
                    title: '',
                    description: '',
                    price: '',
                    location: ''
                });
                Navigate('/dashboard');

            }


            // else {



            // Swal({
            //     title: 'Successfully Login',
            //     text: 'Redirect To Dashboard',
            //     icon: 'success',
            // });

            //     props.setScreen("Dashboard")
            // }
            //props.Setlevel(false)
        }

        // props.setToggle(false)

    }

    const titleValidate = (titleVal) => {
        const titleRegex = /^[a-z\d\-_\s]+$/i;;
        //  console.log(titleRegex.test(titleVal));
        return titleRegex.test(titleVal)
    }

    const descriptionValidate = (descriptionVal) => {
        const descRegex = /^[a-z\d\-_\s]+$/i;
        //   console.log(descRegex.test(descriptionVal));
        return descRegex.test(descriptionVal)
    }

    const priceValidate = (priceVal) => {
        const priceRegex = /^\d+(,\d{3})*(\.\d{1,2})?$/;
        //console.log(priceRegex.test(priceVal));
        return priceRegex.test(priceVal);
    }

    const locationValidate = (locationVal) => {
        const locationRegex = /^[a-z\d\-_\s]+$/i;
        //console.log(locationRegex.test(locationVal));
        return locationRegex.test(locationVal)
    }

    //image file validation



    return (
        <>
            <div>
                <div className="testbox">
                    <div className="child">
                        <form>
                            <h1>Post Your Ad</h1>
                            <div className="item">
                                <p>Ad Title</p>
                                <div className="name-item">
                                    <input
                                        type="text"
                                        placeholder="Ad title"
                                        onChange={(e) => setState('title', e.target.value)}
                                        value={formData.title}
                                    />
                                </div>
                            </div>
                            <div className="item">
                                <p>Description</p>
                                <textarea
                                    rows="3"
                                    onChange={(e) => setState('description', e.target.value)}
                                    value={formData.description}
                                    placeholder='Description'
                                >

                                </textarea>
                            </div>
                            <div className="item">
                                <p>Price</p>
                                <input
                                    type="number"
                                    placeholder="Price"
                                    onChange={(e) => setState('price', e.target.value)}
                                    value={formData.price}
                                />
                            </div>
                            <div className="item">
                                <p>Upload a photo</p>
                                <input
                                    type="file"
                                    onChange={(e) => setState('image', e.target.files)}
                                // value={formData.image}
                                />
                            </div>
                            <div className="item">
                                <p>Location</p>
                                <input
                                    type="text"
                                    placeholder="Location"
                                    onChange={(e) => setState('location', e.target.value)}
                                    value={formData.location}
                                />
                            </div>
                            <div className="btn-block">
                                <button
                                    type="button"
                                    onClick={
                                        validation
                                    }
                                >
                                    Post Now
                                </button>
                            </div>
                            <div className="btn-block">
                                <button
                                    type="button"
                                    // onClick={
                                    //     Navigate('/dashboard')
                                    // }
                                >
                                   <Link to={'/dashboard'}>Go Back</Link> 
                                </button>
                            </div>



                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

