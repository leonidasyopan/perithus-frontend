import React, { useCallback, useState } from 'react';
import api from '../../services/api';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

// Material UI imports:
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { FiLogIn } from 'react-icons/fi';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FailAlert from '../../toast/FailAlert';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://leonidasyopan.com/">
        Leonidas Yopan, All Rights Reserved.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const { register, handleSubmit } = useForm();

  const [loginInfo, setLoginInfo] = useState('');

  const [status, setStatusBase] = React.useState(false);

  const onSubmit = useCallback(
    async (data: LoginFormData | any) => {
      try {
        const dataToLogin = {
          email: data.email,
          password: data.password,
        };

        await api.post(`usuario/login`, dataToLogin).then((response) => {
          localStorage.setItem('@Perithus:username', response.data.username);

          setLoginInfo(response.data.username);
        });

        history.push('/dashboard');
      } catch (err) {
        console.log(err);
        setStatusBase(true);
      }
    },
    [history],
  );

  return (
    <Container component="main" maxWidth="xs">
      {status === true ? <FailAlert /> : null}

      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FiLogIn />
        </Avatar>
        <Typography component="h1" variant="h5">
          Faça Seu Login
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            type="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={register({
              required: true,
              pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/,
            })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={register({ required: true })}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container justify="center">
            <Link href="/register" variant="body2">
              {'Não tem uma conta? Cadastre-se!'}
            </Link>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Login;
