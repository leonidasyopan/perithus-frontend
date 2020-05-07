import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  // const onFinish = values => {
  //   console.log('Received values of form: ', values);
  // };

  const { login } = useAuth();
  const history = useHistory();

  const handleLogin = useCallback(
    async (data: LoginFormData) => {
      try {
        // await login({
        //   email: data.email,
        //   password: data.password,
        // });

        history.push('/dashboard');
      } catch (err) {
        console.log(err);
      }
    },
    [login, history],
  );

  return <h1>Login</h1>;
};

export default Login;
