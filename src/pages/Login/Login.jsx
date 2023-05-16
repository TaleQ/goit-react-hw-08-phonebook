import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginImg from '../../img/login_bg.jpg';
import { StyledNavLink } from 'pages/Register/Register.styled';
import { authSelectors } from 'redux/auth/selectors';
import { Notify } from 'notiflix';

const theme = createTheme();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const error = useSelector(authSelectors.selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Notify.failure(
        `Did not manage to log in. Check out your email and password`,
        {
          position: 'center-top',
        }
      );
    }
  }, [error]);

  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email: email, password: password }));
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const buttonText = 'Log in';

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${LoginImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'right',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              pt: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#3A526A' }} />
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ width: '100%', mt: 1 }}
            >
              <TextField
                type="email"
                name="email"
                label="Email"
                title="Email should be valid and include '@'"
                value={email}
                onChange={handleChange}
                id="login-email"
                required
                sx={{ width: '100%', mb: '10px' }}
              />
              <TextField
                type={showPassword ? 'text' : 'password'}
                name="password"
                label="Password"
                title="Password should contain at least one lowercase letter(a - z), one uppercase letter(A - Z) and one numeric value(0-9). The total length should be greater than or equal to 8 and less or equal to 20"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$"
                value={password}
                onChange={handleChange}
                id="login-password"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ width: '100%', marginBottom: '10px' }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {buttonText.toUpperCase()}
              </Button>
              <StyledNavLink to="/register">
                Don't have an account? Sign Up
              </StyledNavLink>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
