import OlxLogo from './Images/olx_logo.png';
import UserImg from './Images/pic3.jpg';
import AdImg from './Images/ad1.jpg';
import './Dashboard.css';
import { BsChevronDown, BsFillGearFill } from 'react-icons/bs';
import { MdLocationOn ,MdOutlineFavoriteBorder} from 'react-icons/md';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { BiMessage, BiUser, BiHelpCircle,BiDetail } from 'react-icons/bi';
import { FaRegBell } from 'react-icons/fa';
import { FiPlus, FiLogOut } from 'react-icons/fi';
import { CgCloseR } from 'react-icons/cg';
import { AiFillStar } from 'react-icons/ai';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { useState, useEffect } from 'react';
//import CreateAd from '../AdPost/CreateAd';
import { getAllAds, getUserData, logoutUser, auth,createFavAds } from '../../config/firebase';
import { useNavigate, Link } from 'react-router-dom';
import AdDetail from '../AdDetail/AdDetail';

import { add, removeItem } from '../../store/favouriteAdsSlice';
import { useDispatch,useSelector } from 'react-redux';







function Dashboard() {

    const navigate = useNavigate();


    const dispatch = useDispatch();

    //Get State data from reduxSTATE    
    const favouriteAdsItems = useSelector((state)=>state.favouriteAdsSlice)
    
    //console.log(favouriteAdsItems);

    //////////////////////


    const [adsData, setAdsData] = useState([]);
    ///const [usersData, setUsersData] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [currentUserData, setCurrentUserData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [matchedObject, setMatchedObject] = useState([]);
    // const [ stateImage, setStateImage ] =useState(false);

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
     useEffect(() => {
            document.body.className = theme;
          }, [theme]);


    //const currentUserUid = auth.currentUser.uid;
    //console.log(currentUserUid);

    //

   

    const handleClassNameToggle = () => {
        setIsActive(!isActive);
        // const currentUser = userDataArr.find(userDataArr == currentUserUid)
        ///console.log(currentUser);
    }

    // const [screen, setScreen] = useState("Dashboard")


    // useEffect(() => {
    //     fetch("https://dummyjson.com/products")
    //         .then((response) => response.json())
    //         .then((response) => setData(response.products))

    // }, [])


    const filteredAds = async () => {
        console.log('filter function run');



        if (searchValue !== '') {

            setMatchedObject(adsData.filter(obj => obj.title.toLowerCase() === searchValue.toLowerCase()))
            console.log(matchedObject);
        }
        else {
            alert('Type some text');
        }


    }

    const getAllAdsData = async () => {
        const response = await getAllAds();
        //console.log("Dashboard screen get All Ads response",response.data);
        setAdsData(response.data)

    }

   // send data to redux
    const handleAddItem = (ads) =>{
         console.log('ads'+ads)
         
        // dispatch(add(ads)); 

    }

    const getUserDataRes = async () => {
        const res = await getUserData();
        //console.log(res.data);
        setCurrentUserData(res.data)
    }

    useEffect(() => {
        getAllAdsData();
        //getAllUsersDataRes();
        getUserDataRes();

    }, [])




    return (
        <>

            {/* {
                screen === "AdPost" && <CreateAd setScreen={setScreen} />

            } */}





            {/* <!-- Header section Start --> */}
            {/* <!-- ===================* NavBar *========================= --> */}
            <div className={`header ${theme}`}>
                <div className="navbar">

                    <img src={OlxLogo} alt="olx_logo" />

                    <div className="country_select" id="country">
                        <div className="select">
                            <p id="text">Select Your Country</p>
                            <i id="moving"> <BsChevronDown /></i>
                        </div>

                        <ul className="option_box" id="list">
                            <li className="option"
                            // onClick={countrySelection('USA')}
                            >
                                <i><MdLocationOn /></i>
                                <p>USA</p>
                            </li>
                            <li className="option"
                            //onClick={countrySelection('Pakistan')}
                            >
                                <i><MdLocationOn /></i>
                                <p>Pakistan</p>
                            </li>
                            <li className="option"
                            //onClick={countrySelection('Australia')}
                            >
                                <i><MdLocationOn /></i>
                                <p>Australia</p>
                            </li>
                            <li className="option"
                            //onClick={countrySelection('Saudi Arabia')}
                            >
                                <i><MdLocationOn /></i>
                                <p>Saudi Arabia</p>
                            </li>
                            <li className="option"
                            //onClick={countrySelection('UAE')}
                            >
                                <i><MdLocationOn /></i>
                                <p>UAE</p>
                            </li>

                        </ul>

                    </div>

                    <div className="search_box">
                        <input
                            type="text"
                            className="searchClass"
                            id="searchId"
                            placeholder="Find Cars, Mobile phones and more"
                            onChange={(e) => setSearchValue(e.target.value)}
                            value={searchValue}
                        />


                        <i onClick={filteredAds}>
                            <RxMagnifyingGlass /></i>


                    </div>

                    <div className="language">

                        <p id="eng_tag">English</p>
                        <ul className="eng_urdu">
                            <li
                            //{onClick=langaugeHandler('English')}
                            >
                                English</li>
                            <li
                            //onClick={langaugeHandler('اردو')}
                            >
                                اردو</li>
                        </ul>
                    </div>

                    <div className="message">
                        <i><BiMessage /></i>
                    </div>

                    <div className="message">
                        <i><FaRegBell /></i>
                    </div>

                    <div className="your_logo">
                        <div onClick={handleClassNameToggle} className="girl_img" id="girl_img_id">
                            <img src={currentUserData.profileImage} alt="Image" />
                        </div>

                        <div className={`dropdown ${isActive ? 'block_div' : ''}`} id="dropdown_Id">
                            <div className="name_img">

                                <img src={currentUserData.profileImage} alt="Image" />
                                <p>
                                    {currentUserData.name}

                                </p>


                                <Link to={'/dashboard/editProfile'}>Edit/view Login User Profile</Link>
                            </div>


                            <ul>
                                <li>
                                    <i><BiUser /></i>
                                    <p>My Account</p>
                                </li>
                                <li>
                                    <i><HiOutlineDocumentDuplicate /></i>
                                    <p>
                                        <Link to={'/dashboard/userAds'}>My Ads</Link>
                                    </p>

                                </li>
                                <hr />
                                <li>
                                    <i><BiHelpCircle /></i>
                                    <p>
                                    <Link to={'/dashboard/favouriteAds'}>My WhishList</Link>
                                    </p>
                                </li>

                                <li>
                                    <i><BsFillGearFill /></i>
                                    <p>Setting</p>
                                </li>
                                <hr />
                                <li>
                                    <i><FiLogOut /></i>
                                    <p onClick={
                                        async () => {
                                            await logoutUser();
                                            navigate('/login', {replace:true});
                                        }}>
                                        Log Out</p>
                                </li>
                            </ul>
                        </div>


                    </div>

                    <div className="sellBtn">

                        {/* <button onClick={()=>setScreen("AdPost")}> */}
                        <button onClick={() => {
                            ///props.setScreen('AdPost') 
                            navigate('/dashboard/createAd')
                        }
                        }>

                            <i><FiPlus /></i>
                            <p>SELL</p>
                        </button>
                    </div>
                    {/* <p>Favourite items: {favouriteAdsItems.length}</p> */}

                        {/* <button onClick={toggleTheme}>Theme Change</button> */}


                </div>

            </div>
            {/* <!-- Header section End --> */}

            {/* <!-- ===================* Ad-1 Section *========================= --> */}
            <section className="ad_img">
                <img src={AdImg} alt="advertise-image" />
                <i id="ad_close_icon"><CgCloseR /></i>
            </section>

            {/*Product Ads section */}
            <div className="gallery">

                {
                    searchValue ? matchedObject.map((currentElement, index) => {
                        const { title, description, price, image, location } = currentElement;

                        return (
                            <>

                                <div className="content" key={index}>
                                    <img src={image} alt="" />
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                    <h6>{price}</h6>
                                    <ul className="rating">
                                        <li><i className="fa checked"><AiFillStar /> </i></li>
                                        <li><i className="fa checked"><AiFillStar /> </i></li>
                                        <li><i className="fa checked"><AiFillStar /> </i></li>
                                        <li><i className="fa checked"><AiFillStar /> </i></li>
                                        <li><i className='fa'><AiFillStar /> </i></li>

                                    </ul>
                                    <button className="Buy-1">Buy Now</button>
                                </div>


                            </>
                        )

                    })

                        :
                        (
                            adsData.map((currentElement, index) => {
                                const { title, description, price, image, location,docId } = currentElement;


                                return (
                                    <>

                                        <div 
                                            className="content" 
                                            key={index}
                                            
                                        >
                                            <i className='favourite_itemBtn'
                                            onClick={
                                                ()=>handleAddItem(currentElement)
                                            }
                                            
                                            
                                            >
                                                <MdOutlineFavoriteBorder/></i>
                                            <i 
                                                className='favourite_itemBtn'
                                                onClick={
                                                
                                                    ()=> {
                                                        
                                                        navigate(`adDetails/${docId}`)
                                                    }    
                                                }
                                            ><BiDetail/></i>
                                           
                                            
                                            <img src={image} alt="" />
                                            <h3>{title}</h3>

                                            <p>{description}</p>
                                            <h6>{price}</h6>
                                            <ul className="rating">
                                                <li><i className="fa checked"><AiFillStar /> </i></li>
                                                <li><i className="fa checked"><AiFillStar /> </i></li>
                                                <li><i className="fa checked"><AiFillStar /> </i></li>
                                                <li><i className="fa checked"><AiFillStar /> </i></li>
                                                <li><i className='fa'><AiFillStar /> </i></li>

                                            </ul>
                                            <button className="Buy-1">Buy Now</button>
                                        </div>


                                    </>
                                )
                            })
                        )
                }
            </div>




        </>
    )
}

export default Dashboard;