import React from 'react'
import './FacebookPost.css'
import { FaGlobeAsia } from 'react-icons/fa'
import { BiLike } from 'react-icons/bi'

import { IconContext } from "react-icons";
import Emoji from './emoji.png'
// import LikeIcon from './like-icon-removebg-preview.png'
import FbImageLibrary from 'react-fb-image-grid'
//import picture from './image-1.jpg'


function FacebookPost(props) {


  //console.log(props.data[0].images);
  //const images = [picture]
  //console.log(images);
  //console.log(picture);
  //console.log(props);

  return (

    <div className='container-fluid'>
      <div className="container w-100">



        {
          props.data.map((currentElement, index) => {
            console.log(currentElement);
            //console.log(index);
            return (
              <>
                <div className="card mx-auto my-5 w-50">
                  <div className="card-body m-2">
                    <div className="row">
                      <div className="col-lg-1 col-2">
                        <div className="circular-image mt-2">

                          <img className='img-fluid rounded-circle' src={currentElement.thumbnail} />
                        </div>
                      </div>
                      <div className="col-lg-11 col-10 mt-2">

                        <h5 className="card-title mb-0 ">{currentElement.title}</h5>
                        <p className="card-text"><small className="text-muted">Sponsored <FaGlobeAsia size={14} /></small></p>
                      </div>
                    </div>

                    <p className="card-text my-3 ms-3">{currentElement.description}
                    </p>

                  </div>
                  <div>
                    <FbImageLibrary
                      images={currentElement.images}
                      countFrom={4}
                    />
                  </div>
                  <div className='cardFooter d-flex flex-row m-3'>

                    <span>

                      <i className="fa fa-thumbs-up py-1 me-1" aria-hidden="true"></i>
                      <i className="fa fa-heart py-1" aria-hidden="true"></i>
                      {/* <img src="https://banner2.cleanpng.com/20180319/rxw/kisspng-facebook-like-button-facebook-like-button-computer-facebook-new-like-symbol-5ab036a9b8fac7.0338659015214977697577.jpg"/>

<img src="https://banner2.cleanpng.com/20180420/ccw/kisspng-social-media-facebook-love-emoji-facebook-reaction-5ad9f0fe10bc61.6879953015242324460686.jpg" /> */}

                      <img className="ps-1 img-fluid" src={Emoji} />
                    </span>



                    <span className='ps-4 align-self-center cardFooterTextStyle flex-grow-1'>

                      <h6 className='text-left'>Ahmed Raza,waleed</h6>
                    </span>



                    <span className='cardFooterTextStyle align-self-center'>

                      <h6>48 Comments 20 Shares</h6>
                    </span>




                  </div>

                  <hr />
                  <div className='row m-3 cardFooter-2 d-flex'>
                    <div className="col-3">
                    <div class="reaction-buttons">

                      <button class="btn ms-4 like-btn align-self-center">
                        
                        <span className="fa-like-icon" >
                      
                        

                          <BiLike/>
                          
                        
              
                        like
                        </span>

                       

                      </button>
                      
                    </div>

                    </div>
                    <div className="col-3 ">
                      <button class="btn ms-1 align-self-center"><i class='far fa-comment-alt'></i> Comment</button>


                    </div>
                    <div className="col-3">
                      <button class="btn ms-5 align-self-center"><i class='fa fa-share'></i>Share</button>


                    </div>
                    <div className="col-3 text-right pe-5">

                      <img className='img-fluid rounded-circle' src={currentElement.thumbnail} />
                      <i class="fa fa-angle-down"></i>

                    </div>


                  </div>





                </div >








              </>
            )
          })
        }






      </div >
    </div>


  )
}

export default FacebookPost
