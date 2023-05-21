import { useState } from 'react';
import './loginUserProfile.css'
import { updateUserProfile } from '../../config/firebase';


const LoginUserProfile = () => {

  const [formData, setFormData] = useState({

    userName: '',
    DOB: '',
    gender: '',
    Contact: ''


  });

  const setState = (key, value) => {
    setFormData({ ...formData, [key]: value })
    console.log('setstate');
  }
  console.log(formData);

   const updateUserProfileRes = async()=>{
    const Res = await updateUserProfile(formData)
    console.log(Res);
  }



  return (
    <div>
      <div className="testbox">
        <div className="child">
          <form>
            <h1>Edit Profile</h1>
            <div className="item">

              <p>Upload a Profile photo</p>
              <input
                type="file"
                onChange={(e) => setState('image', e.target.files)}
               
              />
            </div>
            <div className="item">
              <p>Name</p>
              <div className="name-item">
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setState('userName', e.target.value)}
                  value={formData.userName}
                />
              </div>
            </div>
            <div className="item">
              <p>Date of Birth</p>
              <div className="name-item">
                <input
                  type="date"
                  // placeholder="Name"
                  onChange={(e) => setState('DOB', e.target.value)}
                  value={formData.DOB}
                />
              </div>
            </div>
            <div className="item">
              <p>Gender</p>
              <div className="gender">
                <input
                  type="radio"
                  name="gender"
                  value={formData.gender}
                  // checked='male'                  
                  onChange={(e) => setState('gender', e.target.value)}
                />
                Male
                <br />
                <input
                  type="radio"
                  name="gender"
               
                  value={formData.gender}
                  // checked={formData.gender==='female'}                  
                  onChange={(e) => setState('gender', e.target.value)}
                />
                Female
                <br />
                <input 
                  type="radio" 
                  name="gender" 
                
                  value={formData.gender}
                  // checked={formData.gender==='other'}                  
                  onChange={(e) => setState('gender', e.target.value)}
                /> 
                Other
              </div>
            </div>


            <div className="item">
              <p>Contact</p>
              <input
                type="text"
                placeholder="Phone Number"
              onChange={(e) => setState('Contact', e.target.value)}
              value={formData.Contact}
              />
            </div>

            <div className="btn-block">
              <button
                type="button"
              onClick={
              
                  updateUserProfileRes
                 
              
                }
              >
                Save Changes
              </button>
            </div>
            {/* <div className="btn-block">
              <button
                type="button"
              // onClick={
              //     Navigate('/dashboard')
              // }
              >
                {/* <Link to={'/dashboard'}>Go Back</Link>  */}
            {/* </button>
            </div> */}



          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginUserProfile;