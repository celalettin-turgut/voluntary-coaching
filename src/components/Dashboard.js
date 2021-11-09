import React, {useEffect, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useHistory} from 'react-router';
import {auth, db, logout} from '../firebase';
import './Dashboard.css';

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  //const [name, setName] = useState('');
  const history = useHistory();
  console.log(user);
  // const fetchUserName = async () => {
  //   try {
  //     const query = await db
  //       .collection('users')
  //       .where('uid', '==', user?.uid)
  //       .get();
  //     const data = await query.docs[0].data();
  //     setName(data.name);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace('/');
    //fetchUserName();
  }, [user, loading]);

  return (
    <div className='dashboard'>
      <div className='dashboard__container'>
        Logged in as
        <div>{user?.displayName}</div>
        <div>{user?.email}</div>
        <button className='dashboard__btn' onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
