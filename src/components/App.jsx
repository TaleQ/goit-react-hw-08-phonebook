import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Loader } from './Loader/Loader';
import NotFound from './NotFound/NotFound';
// import { Contacts } from 'pages/Contacts/Contacts';

const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
