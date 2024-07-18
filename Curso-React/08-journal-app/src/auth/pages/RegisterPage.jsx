import { Link as RouterLink } from 'react-router-dom';
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startRegisterWithEmailPassword } from '../../store/auth/thunks';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const formData = {
    email: '',
    password: '',
    displayName: '',
  };

  const formValidations = {
    email: [(value) => value.includes('@'), 'El email debe tener un @'],
    password: [
      (value) => value.length >= 6,
      'El password debe tener mas de 6 caracteres',
    ],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
  };

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === 'checking',
    [status],
  );

  const [formSubmited, setformSubmited] = useState(false);

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmited(true);
    if (!isFormValid) return;
    // console.log(formState);
    dispatch(startRegisterWithEmailPassword(formState));
  };

  return (
    <>
      <AuthLayout title="Crear Cuenta">
        {/* <h1>Form valido: {isFormValid ? 'Valido' : 'incorrecto'}</h1> */}
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre Completo"
                type="text"
                placeholder="Nombre Completo"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmited}
                helperText={displayNameValid}
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
                error={!!emailValid && formSubmited}
                helperText={emailValid}
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
                error={!!passwordValid && formSubmited}
                helperText={passwordValid}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid display={!!errorMessage ? '' : 'none'} item xs={12} sm={12}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button
                  disabled={isCheckingAuthentication}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
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
