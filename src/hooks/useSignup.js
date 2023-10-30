import { useEffect, useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [isCanceled, setIsCanceled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error('Could not complete signup');
      }

      //add displayname
      await res.user.updateProfile({ displayName });

      //dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user });

      //update state
      if (!isCanceled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error) {
      if (!isCanceled) {
        console.log(error.message);
        setError(error.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCanceled(true);
  }, []);

  return { error, isPending, signup };
};
