import { createRouter, createRootRoute, createRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Cases from './pages/Cases';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';

const rootRoute = createRootRoute({
  component: () => <Layout />,
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
