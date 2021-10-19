import React from 'react';
import { Box } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

const Routes = [
  { path: '/', page: <Box> </Box> },
  { path: '/home', page: <Box> Home </Box> },
  { path: '/login', page: <Login /> },
  { path: '/perfil', page: <Box> perfil </Box> },
  { path: '/cotitulares', page: <Box> cotitulares </Box> },
  { path: '/cotitulares/cadastrar', page: <Box> cadastrar </Box> },
  { path: '/nao-encontrado', page: <Box> erro 404 </Box> },
];

export default function Routers() {
  return (
    <Box>
      <BrowserRouter>
        <Switch>
          {Routes.map((route) => (
            <Route path={route.path} exact>
              {route.page}
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </Box>
  );
}
