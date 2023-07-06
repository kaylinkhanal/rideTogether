import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation'
import styles from '@/styles/users.module.css'

const Profile = () => {
    const router = useRouter()
  //need a state to store the user details we needed
  const [userDetails, setUserDetails] = useState({});

  //need data from reducer
  const { id } = useSelector((state) => state.user);

  //need to fetch the data by id

  const fetchUserDetails = async () => {
    try {
      const res = await fetch("http://localhost:3001/users/" + id);
      const data = await res.json();
      setUserDetails(data.userList);
    } catch (err) {
      alert("fetch failed");
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
        <button onClick={() => router.push('/')}>Back</button>
      <div className={styles.profile}>
        <div className={styles.photo}></div>
       
      </div>
      <div className={styles.userDetails}>
        <table className={styles.details}>
            <tr>
                <td className={styles.detail} >Email : </td>
                <td> className={styles.detail} {userDetails.email}</td>
            </tr>
            <tr>
                <td className={styles.detail}>PhoneNumber :  </td>
                <td className={styles.detail}>{userDetails.phoneNumber}</td>
            </tr>
           
        </table>
        
        </div>
    </>
  );
};

export default Profile;
