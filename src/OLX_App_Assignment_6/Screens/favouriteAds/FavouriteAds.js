import { useDispatch, useSelector } from "react-redux";
// import { add } from "../../store/favouriteAdsSlice";
import { removeItem } from "../../store/favouriteAdsSlice";


const FavouriteAds = () => {
    const dispatch = useDispatch();
    
    const favouriteAdsItems = useSelector((state) => state.favouriteAdsSlice)
    console.log(favouriteAdsItems);

    const handleRemoveItem = (docId) =>{
        dispatch(removeItem(docId));
    }
    //console.log(favouriteAdsItems);


    // const dispatch = useDispatch()
    

    // favouriteAdsItems.map((item,index)=>{
        
    //     console.log(`item:${item} , index:${index}`);
    // })


    return (
        <div className='userAdsWrapper'>
            <h2>My WhishList/Favourite Ads</h2>

            {/* <p>Value {favouriteAdsItems}</p> */}
            
         
            <br />
            {
                // favouriteAdsItems.map((value, index) => {
                //     const { image, title, price, location,docId  } = value;

                //     return (
                //         <>
                //             <ul className='item' id={value.uid}>
                //                 <li id={value.uid}><img src={image} alt={image} /></li>
                //                 <li id={value.uid}>  {title}</li>
                //                 <li id={value.uid}> {price}</li>
                //                 <li id={value.uid}> {location}</li>
                //                 <li> <button 
                //                             onClick={()=>handleRemoveItem(docId)}
                //                             >Remove item</button></li>
                //             </ul>
                //             <br />
                //         </>
                //     )
                // })
            }

        </div>
    )
}

export default FavouriteAds;