import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import Search from '../components/search';
import {auth} from '../firebase';
import Show from '../components/show';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);

  const handleChange = (projects) => {
    setProjects(projects);
  };

  useEffect(() => {
    if (loading) {
      return <h1>Loading..</h1>;
    }
    // if (user) {
    //   history.push('/dashboard');
    // }
  }, [loading, user, history]);
  return (
    <div>
      <Search projects={projects} handleChange={handleChange} />
      <Show projects={projects} />
    </div>
  );
};

export default Home;
