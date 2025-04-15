import { createBrowserRouter } from "react-router";

import Home from './home';
import About from './about';
import Contact from './contact';
import Projects from './projects';

import Login from '../auth/login';
import NotFound from './NotFound';

import Root from '.';

export default createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: '/home',
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/projects',
        Component: Projects,
      },
      {
        path: '/contact',
        Component: Contact,
      },
      {
        path: '*',
        Component: NotFound,
      }
    ],
  },
  {
    path: '/auth',
    children: [

    ]
  }
]);