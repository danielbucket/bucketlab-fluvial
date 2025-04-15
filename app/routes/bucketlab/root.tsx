import { Outlet } from "react-router";
import Navigate from './Navigate';
import Footer from './Footer';

export default function Root(){

  return (
    <div>
      <Navigate />
      <Outlet />
      <Footer />
    </div>
  );
};