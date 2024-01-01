import React  from 'react'
import { ARTEM_ROUTE, VLAD_ROUTE } from './config';
import { useRoutes } from 'react-router-dom';
import Artem from '../../pages/Artem';
import Vlad from '../../pages/Vlad';


const MainRouter = () => {
    return useRoutes([
          { path: ARTEM_ROUTE, element: <Artem />,},
          { path: VLAD_ROUTE, element: <Vlad /> },
          // { path: "*", element: <Navigate to={UNIVERSITIES_ROUTE} replace />},
        ]);
  }

export default MainRouter;