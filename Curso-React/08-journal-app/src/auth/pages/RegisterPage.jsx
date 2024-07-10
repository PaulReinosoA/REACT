import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

export const RegisterPage = () => {
  const formData = {
    email: 'paulreinsooares463@gmail.com',
    password: '123456789',
    displayNme: 'Paul Reinoso',
  };

  const formValidations = {
    email: [(value) => value.includes('@'), 'El email debe tener un @'],
    password: [
      (value) => value.length >= 6,
      'El password debe tener mas de 6 caracteres',
    ],
    displayNme: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
  };

  const {
    formState,
    displayNme,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNmeValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <>
      <AuthLayout title="Crear Cuenta">
        <h1>Form valido: {isFormValid ? 'Valido' : 'incorrecto'}</h1>
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre Completo"
                type="text"
                placeholder="Nombre Completo"
                fullWidth
                name="displayNme"
                value={displayNme}
                onChange={onInputChange}
                error={!displayNmeValid}
                helperText={displayNmeValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button type="submit" variant="contained" fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1 }}>Ya tienes una cuenta?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
