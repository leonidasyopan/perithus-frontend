import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { useToast } from '../../hooks/toast';

// Material UI imports:
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { FiUserPlus } from 'react-icons/fi';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const classes = useStyles();
  const { addToast } = useToast();
  const history = useHistory();

  const { register, handleSubmit } = useForm();

  const onSubmit = useCallback(
    async (data: RegisterFormData | any) => {
      const dataToRegister = {
        email: data.email,
        username: data.username,
        password: data.password,
      };

      await api.post(`usuario/cadastro`, dataToRegister);
      history.push('/');

      addToast({
        type: 'success',
        title: 'Cadastro realizado!',
        description: 'Você já pode fazer seu login.',
      });
    },
    [addToast, history],
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FiUserPlus />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastre-se
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Usuário"
                name="username"
                autoComplete="lname"
                inputRef={register({
                  required: true,
                  minLength: 4,
                  maxLength: 20,
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Endereço de Email"
                name="email"
                autoComplete="email"
                inputRef={register({
                  required: true,
                  pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/,
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={register({ required: true })}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastre-se
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link href="/" variant="body2">
                Já tem uma conta? Faça seu login!
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Register;
