import shoes from '../Dashboard/Images/shoes.png';
import './LoginUserAds.css';

import { getLoginAds } from '../../config/firebase';
import { useState } from 'react';
import { useEffect } from 'react';

const LoginUserAds = () => {

  const [myAds, setMyAds] = useState([]);

  const getLoginAdsRes = async () => {

    const Res = await getLoginAds();
    // console.log(Res.data);
    setMyAds(Res.data);

  }

  useEffect(() => {

    getLoginAdsRes();

  }, [])






  return (
    <div className='userAdsWrapper'>
      <h2>My Ads</h2>
      <br/>
      {
        myAds.map((value, index) => {
          const { image, title, price, location } = value;

          return (
            <>
              <ul className='item' id={value.uid}>
                <li  id={value.uid}><img src={image} alt={image} /></li>
                <li  id={value.uid}>  {title}</li>
                <li  id={value.uid}> {price}</li>
                <li  id={value.uid}> {location}</li>
              </ul>
                <br />
            </>
          )
        })
      }







    </div>
  )
}

export default LoginUserAds;