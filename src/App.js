import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SidebarComponent from './components/SidebarComponent.tsx';
import NavbarComponent from './components/NavbarComponent.tsx';
import FooterComponent from './components/FooterComponent.tsx';
import Homepage from './pages/homepage/Homepage.tsx';
import Users from './pages/users/Users.tsx';
import Request from './pages/request/Request.tsx';




const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-[rgb(31,41,55)]">
      <NavbarComponent />
      <div className="p-4 block sm:flex gap-4">
        <div>
          <SidebarComponent />
        </div>
        <div className='mt-4'>
          <Outlet />
        </div>
      </div>
      <footer className='mt-auto'>
        <FooterComponent />
      </footer>
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/request",
          element: <Request />,
        },
        {
          path: "/users",
          element: <Users />,
        },
      ]
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;
