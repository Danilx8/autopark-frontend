import { DRIVERS_PATH, VEHICLES_PATH, ABOUT_PATH, LANDING_PATH } from './config';
import { useRoutes, Navigate, RouteObject } from 'react-router-dom';
import Vehicles from '../../pages/Vehicles';
import About from '../../pages/About';
import Landing from '../../pages/Landing';
import Drivers from '../../pages/Drivers';


const MainRouter = ({ isLoggedIn = false }) => {
  const publicPaths: RouteObject[] = [
    { path: ABOUT_PATH, element: <About/> },
    { path: LANDING_PATH, element: <Landing/> },
    { path: "*", element: <Navigate to={'/'} replace /> },
  ];

  const privatePaths: RouteObject[] = [
    { path: DRIVERS_PATH, element: <Drivers/>},
    { path: VEHICLES_PATH, element: <Vehicles/> }
  ];

  const resultPaths: RouteObject[] = publicPaths;

  if (isLoggedIn) resultPaths.push(...privatePaths);

  return useRoutes(resultPaths);
}

export default MainRouter;