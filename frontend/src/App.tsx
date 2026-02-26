import { createRouter, createRootRoute, createRoute, RouterProvider, Outlet, useRouterState } from '@tanstack/react-router';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Cases from './pages/Cases';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';

function ScrollToTop() {
  const routerState = useRouterState();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routerState.location.pathname]);
  return null;
}

const rootRoute = createRootRoute({
  component: () => (
    <>
      <ScrollToTop />
      <Layout />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const casesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cases',
  component: Cases,
});

const appointmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/appointment',
  component: Appointment,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  casesRoute,
  appointmentRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
