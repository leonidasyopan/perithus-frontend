import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import Button from '@material-ui/core/Button';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
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

  return (
    <Button variant="contained" color="primary">
      Bem-vindo
    </Button>
  );
};

export default Login;
