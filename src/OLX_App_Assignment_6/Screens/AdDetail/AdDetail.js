import { useState } from 'react';
import adImage from '../Dashboard/Images/shoes.png'
import './AdDetail.css';
import { useParams } from 'react-router-dom';
import { getAllAds, getSpecificAd } from '../../config/firebase';
import { useEffect } from 'react';

const AdDetail = () => {

    const params = useParams();
    const [data, setData] = useState([]);
    console.log(params);

    const getAd = async () => {
        const res = await getSpecificAd(params);
        console.log(res);
        setData(res)
    }

    useEffect(() => {
        getAd();

    }, [])



    return (
        <>
            <h3> Ad details page
            </h3>
        <div className='adDetailsWrapper relative'>

            <div className='absolute'>

                <h2>{data.title}</h2>
                <img src={data.image} />
                <h2>{data.price}</h2>
                <h3>{data.location}</h3>
                <p>{data.description}</p>

            </div>

        </div>
        </>
    )
}

export default AdDetail;