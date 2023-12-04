import React from 'react';
import {useAuth} from '../context/authContext';
import {AuthRoutes} from './authRoutes/auth.routes';
import {AppRoutes} from './appRoutes/app.routes';

export default function Routes() {
  const {auth} = useAuth();

  return auth ? <AppRoutes /> : <AuthRoutes />;
}
