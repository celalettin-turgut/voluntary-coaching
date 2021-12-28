import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import AddAdForm from '../components/AddAdForm';
import Search from '../components/search';
import {auth} from '../firebase';

const Home = () => {
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      return <h1>Loading..</h1>;
    }
    if (user) {
      history.push('/dashboard');
    }
  }, [loading, user, history]);
  return (
    <div>
      <Search />
    </div>
  );
};

export default Home;
