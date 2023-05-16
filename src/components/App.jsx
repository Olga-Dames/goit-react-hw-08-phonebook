import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/login"
              element={
                <RestrictedRoute element={LoginPage} redirectTo="/contacts" />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  element={RegisterPage}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute element={ContactsPage} redirectTo="/login" />
              }
            />
          </Route>
        </Routes>
        <ToastContainer />
      </>
    )
  );
}
