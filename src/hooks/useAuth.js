import { projectAuth } from '../firebase/config';
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [account, setAccount] = useState();

  useEffect(() => {
    projectAuth.onAuthStateChanged((user) => {
      // console.log(user);

      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }

      setAccount(user);
    });
  }, []);

  return { authenticated, account };
};

export default useAuth;
