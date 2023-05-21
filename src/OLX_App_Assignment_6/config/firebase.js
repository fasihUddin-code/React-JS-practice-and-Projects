// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
  getFirestore,
  setDoc,
  doc,
  addDoc,
  collection,
  query,
  getDocs,
  //orderBy,
  //startAt,
  //endAt,
  //getDoc,
  where,
  getDoc,
  updateDoc


} from 'firebase/firestore';

import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD00OPVDvqeZXF8jkzKBkIN_gE0kbJzbNo",
  authDomain: "olxdb-714aa.firebaseapp.com",
  projectId: "olxdb-714aa",
  storageBucket: "olxdb-714aa.appspot.com",
  messagingSenderId: "79388162924",
  appId: "1:79388162924:web:deb0c0a76015552f1a1149"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


async function signUpUser(formData) {
  const { userName,
    email,
    password,
    image,
  } = formData


  try {
    //for user creation
    const createUserWithEmailAndPasswordRes = await createUserWithEmailAndPassword(auth, email, password)

    const uid = createUserWithEmailAndPasswordRes.user.uid;
    // console.log("createUserWithEmailAndPasswordRes", createUserWithEmailAndPasswordRes.user.uid);

    let url = "";
    if (image[0]) {
      //for image upload
      const imageName = image[0].name;
      const folderName = "userPics/";
      const imageRef = await ref(storage, folderName + imageName);
      //console.log(imageRef);
      const uploadBytesRes = await uploadBytes(imageRef, image[0]);
      // console.log(uploadBytes);
      url = await getDownloadURL(uploadBytesRes.ref);
      //console.log(url);
    }

    //for database entry
    const res = await setDoc(doc(db, "users", uid),
      {
        name: userName,
        email: email,
        uid: uid,
        profileImage: url


      }
    );

    //console.log("3",res);
    return {
      status: "success",
      res
    };
  }

  catch (error) {
    //console.log(error.message);
    return {
      status: "error",
      error: error.message
    };
  }
  //console.log("firebase signupuUser end");
}

async function signInUser(formData) {
  const { email, password } = formData;
  try {
    const signInWithEmailAndPasswordRes = await signInWithEmailAndPassword(auth, email, password);

    //console.log("signInWithEmailAndPasswordRes", signInWithEmailAndPasswordRes);
    return {
      status: "success"
    };

  }

  catch (error) {
    //console.log(error.message);
    return {
      status: "error",
      error: error.message
    }
  }


}

async function logoutUser() {
  try {
    await signOut(auth);
    return {
      status: "success"
    }

  } catch (error) {
    //console.log(error.message);
    return {
      status: "error",
      error: error.message
    };

  }

}

async function getAllUsersData() {
  try {
    const q = query(collection(db, "users"));
    const querySnapShot = await getDocs(q);

    let arr = [];
    querySnapShot.forEach((doc) => {
      //console.log(doc.id, '=>', doc.data());
      arr.push(doc.data())
    })
    //console.log(arr);
    return {
      status: "success",
      data: arr
    }
  } catch (error) {

    //console.log(error.message);
    return {
      status: "error",
      error: error.message
    };
  }
}


async function postAd(formData) {
  const { title, description, price, image, location } = formData;
  try {
    const { uid } = auth.currentUser;
    // console.log(uid);
    //   console.log(image[0]);

    let url = "";
    if (image[0]) {

      //  console.log('if run');
      //For Ads image upload to Storage


      const imageName = image[0].name;
      const folderName = "adPics/";
      const imageRef = await ref(storage, folderName + imageName);
      //console.log(imageRef);
      const uploadBytesRes = await uploadBytes(imageRef, image[0]);
      // console.log(uploadBytesRes);
      url = await getDownloadURL(uploadBytesRes.ref);
      // console.log(url);

    }

    const addDocRes = await addDoc(collection(db, "ads"), {
      title,
      description,
      price,
      image: url,
      location,
      uid

    });
    return {
      status: "success"
    }



  } catch (error) {
    //console.log(error.message);
    return {
      status: "erorr",
      error: error.message
    };


  }




}

async function getAllAds() {
  try {
    const q = query(collection(db, 'ads'));
    const querySnapShot = await getDocs(q);

    let arr = [];
    let obj = {};
    querySnapShot.forEach((doc) => {
      //  console.log(doc.id, "=>", doc.data());
      obj = { ...doc.data() };
      //  console.log(obj); 
      obj.docId = doc.id;
      // console.log(doc.id);
      arr.push(obj)
      //arr.push(doc.data())


    });
    //console.log(arr);
    return {
      status: "success",
      data: arr
    };

  } catch (error) {
    // console.log(error.message);
    return {
      status: "error",
      error: error.message
    };

  }


}

async function getAdData(searchValue) {
  //console.log(searchValue);

  try {

    // const q = query(collection(db, "ads"),where("title", "==", searchValue));
    const q = query(collection(db, "ads"), where("title", "==", searchValue));


    const querySnapshot = await getDocs(q);
    let adsArr = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      adsArr.push(doc.data());
    });

    return {
      status: 'success',
      data: adsArr
    };
  }
  catch (error) {
    return {
      status: 'error'
    };
  }

}

async function getUserData() {
  const { uid } = auth.currentUser;
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  //console.log('docSnap',docSnap.data());
  return {
    status: 'success',
    data: docSnap.data()
  }
}

async function updateUserProfile(formData) {
  const { image, userName, DOB, gender, Contact } = formData;
  // console.log(formData);
  const { uid, email } = auth.currentUser;
  //auth.currentUser.displayName = userName;


  // console.log(uid);
  try {

    const docRef = doc(db, "users", uid);
    //console.log(docRef);
    const docSnap = await getDoc(docRef);
    //console.log('docSnap',docSnap.data());
    const docData = docSnap.data();

    //console.log(image[0]);

    let url = "";
    if (image[0]) {

      //  console.log('if run');
      //For Ads image upload to Storage
      const imageName = image[0].name;
      const folderName = "users/";
      const imageRef = await ref(storage, folderName + imageName);
      //console.log(imageRef);
      const uploadBytesRes = await uploadBytes(imageRef, image[0]);
      //console.log(uploadBytesRes);
      url = await getDownloadURL(uploadBytesRes.ref);
      ///console.log(url);

    }

    let docObj = docData;
    console.log(docObj);

    const res = await setDoc(doc(db, "users", uid),
      {
        ...docObj,
        name: userName,
        email: email,
        uid: uid,
        profileImage: url,
        DOB: DOB,
        gender: 'Male/Female',
        contact: Contact


      }
    );
    console.log(docObj);
    console.log(res);

    // const addDocRes = await addDoc(collection(db, "users"), {
    //   profileImage: url,
    //   name: userName,
    //   DOB: DOB,
    //   Gender:gender,
    //   Contact:contact,
    //   uid: uid,

    // });
    return {
      status: "success"
    }



  } catch (error) {
    //console.log(error.message);
    return {
      status: "erorr",
      error: error.message
    };


  }


}

async function getLoginAds() {
  const { uid } = auth.currentUser;
  console.log(uid);
  const q = query(collection(db, "ads"), where("uid", "==", uid));
  const querySnapShot = await getDocs(q);
  let arr = [];
  querySnapShot.forEach((doc) => {
    // console.log(doc.id,"==>",doc.data());
    let obj = { ...doc.data() };
    //console.log(obj);
    obj.id = doc.id;
    arr.push(obj)
    console.log("obj", obj);
    console.log("arr", arr)
  })
  return {
    data: arr
  };

}

async function getSpecificAd(params) {
  console.log('firebase function run params value:', params);


  const docRef = doc(db, "ads", params.Id);
  console.log(docRef);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
  //console.log('docSnap',docSnap.data());
  // return {
  //   status: 'success',
  //   data: docSnap.data()
  //   // console.log(data);
  // }




  // // const q = query(collection(db, "ads"), where("docId", "==", params));

  // // //console.log(q);
  // // const querySnapshot = await getDocs(q);
  // // console.log(querySnapshot);
  // // querySnapshot.forEach((doc) => {
  // //   ///console.log('for each run');
  // //   // doc.data() is never undefined for query doc snapshots
  // //   console.log(doc.id, " => ", doc.data());
  // // });

}

async function createFavAds(ads, currentLoginUserUid) {
  console.log('Firebase File Ads', ads);
  console.log('Firebase File currentLoginUserUid', currentLoginUserUid);
  const { title, description, price, image, location, uid } = ads;
  try {

    //for favourite ads data entry
    const addDocRes = await addDoc(collection(db, "favouriteAds"), {
      title,
      description,
      price,
      image,
      location,
      currentLoginUserUid: currentLoginUserUid,
      adCreaterUserUid: uid

    });

    const q = query(collection(db, "favouriteAds"), where("currentLoginUserUid", "==", currentLoginUserUid));
    const querySnapShot = await getDocs(q);
    let arr = [];
    querySnapShot.forEach((doc) => {
      console.log(doc.id,"==>",doc.data());
    
      arr.push(doc.data());
      console.log("arr", arr)
    })

    return {
      status: "success",
      data:arr

    }



  } catch (error) {
    return {
      status: "erorr",
      error: error.message
    };
  }

}

export {
  signUpUser,
  signInUser,
  postAd,
  getAllAds,
  auth,
  getAllUsersData,
  logoutUser,
  getAdData,
  getUserData,
  updateUserProfile,
  getLoginAds,
  getSpecificAd,
  createFavAds

};

